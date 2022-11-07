/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Rating } from "../components/Rating";
import Image from "next/image";
import { NextSeo } from "next-seo";
import MyReactMarkDown from "../components/ReactMarkDown";

interface ProductDetails {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  description: string;
  rating: number;
  category: string;
  price: number;
}

interface ProductProps {
  dataObject: ProductDetails;
}

export const ProductDetails = ({ dataObject }: ProductProps) => {
  return (
    <div className="m-auto max-w-sm">
      <NextSeo
        title={dataObject.title}
        description={dataObject.description}
        canonical={`https://api.escuelajs.co/api/v1/products/${dataObject.id}`}
        openGraph={{
          url: `https://api.escuelajs.co/api/v1/products/${dataObject.id}`,
          title: dataObject.title,
          description: dataObject.description,
          images: [
            {
              url: dataObject.thumbnailUrl,
              alt: dataObject.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          siteName: "MDJ-learning-Shop",
        }}
      />
      <Link
        href={`/products/`}
        className="text-teal-600 underline underline-offset-4"
      >
        Przejdź do wszystkich produktów{" "}
      </Link>
      <div className="bg-gray-200 text-center  max-w-96 m-auto">
        Category : {dataObject.category}
      </div>
      <div className="relative h-80">
        <Image
          src={dataObject.thumbnailUrl}
          alt={dataObject.thumbnailAlt}
          className="h-auto w-auto"
          fill
          priority
          sizes="33vw"
        />
      </div>

      <h2 className="text-red-500 text-center font-bold text-base p-2 h-12 ">
        {dataObject.title}
      </h2>
      <div className="w-auto max-w-sm text-center m-auto ">
        {dataObject.description}
      </div>
      <p className="p-2 text-center">cena: {dataObject.price} zł</p>
      <Rating ratingScore={dataObject.rating} />
      <div className="flex justify-between m-2 ">
        <MyReactMarkDown>{`[poprzedni](/products/${
          dataObject.id - 1
        })`}</MyReactMarkDown>
        <MyReactMarkDown>{`[następny](/products/${
          dataObject.id + 1
        })`}</MyReactMarkDown>
      </div>
    </div>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "category" | "price" | "title" | "thumbnailAlt" | "thumbnailUrl" | "id"
>;

interface ProductListItemProps {
  dataObject: ProductListItem;
}

export const ProductListItem = ({ dataObject }: ProductListItemProps) => {
  return (
    <>
      <div className="bg-gray-200 text-center sm:border-dashed sm:border-2 sm:border-gray-400 border-dashed border-y-2 border-gray-400 sm:w-full max-w-xs m-auto">
        {dataObject.category}
      </div>
      <div>
        <Image
          src={dataObject.thumbnailUrl}
          alt={dataObject.thumbnailAlt}
          width={320}
          height={180}
          className="m-auto "
          priority
        />
      </div>
      <Link href={`/products/${dataObject.id}`}>
        <h2 className="text-red-500 text-center font-bold text-base p-1 h-12 ">
          {dataObject.title}
        </h2>
      </Link>
      <p className="p-1 text-center">cena: {dataObject.price} zł</p>
    </>
  );
};
