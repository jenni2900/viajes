import { Sequelize } from "sequelize";

const db = new Sequelize ('TablaViajes_somehowor','TablaViajes_somehowor','c3ca5b6dc225ef1437ebc493115568eff0dbcb41',{
    host: '6mxiw.h.filess.io',
    port: '3307',
    dialect: 'mysql',
    define:{
        timestamps: false


    },
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    }, 
    operatorsAliases: false






});


export default db;