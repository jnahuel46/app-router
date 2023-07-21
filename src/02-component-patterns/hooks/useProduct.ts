import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductsArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: UseProductsArgs) => {
  const [counter, setCounter] = useState(initialValue?.count || value);
  //crea un objeto que sobrevive renderizaciones del mismo hook o componente, variable que no dispara mas renderizados
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue?.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  const maxCount = initialValue?.maxCount;
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
    return () => {
      isMounted.current = false;
    };
  }, [value]);

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  return {
    counter,
    increaseBy,
    isMaxCountReaced:
      !!initialValue?.count && initialValue.maxCount === counter,
    maxCount,
    reset
  };
};
