import Budget from "./Budget";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
import { useAppContext } from "../providers/AppProvider";

const ShoppingList = () => {
  const [initialBudget, setInitialBudget] = useState(0);

  const { dispatch, showList } = useAppContext();

  const handleBudget = (e) => {
    e.preventDefault();
    setInitialBudget(Number(initialBudget));
    dispatch({ type: "SET_BUDGET", payload: Number(initialBudget)});
  };

  const handleResetBudget = () => {
    dispatch({ type: "RESET_BUDGET" });
  }

  return (
    <>
      {!showList ? (
        <>
        <h2>Set your initial budget:</h2>
        <form onSubmit={handleBudget}>
          <input
            type="number"
            placeholder="Budget"
            onChange={(e) => setInitialBudget(e.target.value)}
          />
          <input type="submit" value={"Set Budget"} />
        </form>
        </>
      ) : (
        <main>
          <header>
            <h1>Shopping List</h1>
            <Budget />
            <button onClick={handleResetBudget}>Reset</button>
          </header>
          <section>
            <Form />
          </section>
          <section>
            <List />
          </section>
        </main>
      )}
    </>
  );
};

export default ShoppingList;
