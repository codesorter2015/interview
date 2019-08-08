HTTP Basic authentication is the simplest method for enforcing access controls to a web resource because it does not require cookies,session identifiers or login pages.
Rather it uses standard fields in the HTTP header for handshakes.
The browser generates a popup window when a server requires username and passeword to authenticate 

If you navigate to the endpoint https://httpbin.org/basic-auth/user/passwd in your browser, it should prompt you to enter a username and password
the default username is "user" and the default password is "passwd". 

the server should respond with the following json
{ 
  "authenticated" : true,
  "user" : "user"
}

if you don't provide any credentials or if you provide wrong credentials, the server rejects the access to protected resource and responds with an HTTP Status code of 401

When you provide correct credentials, the server responds with an HTTP Status code of 200
this is because HTTP Authorization manager adds "Authorization" http header to subsequent HTTP requests 

Base URL: https://httpbin.org/basic-auth/user/passwd.
User: user.
Password: passwd.
Mechanism: BASIC_DIGEST

