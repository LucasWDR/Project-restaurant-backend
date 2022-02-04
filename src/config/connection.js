const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('project_test', 'root', '', {
    host: 'localhost',
    dialect:'mysql' 
  });


  sequelize.authenticate().then(function(){
    console.log("Banco conectado")
}).catch(function(err){
    console.log("Falha ao logar no Servidor "+err)
})
  module.exports= sequelize;