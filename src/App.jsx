import ShoppingList from "./components/ShoppingList";
import { AppProvider } from "./providers/AppProvider";
import { useState } from "react";

const App = () => {
  
  return (
    <>
      <AppProvider>
        <ShoppingList />
      </AppProvider>
    </>
  );
};

export default App;
