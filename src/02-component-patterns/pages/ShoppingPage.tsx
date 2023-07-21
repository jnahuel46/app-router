import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { products } from "../data/products";

export interface ProductInCart extends Product {
  count: number;
}
const product = products[0];
const ShoppingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        className="bg-dark text-white"
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" activeClass="active" />
            <ProductButtons className="custom-buttons" />
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2</button>}

            <button onClick={reset}> Reset </button>
            <span>{count} || {maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
