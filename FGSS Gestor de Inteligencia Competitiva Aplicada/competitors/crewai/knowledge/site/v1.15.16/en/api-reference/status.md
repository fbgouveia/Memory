# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/api-reference/status
- Raw SHA-256: `67d529c2ac07a9f8ef77b36c3db93eb3a45afa44c78c8c271734aad5bf9aa3ba`

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
Navigation Getting Started GET /status/{kickoff_id}
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
GET /status/{kickoff_id}
Copy page Copy page
Get execution status
Copy page Copy page
Try it
cURL
curl --request GET \ --url https://your-actual-crew-name.crewai.com/status/{kickoff_id} \ --header 'Authorization: Bearer <token>'
import requests url = "https://your-actual-crew-name.crewai.com/status/{kickoff_id}" headers = {"Authorization": "Bearer <token>"} response = requests.get(url, headers=headers) print(response.text)
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}}; fetch('https://your-actual-crew-name.crewai.com/status/{kickoff_id}', options) .then(res => res.json()) .then(res => console.log(res)) .catch(err => console.error(err));
<?php $curl = curl_init(); curl_setopt_array($curl, [ CURLOPT_URL => "https://your-actual-crew-name.crewai.com/status/{kickoff_id}", CURLOPT_RETURNTRANSFER => true, CURLOPT_ENCODING => "", CURLOPT_MAXREDIRS => 10, CURLOPT_TIMEOUT => 30, CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, CURLOPT_CUSTOMREQUEST => "GET", CURLOPT_HTTPHEADER => [ "Authorization: Bearer <token>" ], ]); $response = curl_exec($curl); $err = curl_error($curl); curl_close($curl); if ($err) { echo "cURL Error #:" . $err; } else { echo $response; }
package main import ( "fmt" "net/http" "io" ) func main() { url := "https://your-actual-crew-name.crewai.com/status/{kickoff_id}" req, _ := http.NewRequest("GET", url, nil) req.Header.Add("Authorization", "Bearer <token>") res, _ := http.DefaultClient.Do(req) defer res.Body.Close() body, _ := io.ReadAll(res.Body) fmt.Println(string(body)) }
HttpResponse<String> response = Unirest.get("https://your-actual-crew-name.crewai.com/status/{kickoff_id}") .header("Authorization", "Bearer <token>") .asString();
require 'uri' require 'net/http' url = URI("https://your-actual-crew-name.crewai.com/status/{kickoff_id}") http = Net::HTTP.new(url.host, url.port) http.use_ssl = true request = Net::HTTP::Get.new(url) request["Authorization"] = 'Bearer <token>' response = http.request(request) puts response.read_body
200
running
{ "status" : "running" , "current_task" : "research_task" , "progress" : { "completed_tasks" : 1 , "total_tasks" : 3 } }
Authorizations
📋 Reference Documentation - The tokens shown in examples are placeholders for reference only.
Use your actual Bearer Token or User Bearer Token from the CrewAI AMP dashboard for real API calls.
Bearer Token : Organization-level access for full crew operations User Bearer Token : User-scoped access with limited permissions
Path Parameters
The kickoff ID returned from the /kickoff endpoint
"abcd1234-5678-90ef-ghij-klmnopqrstuv"
Response
200
application/json
Successfully retrieved execution status
Option 1
Option 2
Option 3
"running"
Name of the currently executing task
"research_task"
Show child attributes
Was this page helpful?
Yes
No
