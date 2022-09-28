const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const TodosList = sequelize.define('todos_list', {
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});
const TodoItem = sequelize.define('todo_item', {
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
const Workers = sequelize.define('workers', {
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});
const Contacts = sequelize.define('contacts', {
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    info: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
});
const TodoWorker = sequelize.define('todo_worker', {
    id:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

TodosList.hasMany(TodoItem);
TodoItem.belongsTo(TodosList);


TodosList.hasMany(Workers);
Workers.belongsTo(TodosList);

Workers.belongsToMany(TodoItem, {through: TodoWorker})
TodoItem.belongsToMany(Workers, {through: TodoWorker})

module.exports = {
    TodosList,
    TodoItem,
    Workers,
    Contacts
}