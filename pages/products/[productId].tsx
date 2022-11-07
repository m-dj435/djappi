import { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { ProductDetails } from "../../components/Product";

const ProductIdPage = ({
  dataProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!dataProducts) {
    return <div>coś poszło nie tak...</div>;
  }
  //     const router = useRouter();

  //   return <div>{router.query.productId}</div>;
  return (
    <div className="bg-gray-200 grid md:grid-cols-1 gap-2">
      <ProductDetails
        dataObject={{
          category: dataProducts.category.name,
          title: dataProducts.title,
          price: dataProducts.price,
          thumbnailUrl: dataProducts.category.image,
          thumbnailAlt: dataProducts.title,
          description: dataProducts.description,
          rating: dataProducts.category.id,
          id: dataProducts.id,
        }}
      />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params?.productId}`
  );
  const dataProducts: StoreApiResponse | null = await res.json();

  if (!dataProducts) {
    return {
      props: {},
      notFound: true,
    };
  }

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
