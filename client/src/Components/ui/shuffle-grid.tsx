"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const ShuffleGrid = ({ squareData }: { squareData: { id: number; src: string }[] }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const generateSquares = () => {
    return shuffle([...squareData]).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full rounded-md overflow-hidden bg-gray-100 shadow-sm"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>
    ));
  };

  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2 p-2">
      {squares.map((sq) => sq)}
    </div>
  );
};
