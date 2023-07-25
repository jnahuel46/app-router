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
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
      
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
