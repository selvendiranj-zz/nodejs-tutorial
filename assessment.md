# Assessment use cases

* Design a NodeJS - Command Line Interface
  * Design a windows based CLI  which is able to spawn multiple child processes and show their output in command line window
    (the same window)
  * Implement important 10 windows shell commands (cmd.exe commands)
* Design a NodeJs - Chat Application
  * Use web sockets
  * On the server-side, we have a simple Express.js application which implements two things: 1) a GET ‘/’ request handler which serves
    the webpage containing both a message board and a ‘Send’ button to initialize new message input, and
    2) a websockets server that listens for new messages emitted by websocket clients.
  * On the client-side, we have an HTML page with a couple of handlers set up, one for the ‘Send’ button click event, which picks up
    the input message and sends it down the websocket, and another that listens for new incoming messages on the websockets client
    (i.e., messages sent by other users, which the server now wants the client to display).
* Create a full core banking application using loopback
  * Initialize the nodejs application using loopback
  * ability to create, read, update, delete bank accounts (include form validation, provide role based access to functionalities)
  * ability to do fund transfer based on working hours
  * protect all endpoints using authentication provided by loopback framework
  * use nodejs modular programming (module.exports)
  * use code linting tools (code should strictly follow the linting rule sets)
  * use any one of nodejs unit testing tools and unit test coverage output should be >= 80%
  * use grunt for build automation and run unit testing tasks as part of build process.
    proceed to run build only if unit testing is successful.
