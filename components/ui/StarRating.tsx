"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  name?: string;
  currentValue?: number;

  // optional, default to "rating"
}

const StarRating: React.FC<StarRatingProps> = ({
  name = "rating",
  currentValue,
}) => {
  const [rating, setRating] = useState<number>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex gap-3">
      {[...Array(5)].map((i, index) => {
        const value = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name={name}
              checked={rating == value}
              onChange={(e) => setRating(Number(e.target.value))}
              value={currentValue ? currentValue : value}
              className="hidden"
              disabled={!!currentValue}
            />
            <FaStar
              size={30}
              color={
                currentValue
                  ? value <= currentValue
                    ? "yellow"
                    : "gray"
                  : value <= (hovered || rating || 0)
                  ? "yellow"
                  : "gray"
              }
              onMouseEnter={() => (!currentValue ? setHovered(value) : null)}
              onMouseLeave={() => (!currentValue ? setHovered(null) : null)}
            />{" "}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
