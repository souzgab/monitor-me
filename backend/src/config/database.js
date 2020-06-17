
module.exports={
    dialect: 'mssql',
    host: 'srvabeecultor.database.windows.net',
    username: 'userabeecultor',
    password: '#Gfgrupo8b',
    database: 'monitorMe',
    define: {
        timestamps: true,
    },
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
        options: {
          encrypt: true
        }
    },
}


// module.exports={
//     dialect: 'mssql',
//     host: 'srvabeecultor.database.windows.net',
//     username: 'userabeecultor',
//     password: '#Gfgrupo8b',
//     database: 'monitorMe',
//     define: {
//         timestamps: true,
//     },
//     xuse_env_variable: 'DATABASE_URL',
//     dialectOptions: {
//         options: {
//           encrypt: true
//         }
//     },
// }