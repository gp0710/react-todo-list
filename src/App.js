import {useState} from 'react';

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function addItem(e) {
    const newList = [...list, {id: 1 + Math.random(), value: item.slice()}];
    setList(newList);
  }

  function handleChange(e) {
    setItem(e.target.value)
  }

  function deleteItem(id) {
    const newList = [...list]
    const updatedList = newList.filter(item => item.id !== id);

    setList(updatedList);
  }
  return (
    <div className="App">
      <div>
        Add an item
        <br />
        <input 
          type="text"
          value={item}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add</button>
        <br />
        <ul>
          {list.map(item => {
            return(<li key={item.id}>
              { item.value }
              <button onClick={()=> {deleteItem(item.id)}}>X</button>
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
