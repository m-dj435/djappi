import { InferGetStaticPropsType } from "next";
import { Product } from "../components/Product";

function ProductsPage({
  dataProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
      {dataProducts.map((product) => {
        return (
          <li key={product.id}>
            <Product
              dataObject={{
                title: product.title,
                thumbnailUrl: product.category.image,
                thumbnailAlt: product.title,
                description: product.description,
                rating: product.category.id,
                category: product.category.name,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/`);
  const dataProducts: StoreApiResponse[] = await res.json();

  return {
    props: {
      dataProducts,
    },
  };
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}
