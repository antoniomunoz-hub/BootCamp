import List from "./List";

export default function shop() {
    const shop = {
        electronics: [
            {id:27, product: "Galletas", marca:"Maria", precio:0.90},
            {id:28, product: "Equipo Hi-Fi", marca:"Samngsung", modelo:"VF235", precio:179},
            {id:29, product: "Televesor", marca:"Sony", modelo:"Bravia-173", precio:498},
        ],
        deals: [
            {id:30, product: "Galletas", marca:"Maria", precio:0.90},
            {id:31, product: "Ensalada", marca:"Imazurra", precio:1.30},
            {id:32, product: "Patatas", marca:"Mckain", precio:0.90},
            {id:33, product: "Pasta", marca:"Gallo", precio:0.90},
        ],

        pets: [
            {id:34, product: "Croquetas para Gato", marca:"Purina", precio:4.90},
            {id:35, product: "Arena para Gato", marca:"Limpior", precio:1.10},

        ]

    }
    return (
        <div>
            <List/>
            <List/>
            <List/>            
        </div>
    )
}
