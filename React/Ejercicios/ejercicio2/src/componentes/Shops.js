import List from "./List";

export default function Shop(props) {
    const shopList = {
        electronics: [
            {id:28, name: "Televisor", brand:"LG", model:"XP7302", price:399},
            {id:28, name: "Equipo Hi-Fi", brand:"Samngsung", model:"VF235", price:179},
            {id:29, name: "Televesor", brand:"Sony", model:"Bravia-173", price:498},
        ],
        deals: [
            {id:30, name: "Galletas", brand:"Maria", price:0.90},
            {id:31, name: "Ensalada", brand:"Imazurra", price:1.30},
            {id:32, name: "Patatas", brand:"Mckain", price:0.90},
            {id:33, name: "Pasta", brand:"Gallo", price:0.90},
        ],

        pets: [
            {id:34, name: "Croquetas para Gato", brand:"Purina", price:4.90},
            {id:35, name: "Arena para Gato", brand:"Limpior", price:1.10},

        ]

    }
    return (
        <div>
            <List category="electronics" products={shopList.electronics}/>
            <List category="deals" products={shopList.deals}/>
            <List category="pets" products={shopList.pets}/>
        </div>
    )
}
