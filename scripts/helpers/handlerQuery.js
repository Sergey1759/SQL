const fs = require('fs');

function executeQueryFromFile(file, connection) {
    let queries = fs.readFileSync(file,{encoding:'utf8', flag:'r'}).toString();
    queries =  queries.replaceAll(/\r?\n|\r/g,'').split(';');
    queries.length = queries.length -1;

    for (const query of queries) {
        connection.query(query+';', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
        });
    }
}

module.exports = executeQueryFromFile;



