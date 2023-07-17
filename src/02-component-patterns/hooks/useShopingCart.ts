import { useState } from "react";
import { ProductInCart } from "../pages/ShoppingPage";
import { OnChangeArgs } from "../interfaces/interfaces";

export const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShopingCart((oldShopingCart) => {
      //primera implementacion
      if (count === 0) {
        //desestructuro el estado previo del shoping card y remuevo
        //solo el id del objeto que tiene el counter en 0
        const { [product.id]: toDelete, ...rest } = oldShopingCart;
        return rest;
      } else {
        //mantengo el estado previo del shoping cart y le añado
        //el id y objeto del nuevo estado
        return {
          ...oldShopingCart,
          [product.id]: { ...product, count },
        };
      }
    });
  };

  return { shopingCart, onProductCountChange };
};
