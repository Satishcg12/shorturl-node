const {DB_NAME, DB_PASS} = process.env;
module.exports = {
    uri: `mongodb+srv://${DB_NAME}:${DB_PASS}@cluster0.wk9q75r.mongodb.net/?retryWrites=true&w=majority`
  };
  