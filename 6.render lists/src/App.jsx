import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 54 },
    { id: 2, name: "orange", calories: 47 },
    { id: 3, name: "banana", calories: 89 },
    { id: 4, name: "cocoa", calories: 228 },
    { id: 5, name: "pineapple", calories: 50 },
    { id: 6, name: "mango", calories: 60 },
  ];

  const vegetables = [
    { id: 7, name: "lettuce", calories: 5 },
    { id: 8, name: "spinach", calories: 7 },
    { id: 9, name: "cucumber", calories: 16 },
    { id: 10, name: "tomatoes", calories: 36 },
    { id: 11, name: "sweet potato", calories: 129 },
    { id: 12, name: "corn", calories: 177 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />};
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
      ;
    </>
  );
}

export default App;
