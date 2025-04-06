import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <div className="form-card">
        <h3 className="card-title">Dynamic List Manager</h3>
        <div className="list-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add an item."
            className="input-field"
          />
          <button onClick={handleAddItem} className="add-button">
            Add Item
          </button>
        </div>

        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              <span className="item-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;