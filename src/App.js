import React, { useState } from "react";

const INITIAL_LIST = [
  { id: 1, name: "Domates", value: 55.0 },
  { id: 2, name: "Marul", value: 25.5 },
  { id: 3, name: "Ekmek", value: 10.99 },
];

function App() {
  return <ItemValueList />;
}

const ItemValueList = () => {
  // KODUNUZ BURAYA GELECEK
  const [items, setItems] = useState(INITIAL_LIST);
  const [itemName, setItemName] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [nextId, setNextId] = useState(4);

  const addItem = () => {
    if (itemName.trim() !== "" && parseFloat(itemValue) > 0) {
      const newItem = {
        id: nextId,
        name: itemName,
        value: parseFloat(itemValue),
      };
      setItems([...items, newItem]);
      setNextId(nextId + 1);
      setItemName("");
      setItemValue("");
    }
  };
  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleValueChange = (event) => {
    const value = event.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
      setItemValue(value);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Öğe adı"
          value={itemName}
          onChange={handleNameChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Fiyat"
          step="0.01"
          value={itemValue}
          onChange={handleValueChange}
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={addItem}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Ekle
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center py-2 border-b border-gray-300"
          >
            <span>
              {item.name} - ${item.value.toFixed(2)}
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
