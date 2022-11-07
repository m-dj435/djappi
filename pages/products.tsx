import { InferGetStaticPropsType } from "next";
import { ProductListItem } from "../components/Product";

function ProductsPage({
  dataProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-2">
      {dataProducts.map((product) => {
        return (
          <li key={product.id}>
            <ProductListItem
              dataObject={{
                id: product.id,
                title: product.title,
                thumbnailUrl: product.category.image,
                thumbnailAlt: product.title,
                category: product.category.name,
                price: product.price,
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
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=1&limit=100`
  );
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
