import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { ButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({ className, style }: ButtonsProps) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  console.log(maxCount);
  const isMaxReached = useCallback(() => {
    if (maxCount === counter && !!maxCount) {
      return true
    } else {
      return false
    }
  }, [maxCount, counter]);

  //usar el use callback dep
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled }`}
      >
        +
      </button>
    </div>
  );
};
