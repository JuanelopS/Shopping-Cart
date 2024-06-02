import { useAppContext } from "../providers/AppProvider";
import { BiTrash } from "react-icons/bi";

const List = () => {
  const { products, dispatch } = useAppContext();

  const handleDelete = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  let list = <h4 id="no-products">No products yet</h4>;

  if (products.length > 0) {
    list = (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Units</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.units}</td>
                <td>{product.price}€</td>
                <td>
                  <BiTrash onClick={() => handleDelete(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <div id="list-title">
        <h2>Products List</h2>
        {products.length > 0 && <button onClick={handleClearCart}>Clear Cart</button>}
      </div>
      {list}
    </>
  );
};

export default List;
