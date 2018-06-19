const fs = require('fs');
const http = require('http');
const port = 3000;


const requestHandler = (request, response) => {
  response.end(
    fs.writeFile('hello-world.txt', 'HelloWorld', 'utf8', (err) => {
      if (err) throw err;
      console.log('Created hello-world.txt')
    })
  )
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }

  console.log(`sever is listening on ${port}`);
});