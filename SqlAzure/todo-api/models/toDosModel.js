const execQuery = require('./../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const addTodo = (todoData) => {
    const {
        todoID,
        author,
        todoDate,
        description,
        state,
    } = todoData;
    const query = `
    INSERT INTO [dbo].[Todos](TodoID, Author, TodoDate, TodoDescription, TodoState)
    VALUES(@todoID, @author, @todoDate, @description, @state)
    `;
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID},
        {name: 'author', type : TYPES.UniqueIdentifier, value: author},
        {name: 'todoDate', type : TYPES.UniqueIdentifier, value: todoDate},
        {name: 'description', type : TYPES.UniqueIdentifier, value: description},
        {name: 'state', type : TYPES.UniqueIdentifier, value: state},
    ];
    return execQuery.execReadCommand(query, parameters);
};

const updateTodo = (todoData) => {
    const {
        todoID,
        author,
        todoDate,
        description,
        state,
    } = todoData;
    const query = `
    UPDATE [dbo].[Todos]
    SET Author = @author, TodoDate = @todoDate, TodoDescription = @description, TodoState = @state
    WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID},
        {name: 'author', type : TYPES.UniqueIdentifier, value: author},
        {name: 'todoDate', type : TYPES.UniqueIdentifier, value: todoDate},
        {name: 'description', type : TYPES.UniqueIdentifier, value: description},
        {name: 'state', type : TYPES.UniqueIdentifier, value: state},
    ];
    return execQuery.execReadCommand(query, parameters);
};

const deleteTodo = (todoID) => {
    const query = `
    DELETE FROM [dbo].[Todos]
    WHERE TodoID = @todoId
    `;
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID}
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const allTodo = () => {
    const query = `
    SELECT * FROM [dbo].[Todos]
    `;
    return execQuery.execReadCommand(query);
};

const getByIDTodo = (todoID) => {
    const query = `
    SELECT * FROM [dbo].[Todos]
    WHERE TodoID = @todoId
    `;
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID}
    ];
    return execQuery.execReadCommand(query, parameters);

};

const completeTodo = (todoID) => {
    const query = `
    UPDATE [dbo].[Todos]
    SET TodoState = 5
    WHERE TodoID = @todoID
    `;
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID}
    ];
    
    return execQuery.execWriteCommand(query, parameters);

};

const changeStateTodo = (todoID) => {
    const query = `
    UPDATE [dbo].[Todos]
    SET TodoState = @state
    WHERE TodoID = @todoID
    `;
    
    const parameters = [
        {name: 'todoID', type : TYPES.UniqueIdentifier, value: todoID},
        {name: 'state', type : TYPES.SmallInt, value: state}
    ];
    
    return execQuery.execWriteCommand(query, parameters);

};

module.exports = [
    addTodo,
    updateTodo,
    deleteTodo,
    allTodo,
    getByIDTodo,
    completeTodo,
    changeStateTodo,
];