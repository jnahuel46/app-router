import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { ProductContextProps, Product, OnChangeArgs } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs ) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct( { onChange, product, value } );
  return (
    //Provee de contexto a todos los hijos del componente
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
