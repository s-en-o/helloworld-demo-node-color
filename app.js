const http = require('http');
const PORT = 7070;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`
    <html>
      <head>
        <style>
          body {
            background-color: red;
            font-family: 'Courier New', monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
          }
          pre {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <pre>
          ##         .
          ## ## ##        ==
          ## ## ## ## ##    ===
          /""""""""""""""""\\___/ ===
          {                       /  ===-
          \\______ O           __/
          \\    \\         __/
            \\____\\_______/

          Hello from Docker!
        </pre>
      </body>
    </html>
  `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server started, running on port ${PORT}`);
});
