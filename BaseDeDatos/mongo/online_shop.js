db.clients.insertMany([
    {
    name:"Cristiano",
    lastname:"Ronaldo",
    email: "guapodoportugal@gmail.com",
    phone_number: "+34 656548589",
    cart:[]
},{

    name:"Steven",
    lastname:"Seagle",
    email: "tedesarmoconlamirada@gmail.com",
    phone_number: "+34 64458786",
    cart:[]
}

]);

db.products.insertMany([
    {
        name:"TrypleS",
        marca:"Balenciaga",
        categoria:"Sneakers",
        price:"895€"
    },

    {
        name:"BoxerPack",
        marca:"Calvin Klein",
        categoria:"HomeWear",
        price:"60€"
    }
]);

const products = db.products.find().toArray();


db.clients.update(
    {name:"Steven"},
    {
        $set: {cart:[
            {product_id: products[1]._id,
            quantity:1},
        ]
    },
}
);

const clients = db.clients.find().toArray();

db.invoices.insertMany(
    [
        {
            product_id:products[1]._id,
            clientId: clients[0]._id,
            date: new Date()
        },
        {
            product_id:products[0]._id,
            clientId: clients[2]._id,
            date: new Date()
        },
        {
            product_id:products[2]._id,
            clientId: clients[1]._id,
            date: new Date()
        },
    ]
);



//Busquedas ejercicio 3

//1

db.restaurants.find().pretty()

//2

db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1}).pretty()

//3

db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0}).pretty()

//4

db.restaurants.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0, "address.zipcode":1}).pretty()

//5

db.restaurants.find({"borough":"Bronx"}).pretty()

//6

db.restaurants.find({"borough":"Bronx"}).limit(5).pretty()

//7

db.restaurants.find({"borough":"Bronx"}).skip(5).pretty()

//8

db.restaurants.count({"grades.score":{$gr: 90}}).pretty()// Me da 4 resultados pero no aparecen los nombres 

//9

db.restaurants.count({"grades.score":{$gr: 80, $lt: 100}}).pretty()

//10

db.restaurants.find({"address.coord":{$lt: -95.754168}})

//11

    db.restaurants.find(
        {$and:
             [
                {"cuisine" : {$ne :"American"}},
                {"grades.score" : {$gt : 70}},
                {"address.coord" : {$lt : -65.754168}}
             ]
         }
             ).pretty();


//12 

//Sin dolar no lo hago

//13

db.restaurants.find(
    {        
            "cuisine": {$ne : "American"},
            "borough": {$ne: "Brooklyn"},
            "grades.grade": "A",}
).sort({"cuisine":-1}).pretty()

//15

db.restaurants.find(
    {name: /ces$/},
    {
    "restaurant_id" : 1,
    "name":1,"borough":1,
    "cuisine" :1
    }
    )

//16

