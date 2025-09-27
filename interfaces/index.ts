export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  itemPrice: number;
  rating: { rate: number; count: number };
}

export interface ProductState {
  products: Products[];
}
