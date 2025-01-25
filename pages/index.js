// pages/index.js
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [tests, setTests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchTests() {
      const res = await axios.get("/api/tests");
      setTests(res.data);
    }
    fetchTests();
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-blue-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Explore Our Tests</h1>

        <input
          type="text"
          placeholder="Search test name..."
          className="border p-2 w-full mb-4"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tests
            .filter((test) => test.name.toLowerCase().includes(search.toLowerCase()))
            .map((test) => (
              <div key={test.id} className="border p-4 rounded-lg shadow-lg bg-white">
                {/* Difficulty Label */}
                <span
                  className={`text-white text-xs uppercase px-3 py-1 rounded-full absolute top-2 left-2 ${getDifficultyColor(test.difficulty)}`}
                >
                  {test.difficulty}
                </span>

                {/* Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={test.image}
                    alt={test.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Test Details */}
                <h2 className="text-lg font-semibold mt-2">{test.name}</h2>
                <p className="text-gray-600">{test.description}</p>

                <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                  Attend Test
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
