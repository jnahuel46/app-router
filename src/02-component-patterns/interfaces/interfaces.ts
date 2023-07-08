import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
}

export interface TitleProps {
  title?: string;
  className?: string;
  activeClass?: string;
  style?: React.CSSProperties;
}
export interface ImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ButtonsProps {
  className?: string;
  activeClass?: string;
  style?: React.CSSProperties;
}

export interface ProductHocMain {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ( TitleProps: TitleProps ) => JSX.Element;
  Image: ( ImageProps: ImageProps ) => JSX.Element;
  Buttons: ( ButtonsProps: ButtonsProps ) => JSX.Element;
}
