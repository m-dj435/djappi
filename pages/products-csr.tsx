import { ProductListItem } from "../components/Product";
import { useQuery } from "react-query";

const getProducts = async () => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=0&limit=4`
  );
  const dataCSR: StoreApiResponse[] = await res.json();
  return dataCSR;
};

const ProductsCSRPage = () => {
  const { isLoading, data, error } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
      {data.map((product) => {
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
};

export default ProductsCSRPage;

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
