#!/usr/bin/env python3
import os
import sys
import json

def validate_manifest(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"❌ Erro de Sintaxe JSON no manifesto {filepath}: {e}")
        return False
    except Exception as e:
        print(f"❌ Falha ao ler o manifesto {filepath}: {e}")
        return False

    required_fields = {
        "id": str,
        "name": str,
        "version": str,
        "owner": str,
        "cost_level": str,
        "inputs": list,
        "outputs": list,
        "dependencies": list,
        "rate_limits": dict,
        "contingency": dict
    }

    # 1. Validação de Campos Obrigatórios e Tipos
    for field, expected_type in required_fields.items():
        if field not in data:
            print(f"❌ Campo obrigatório ausente no manifesto {filepath}: '{field}'")
            return False
        if not isinstance(data[field], expected_type):
            print(f"❌ Tipo de dado inválido para '{field}' no manifesto {filepath}. Esperado: {expected_type.__name__}, Recebido: {type(data[field]).__name__}")
            return False

    # 2. Validação Rígida de Valores Específicos
    if data["cost_level"] not in ["low", "medium", "high"]:
        print(f"❌ Valor inválido para 'cost_level' no manifesto {filepath}: '{data['cost_level']}' (esperado: 'low', 'medium' ou 'high')")
        return False

    # 3. Validação dos Inputs
    for idx, inp in enumerate(data["inputs"]):
        if not isinstance(inp, dict):
            print(f"❌ Input na posição {idx} no manifesto {filepath} deve ser um objeto JSON.")
            return False
        if "type" not in inp or "source" not in inp:
            print(f"❌ Campos 'type' e 'source' são obrigatórios em inputs no manifesto {filepath} (posição {idx}).")
            return False
        if inp["type"] not in ["webhook", "cron", "polling", "event"]:
            print(f"❌ Tipo de input inválido no manifesto {filepath}: '{inp['type']}' (posição {idx})")
            return False

    # 4. Validação dos Outputs
    for idx, out in enumerate(data["outputs"]):
        if not isinstance(out, dict):
            print(f"❌ Output na posição {idx} no manifesto {filepath} deve ser um objeto JSON.")
            return False
        if "type" not in out or "channel" not in out:
            print(f"❌ Campos 'type' e 'channel' são obrigatórios em outputs no manifesto {filepath} (posição {idx}).")
            return False

    # 5. Validação de Rate Limits e Contingência
    rate = data["rate_limits"]
    if "max_requests" not in rate or "duration_ms" not in rate:
        print(f"❌ Campos 'max_requests' e 'duration_ms' são obrigatórios em 'rate_limits' no manifesto {filepath}.")
        return False
    if not isinstance(rate["max_requests"], int) or not isinstance(rate["duration_ms"], int):
        print(f"❌ 'max_requests' e 'duration_ms' em 'rate_limits' devem ser inteiros no manifesto {filepath}.")
        return False

    cont = data["contingency"]
    if "retry_attempts" not in cont or "use_dlq" not in cont:
        print(f"❌ Campos 'retry_attempts' e 'use_dlq' são obrigatórios em 'contingency' no manifesto {filepath}.")
        return False
    if not isinstance(cont["retry_attempts"], int) or not isinstance(cont["use_dlq"], bool):
        print(f"❌ 'retry_attempts' deve ser inteiro e 'use_dlq' deve ser booleano em 'contingency' no manifesto {filepath}.")
        return False

    return True

def main():
    integrations_dir = "/Users/felipegouveia/Developer/CÉREBRO/FGSS Gestor de Automacao/integrations"
    if not os.path.exists(integrations_dir):
        print("ℹ️ Diretório de integrações não existe localmente.")
        sys.exit(0)

    has_errors = False
    manifests_found = 0

    print("🔎 Iniciando varredura e validação de manifestos de automação...", flush=True)

    for item in os.listdir(integrations_dir):
        item_path = os.path.join(integrations_dir, item)
        if os.path.isdir(item_path):
            manifest_path = os.path.join(item_path, "automation-manifest.json")
            if os.path.exists(manifest_path):
                manifests_found += 1
                if not validate_manifest(manifest_path):
                    has_errors = True
            else:
                print(f"⚠️ Alerta: Pasta de integração encontrada sem manifesto: {item_path}")
                has_errors = True

    if manifests_found == 0:
        print("ℹ️ Nenhum manifesto de automação encontrado para validar.")
        sys.exit(0)

    if has_errors:
        print("\n❌ Erro: Um ou mais manifestos de automação falharam na validação técnica.")
        sys.exit(1)
    else:
        print(f"\n✅ Sucesso: Todos os {manifests_found} manifestos foram validados e aprovados.")
        sys.exit(0)

if __name__ == "__main__":
    main()
