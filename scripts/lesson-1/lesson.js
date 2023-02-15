const executeQueryFromFile = require("../helpers/handlerQuery");
const connection = require('../helpers/connection');

executeQueryFromFile('./queries/lesson-1/first.sql', connection); // select all from celebs
// runQueryFromFile('./queries/second.sql', connection); ///created table celebs
// runQueryFromFile('./queries/third.sql', connection);  ///insert values