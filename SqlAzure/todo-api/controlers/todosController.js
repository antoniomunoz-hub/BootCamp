const todosRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const todosModel = require('./../models/toDosModel');

todosRoute('/', async(req, res)=>{
    todosModel.allTodo()
    .then(data => {
        res.status(200).json({data}); 
    })
    .catch(error =>{
        res.status(500).json({error});
    });
});

todosRoute.get('/:id', async(req, res) =>{
    const {id: todoID} = req.params;
    todosModel.getByIDTodo(todoID)
    .then(data =>{
        if(data.length > 0){
            res.status(200).json({data:{...data[0]}})
        }else{
            res.status(404).json({error: ' No se encuenta la tarea'})
        }
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.post('/', async(req, res) => {
    const todoID = uuidv4();
    const {
        author,
        todoDate,
        description,
        state
    } = req.body;
    todosModel.addTodo({
        todoID,
        author,
        tooDate,
        description,
        state
    })
    .then ((rowCount, more) => {
        res.status(200).json({
            data:{
                rowCount,
                more,
                todoID
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.put('/:id', async(req, res) => {
    const {id :todoID} = req.params;
    const {
        author,
        todoDate,
        description,
        state
    } = req.body;
    todosModel.updateTodo({
        todoID,
        author,
        tooDate,
        description,
        state
    })
    .then ((rowCount, more) => {
        res.status(200).json({
            data:{
                rowCount,
                more,
                todoID
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.put('/:id/completed', async(req, res) => {
    const {id: todoID} = req.params;
    todosModel.completeTodo(todoID)
    .then((rowCount, more)=> {
        res.status(200).json({
            data: {
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.put('/:id/changeState', async(req, res) => {
    const {id: todoID} = req.params;
    const {state} = req.body

    todosModel.changeStateTodo(todoID, state)
    .then((rowCount, more)=> {
        res.status(200).json({
            data: {
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});
    });
});

todosRoute.delete('/:id', async(req, res) =>{
    const{id:todoId} = req.params;
    todosModel.deleteTodo(todoID)
    .then((rowCount, more) => {
        res.status(200).json({rowCount, more});
    })
    .catch(error => {
        res.status(500).json({rowCount, more});
    })
});

module.exports = todosRoute;