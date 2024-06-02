export const initialState = localStorage.getItem("localCart")
  ? JSON.parse(localStorage.getItem("localCart"))
  : {
      products: [],
      budget: 300,
      showList: false,
    };

/* <<reducer function>>
  state: current state
  action: object that contains the type of action to perform and the payload
*/
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BUDGET": {
      return handleSetBudget(state, action);
    }
    case "RESET_BUDGET": {
      return handleResetBudget(state);
    }
    case "ADD_PRODUCT": {
      return handleAddProduct(state, action);
    }
    case "REMOVE_PRODUCT": {
      return handleRemoveProduct(state, action);
    }
    case "CLEAR_CART": {
      return handleClearCart(state);
    }
  }
};

const handleSetBudget = (state, { payload }) => {
  let result = { ...state, budget: payload, showList: true };
  localStorage.setItem("localCart", JSON.stringify(result));
  return result;
};

const handleResetBudget = (state) => {
  let result = { ...state, products: [], showList: false };
  localStorage.setItem("localCart", JSON.stringify(result));
  return result;
};

const handleAddProduct = (state, { payload }) => {
  let checkProduct = state.products.find(
    (product) => product.name === payload.name
  );

  if (checkProduct) {
    let newProducts = state.products.map((product) => {
      if (product.name === payload.name) {
        return {
          ...product,
          units: parseInt(product.units) + parseInt(payload.units),
        };
      }
      return product;
    });
    let result = {
      ...state,
      products: newProducts,
      budget: state.budget - payload.price * payload.units,
    };
    localStorage.setItem("localCart", JSON.stringify(result));
    return result;
  }

  let result = {
    ...state,
    products: [...state.products, payload],
    budget: state.budget - payload.price * payload.units,
  };
  localStorage.setItem("localCart", JSON.stringify(result));
  return result;
};

const handleRemoveProduct = (state, { payload }) => {
  let result = {
    ...state,
    products: state.products.filter((product) => product.name !== payload.name),
    budget: state.budget + payload.price * payload.units,
  };
  localStorage.setItem("localCart", JSON.stringify(result));
  return result;
};

// Clear the cart and recover initial budget
const handleClearCart = (state) => {
  let initialBudget = state.products.reduce((acc, product) => {
    return acc + product.price * product.units;
  }, state.budget);
  let result = { ...state, budget: initialBudget, products: [], showList: true };
  localStorage.setItem("localCart", JSON.stringify(result));
  return result;
};
