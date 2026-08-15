# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/api-reference/inputs
- Raw SHA-256: `54d6a4dbdeea4f64ea5be60c399d505d7a44bf1804de0e0d69d7b4ea3dcfe32c`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
v1.15.16
English
Search... ⌘ K
Ask Assistant
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Getting Started GET /inputs
Website
Forum
Blog
CrewGPT
Getting Started
Introduction
GET GET /inputs
POST POST /kickoff
POST POST /resume
GET GET /status/{kickoff_id}
GET /inputs
Copy page Copy page
Get required inputs for your crew
Copy page Copy page
Try it
cURL
curl --request GET \ --url https://your-actual-crew-name.crewai.com/inputs \ --header 'Authorization: Bearer <token>'
import requests url = "https://your-actual-crew-name.crewai.com/inputs" headers = {"Authorization": "Bearer <token>"} response = requests.get(url, headers=headers) print(response.text)
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}}; fetch('https://your-actual-crew-name.crewai.com/inputs', options) .then(res => res.json()) .then(res => console.log(res)) .catch(err => console.error(err));
<?php $curl = curl_init(); curl_setopt_array($curl, [ CURLOPT_URL => "https://your-actual-crew-name.crewai.com/inputs", CURLOPT_RETURNTRANSFER => true, CURLOPT_ENCODING => "", CURLOPT_MAXREDIRS => 10, CURLOPT_TIMEOUT => 30, CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, CURLOPT_CUSTOMREQUEST => "GET", CURLOPT_HTTPHEADER => [ "Authorization: Bearer <token>" ], ]); $response = curl_exec($curl); $err = curl_error($curl); curl_close($curl); if ($err) { echo "cURL Error #:" . $err; } else { echo $response; }
package main import ( "fmt" "net/http" "io" ) func main() { url := "https://your-actual-crew-name.crewai.com/inputs" req, _ := http.NewRequest("GET", url, nil) req.Header.Add("Authorization", "Bearer <token>") res, _ := http.DefaultClient.Do(req) defer res.Body.Close() body, _ := io.ReadAll(res.Body) fmt.Println(string(body)) }
HttpResponse<String> response = Unirest.get("https://your-actual-crew-name.crewai.com/inputs") .header("Authorization", "Bearer <token>") .asString();
require 'uri' require 'net/http' url = URI("https://your-actual-crew-name.crewai.com/inputs") http = Net::HTTP.new(url.host, url.port) http.use_ssl = true request = Net::HTTP::Get.new(url) request["Authorization"] = 'Bearer <token>' response = http.request(request) puts response.read_body
200
travel_crew
{ "inputs" : [ "budget" , "interests" , "duration" , "age" ] }
Authorizations
📋 Reference Documentation - The tokens shown in examples are placeholders for reference only.
Use your actual Bearer Token or User Bearer Token from the CrewAI AMP dashboard for real API calls.
Bearer Token : Organization-level access for full crew operations User Bearer Token : User-scoped access with limited permissions
Response
200
application/json
Successfully retrieved required inputs
Array of required input parameter names
[ "budget" , "interests" , "duration" , "age" ]
Was this page helpful?
Yes
No
