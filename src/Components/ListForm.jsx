import React, { useState } from 'react';

const ListForm= ({setItem, item}) => {
    const ingredients = [
        {id: 1, itemName: "Limes", quantity: "8", completed: false},
        {id: 2, itemName: "Vodka", quantity: "3", completed: true},
        {id: 3, itemName: "Ginger Beer", quantity: "12", completed: false},
        {id: 4, itemName: "Ice", quantity: "1", completed: true},    
    ]
    const [list, setList] = useState(ingredients);
    const [itemToAdd, setItemtoAdd] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [isRecieved, setIsRecieved] = useState("");




    const addNewItem= () => {

        const isCompleted = isRecieved === "no" ? false : true
        let newList = list
        let updatedList = {id: 1, itemName: itemToAdd, quantity: quantity, completed: isCompleted}
        setList([...list, updatedList])
        setItemtoAdd("")
        setQuantity(0)
        setIsRecieved("")

        console.log(updatedList)
    }


    return (
        <div>
            <div className= "listHeader">
                <div className= "headerAlign">
                    Ingredient
                </div>
                <div className= "headerAlign">
                    Quantity
                </div>
                <div className= "headerAlign">
                    Recieved
                </div>
            </div>
        {list.map(ingredient => {
            return (            
            <div key={ingredient.itemName} className="listRow">
                <div className= "headerAlign">
                    {ingredient.itemName}
                </div>
                <div className= "headerAlign">
                    {ingredient.quantity}
                </div>
                <div className= "headerAlign">
                    {ingredient.completed? "yes" : "no"}
                </div>
            </div>
            )
        } 
        )}
        <input type="text" placeholder='Items' value={itemToAdd}  onChange={ e => setItemtoAdd(e.target.value) }/>
        <input type="text" placeholder='Quantity needed' value={quantity} onChange={ e => setQuantity(e.target.value)} />
        <input type="text" placeholder='Still need?' value={isRecieved} onChange={ e => setIsRecieved(e.target.value)}/>

        <button onClick={addNewItem}>
            Add New
        </button>

        </div>
    )
};




export default ListForm;