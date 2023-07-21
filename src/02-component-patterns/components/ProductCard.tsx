import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValue,
}: Props) => {
  const { counter, increaseBy, maxCount, reset, isMaxCountReaced } = useProduct(
    {
      onChange,
      product,
      value,
      initialValue,
    }
  );
  return (
    //Provee de contexto a todos los hijos del componente
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {/* Renderiza una funcion */}
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReaced,
          maxCount: maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
