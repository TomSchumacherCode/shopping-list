import './App.css';
import './index.css';
import ListForm from './Components/ListForm';
import React, { useState } from 'react';


function App() {
    const initialItemState = {itemName: "item 1", quantity: 1, }
    const [item, setItem] = useState(initialItemState);

  return (
    <div className="App">
        <ListForm 
            setItem={setItem}
            item={item}
        />


    </div>
  );
}

export default App;
