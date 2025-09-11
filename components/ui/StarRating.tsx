"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  name?: string; // optional, default to "rating"
}

const StarRating: React.FC<StarRatingProps> = ({ name = "rating" }) => {
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
              value={value}
              className="hidden"
            />
            <FaStar
              size={40}
              color={value <= (hovered || rating) ? "yellow" : "gray"}
              onMouseEnter={() => setHovered(value)}
              onMouseLeave={() => setHovered(null)}
            />{" "}
          </label>
        );
      })}
  
    </div>
  );
};

export default StarRating;
