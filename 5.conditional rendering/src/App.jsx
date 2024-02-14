//conditional rendering = allows you to control what gets rendered
//           in your application based on certain conditions
//         (show, hide or change component)

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Padmashree" />
    </>
  );
}

export default App;
