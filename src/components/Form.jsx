import { useState } from "react";
import { useAppContext } from "../providers/AppProvider";

const Form = () => {
  const [name, setName] = useState("");
  const [units, setUnits] = useState(0);
  const [price, setPrice] = useState(0);

  const { dispatch } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
      name,
      units,
      price,
    };
    dispatch({ type: "ADD_PRODUCT", payload: product });
    e.target.reset();
    e.target[0].focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add name"
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />
        <input
          type="number"
          placeholder="Add units"
          onChange={(e) => setUnits(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Add price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
