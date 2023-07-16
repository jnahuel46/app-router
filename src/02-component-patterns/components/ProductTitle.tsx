import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { TitleProps } from "../interfaces/interfaces";

export const ProductTitle = ({ title, className, style }: TitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
