/* eslint-disable @next/next/no-img-element */
import { Rating } from "../components/Rating";

interface ProductProps {
  dataObject: {
    title: string;
    thumbnailUrl: string;
    thumbnailAlt: string;
    description: string;
    rating: number;
    category: string;
  };
}

export const Product = ({ dataObject }: ProductProps) => {
  return (
    <>
      <div className="bg-gray-200 text-center">{dataObject.category}</div>
      <img
        src={dataObject.thumbnailUrl}
        alt={dataObject.thumbnailAlt}
        className="object-none h-96 w-96 m-auto"
      />
      <h2 className="text-red-500 text-center font-bold text-xl p-4">
        {dataObject.title}
      </h2>
      <p className="p-6">{dataObject.description}</p>
      <Rating ratingScore={dataObject.rating} />
    </>
  );
};
