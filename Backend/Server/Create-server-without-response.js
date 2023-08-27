// server creating

// http module of nodejs is used to create a server 
const http = require('http');
// a callback function argument accepts request object(the data which is coming from browser, it carries the path of it) 
//  and reponse object(we use this object to send the response from client to server).
const server = http.createServer((req, res)=>{
    console.log("The request has been made from the browser to server");
})

// now server has been created but it will not fucntion, we have created it but it couldn't listen
// server: sunte raho pta nhi kb koi request maar de, kahan se sunu: portNo:3000, kahan se request aaegi : local host, callback function
// argument: postNo, localhost, callback function
server.listen(3000, 'localhost', ()=>{
    console.log("Server is listning on port 3000, request are coming from localHost, I'm result of the callback function");
})


// localhost is a domain on web, ex: NR_AceCoding,
// but its special type of IP address, which points to it's own computer
// also known as loopback IP address, (own computer is host and it will return result/response to the browser)


// port is door in computer, fucntionalities: 
// skype, discord, whatsapp

// press ctrl+c to exit from listening

// it won't give you response, the website of (localhost:3000) will stop once the timeout: timeout ERROR
