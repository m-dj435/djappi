import React from "react";

interface RatingProps {
  ratingScore: number;
}

export const Rating = ({ ratingScore }: RatingProps) => {
  return (
    <div className="text-center text-black bg-gray-400">
      Ocena: {ratingScore}/5
    </div>
  );
};
