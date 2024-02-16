// React hook = special function that allows functional components
//     to use react features without writing class components
//     (useState, useEffect, useContext, useReducer, useCallback and more )

// useState() = the creation of a stateful variable and a Setter function to update its value in the virtual Dom
//      basically we can create not just a variable but a stateful variable.
//      when you update this variable that change will be reflected in the virtual DOM

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  return <Counter />;
}

export default App;
