const porduct = [
    {
        name: "desktop",
        price: 2000,
        item: 3
    },
    {
        name: "laptop",
        price: 1500,
        item: 6
    },
    {
        name: "iphone",
        price: 1000,
        item: 5
    }
]
const totalItem = porduct.map(pro => ({
    name : pro.porduct,
    total : pro.price * pro.item
}))
console.log(totalItem)