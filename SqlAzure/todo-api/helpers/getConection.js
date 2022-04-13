const Connection = require('tedious').Connection;
const dotenv = requier('dotenv');

dotenv.config();

const{
    DATABASE_SERVER,
    DATABASE_AUTH_TYPE,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME
} = process.env;

const configConnection = {
    server: DATABASE_SERVER,
    authenbtication: DATABASE_AUTH_TYPE,
    options:{
        username : DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
    },
    options: {
        encrypt: true,
        database: DATABASE_NAME,
        rowCollectionDone: true,
    }
};

const getConnection = () => {
    const connect = () => new Promise ((resolve, reject) => {
        const connectionInstance = new Connection(configConnection);
        connectionInstance.on('conect', (error) => {
            if(!error){
                resolve(connectionInstance);
            }else{
                reject(error);
            }

        });
        connectionInstance.connect();
    });
    return{connect};
};

module.exports = getConnection;
