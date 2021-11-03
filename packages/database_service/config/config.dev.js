const {PORT} = process.env;

module.exports = {
    port: PORT || 4000,
    mongoURI: 'mongodb+srv://db_user:opisath@microservice-db.6qpup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}