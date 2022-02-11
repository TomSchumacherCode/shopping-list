import React from "react";

function ListPage() [
    {id: 1, item: "Limes", quantity: "8", completed: false},
    {id: 2, item: "Vodka", quantity: "3", completed: true},
    {id: 3, item: "Ginger Beer", quantity: "12", completed: false},
    {id: 4, item: "Ice", quantity: "1", completed: true},
];


return (
    <div>
        <label htmlFor="item">Item</label>
        <input 
        onChange={(e) => {
            setItem(e.target.value);
        }}
        value={item} 
        id="item"
        type="text"
        />
        <label htmlFor="quantity">Quantity</label>
        <input 
        onChange={(e) => {
            setQuantity(e.target.value);
                }}
        value={value} 
        id="quantity"
        type="text" 
        />
    </div>
)

export default ListPage;