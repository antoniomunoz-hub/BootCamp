const { request } = require('express');
const { query } = require('express');
const getConnection = require('./getConection');
const Request = require('tedious').RequestM
const execQuery = (query, parameters, callBackEvent) => {
    const command = new Promise((resolve, reject)=>{
        getConnection().connect()
        .then(instance =>{
            const request = new Request(query, (error) =>{
                if(error){
                    reject(error);
                }
            });
            if(parameters){
                parameters.forEach(parameter =>{
                    request.addParameter(
                        parameter.name,
                        parameter.type,
                        parameter.value
                    );
                });
            }
            const close = () => instance.close();
            request.on('error', error => {
                close();
                reject(error);
            });
            callBackEvent(request, close, resolve);
        })
        .catch(error => reject(error));
    });
    return command;
};

const execWriteCommand = (query, parameters) => {
    const callBackEvent = (request, close, resolve) => {
        request.on ('requestCompleted', (rowCount, more) => {
            close();
            resolve(rowCount, more);
        });
    };

    return(execQuery(query, parameters, callBackEvent));


};

const execReadCommand = (query, parameters = null) => {
    const callBackEvent = (request, close, resolve) => {
        request.on('doneInProc', (rowCount, more, rows) => {
            const responseRows = [];
            if(rows) rows.forEach(row => {
                const currentRow = {};
                if(row) row.forEach(column =>{
                    currentRow[column.metadata.colName] = column.value;
                });
                responseRows.push(currentRow);
            });
            resolve(responseRows);
        });
        request.on('requestCompleted', () => close());   
    };
    return execQuery(query,parameters, callBackEvent);
};

module.exports = {
    execWriteCommand,
    execReadCommand,
}