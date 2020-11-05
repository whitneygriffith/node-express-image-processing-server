require('express');
require('path');

const app = express();
const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', function(request, response) {
  response.sendFile( pathToIndex );
});

module.exprts = app;
