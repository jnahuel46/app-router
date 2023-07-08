import { ProductButtons, ProductImage, ProductTitle } from "../components";
import {
  ProductCard
} from "../components";
import "../styles/custom-styles.css";
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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" title={''}  activeClass="active" />
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
        {/* Another way to do the same */}
        <ProductCard product={product} className="bg-dark text-white" >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" activeClass="active"/>
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        {/* Another way to do the same  -  INLINE STYLES LOGIC */}
        <ProductCard product={product} style={{ backgroundColor: "cyan"}} >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
          <ProductTitle style={{ fontWeight: "bold", display: 'flex', justifyContent:'center'}} />
          <ProductButtons style={{ display: 'flex', justifyContent:'center'}}/>
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
