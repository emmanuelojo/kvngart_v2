export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string | Date;
    updatedAt: string | Date;
  };
  images: string[];
  creationAt: string | Date;
  updatedAt: string | Date;
};

export type Category = {
  creationAt: string | Date;
  id: number;
  image: string;
  name: string;
  slug: string;
  updatedAt: string | Date;
};
