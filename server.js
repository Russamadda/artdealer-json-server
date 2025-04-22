const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/images', require('express').static(path.join(__dirname, 'images')))

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

