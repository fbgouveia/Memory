// Módulo de Logging com Mascaramento LGPD (PII Masking)
// tag: #LGPD-LOG-MASKING

const CHAVES_SENSIVEIS = ['senha', 'password', 'token', 'cpf', 'telefone', 'cartao', 'credit_card', 'body'];

function mascararDadosSensiveis(objeto) {
  if (typeof objeto !== 'object' || objeto === null) return objeto;
  
  const objetoSanitizado = Array.isArray(objeto) ? [] : {};
  
  for (const [chave, valor] of Object.entries(objeto)) {
    if (CHAVES_SENSIVEIS.includes(chave.toLowerCase())) {
      objetoSanitizado[chave] = '[REDACT_LGPD_COMPLIANT]';
    } else if (typeof valor === 'object') {
      objetoSanitizado[chave] = mascararDadosSensiveis(valor);
    } else {
      objetoSanitizado[chave] = valor;
    }
  }
  return objetoSanitizado;
}

const logger = {
  info: (mensagem, payload = null) => {
    const limpo = payload ? mascararDadosSensiveis(payload) : '';
    console.log(`[INFO] ${new Date().toISOString()} - ${mensagem}`, limpo);
  },
  error: (mensagem, erro = null, payload = null) => {
    const erroLimpo = erro && erro.stack ? erro.stack : erro;
    const payloadLimpo = payload ? mascararDadosSensiveis(payload) : '';
    console.error(`[ERROR] ${new Date().toISOString()} - ${mensagem}`, { error: erroLimpo, payload: payloadLimpo });
  }
};

module.exports = logger;
