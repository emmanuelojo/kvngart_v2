export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string | Date;
  updatedAt: string | Date;
};

export type Category = {
  id: number;
  image: string;
  name: string;
  slug: string;
  creationAt: string | Date;
  updatedAt: string | Date;
};

// export type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   categories: string[];
//   sizes: string[];
// };

export type CartProduct = Product & {
  quantity: number;
  variation?: string;
};
