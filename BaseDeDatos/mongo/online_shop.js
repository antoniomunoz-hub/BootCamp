db.chats.insertMany([
    {
        members:[users[0]._id, users[1]._id,users[2]._id],
        messages: [
            {
                from: users[0]._id,
                body:"Hola soy el siguiente campeon",
                createAt:new Date(2021, 4, 8, 17, 30, 15)
            },
            {
                from: users[0]._id,
                body:"Yo te quito el boli y te lo clavo en un ojo",
                createAt:new Date(2021, 4, 8, 17, 31, 15)
            },
            {
                from: users[0]._id,
                body:"Pues yo me incho de beber en un bar y le pego a todos los chinos malos",
                createAt:new Date(2021, 4, 8, 17, 32, 15)
            }
        ]
    },
    {
        members:[users[1]._id, users[2]._id],
        messages: [
            {
                from: users[0]._id,
                body:"Como vea la cosa chunga os tiro arena en los ojos",
                createAt:new Date(2021, 4, 8, 17, 35, 15)
            },
            {
                from: users[1]._id,
                body:"Yo veo con los ojos cerrados",
                createAt:new Date(2021, 4, 8, 17, 37, 15)
            },
        ]
    }
]);




const users = db.users.find().toArray()

db.users.update({_id: users[0]._id}, 
    {$set: {contacts: 
        [users[1]._id, 
        users[2]._id, 
        users[3]._id]
    }
});


db.users.find()