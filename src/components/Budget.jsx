import { useAppContext } from "../providers/AppProvider";

const Budget = () => {

  const { budget } = useAppContext();

  return <div id="budget">Budget: {budget.toFixed(2)}€</div>;
};

export default Budget;
