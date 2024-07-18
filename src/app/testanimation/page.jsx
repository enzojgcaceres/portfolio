"use client";

import React, { useState, useEffect, useRef } from "react";

const TestPage = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState("RIGHT");
  const [isGameOver, setIsGameOver] = useState(false);
  const gameAreaRef = useRef();

  const updateSnakePosition = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 ||
      head.x >= 20 ||
      head.y < 0 ||
      head.y >= 20 ||
      newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setIsGameOver(true);
    } else {
      setSnake(newSnake);
    }
  };

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(updateSnakePosition, 200);
    return () => clearInterval(interval);
  }, [updateSnakePosition]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      {isGameOver ? (
        <div className="text-white text-center">
          <h1 className="text-4xl mb-4">Game Over</h1>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => {
              setSnake([{ x: 10, y: 10 }]);
              setFood({ x: 15, y: 15 });
              setDirection("RIGHT");
              setIsGameOver(false);
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <div
          ref={gameAreaRef}
          className="w-80 h-80 bg-gray-800 grid grid-cols-20 grid-rows-20"
        >
          {Array.from({ length: 20 }).map((_, row) =>
            Array.from({ length: 20 }).map((_, col) => (
              <div
                key={`${row}-${col}`}
                className={`w-full h-full ${
                  snake.some(segment => segment.x === col && segment.y === row)
                    ? "bg-green-500"
                    : food.x === col && food.y === row
                    ? "bg-red-500"
                    : "bg-gray-800"
                }`}
              ></div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TestPage;
