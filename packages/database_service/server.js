const server = require('express')();
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const bodyParser = require('body-parser');
const {makeExecutableSchema} = require('graphql-tools');
const schema = require('./data/schema');


const config = require('./config');
const {port} = config;


server
.use(bodyParser.json());

require('./dbUtil')(config);
require('./routes/get')(server);
require('./routes/post')(server);

server
.use('/graphql', graphqlExpress({schema}))
.use('/gq', graphiqlExpress({endpointURL: '/graphql'}))
.listen(port, () => console.log(`Listening on port ${port}`));