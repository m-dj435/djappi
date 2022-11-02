import React from "react";

interface RatingProps {
  ratingScore: number;
}

export const Rating = ({ ratingScore }: RatingProps) => {
  return (
    <div className="text-center text-blue-600 font-bold bg-gray-400">
      {ratingScore}
    </div>
  );
};
