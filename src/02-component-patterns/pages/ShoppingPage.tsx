import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShopingCart } from "../hooks/useShopingCart";


export interface ProductInCart extends Product {
  count: number;
}

const ShoppingPage = () => {
 
  const {shopingCart, onProductCountChange} = useShopingCart();
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={(e) => onProductCountChange(e)}
            value={shopingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" activeClass="active" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.entries(shopingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            style={{ width: "100px" }}
            className="bg-dark text-white"
            onChange={(e) => onProductCountChange(e)}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
