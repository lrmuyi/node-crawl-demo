const Sequelize = require('sequelize')
const config = require('./config/index')

//  创建sequelize实例
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,//数据库类型(这里使用mariadb)
    // timezon: '+08:00',
    define: {
        timestamps: false // 为模型添加 createdAt 和 updatedAt 两个时间戳字段（true or false）
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})
sequelize.authenticate()
.then(()=>{
    console.log('success')
}).catch(err=>{
    console.log(err)
})
module.exports = sequelize
