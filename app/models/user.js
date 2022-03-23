// os models são a representação das tabelas do banco de dados em forma de classe, 
// pois assim podemos manipulá-las mais facilmente através do código.

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    })
    return User
}

