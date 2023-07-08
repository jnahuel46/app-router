import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImages from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ img, className, style }: ImageProps ) => {
    const { product } = useContext(ProductContext);
  
    let imgToShow: string;
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImages;
    }
  
    return <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Coffe Mug" />;
  };
  