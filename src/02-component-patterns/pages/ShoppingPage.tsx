import { ProductButtons, ProductImage, ProductTitle } from "../components";
import {
  ProductCard
} from "../components";

const product = {
  id: "1",
  title: "Product Coffe Mug",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shoping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* One way */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={''} />
          <ProductCard.Buttons />
        </ProductCard>
        {/* Another way to do the same */}
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
