import React, { useState } from "react";

const funFacts = [
  {
    question: "What’s my favorite way to unwind after work?",
    answer: "Cooking up something new and watching a series 🍳",
  },
  {
    question: "If I could teleport right now, where would I go?",
    answer: "A sunny beach to surf some waves 🌊",
  },
  {
    question: "Board games or coding sprints?",
    answer: "Why not both? (But I am better at Catan)",
  },
  {
    question: "Most used emoji?",
    answer: "😄 (life’s too short to be serious all the time!)",
  },
];

const choosePaths = [
  {
    label: "Curious Coder",
    response:
      "Love to code and learn new things? Me too! Maybe our next hackathon or side project could be at a café?",
  },
  {
    label: "Travel Lover",
    response:
      "You love exploring new places? I’ve got lots of travel stories and fun experiences to share!",
  },
  {
    label: "Board Game Champ",
    response:
      "Competitive at board games? Perfect—we’ll get along just fine (unless it’s Catan or Mafia, then watch out 😅).",
  },
];

export default function App() {
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(funFacts.length).fill(false)
  );
  const [path, setPath] = useState<number | null>(null);

  const handleFlip = (idx: number) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center py-12 px-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-blue-700 text-center">
          Hey Dimple! 👋
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl">
          I came across your profile on Jeevansathi, & noticed you’re into
          front-end, so I thought—why not introduce myself the web dev way?
        </p>
      </div>

      {/* Section 1: Get to Know Me */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 mb-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-blue-500 mb-6">
          Get to Know Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funFacts.map((fact, idx) => (
            <div key={idx} className="perspective" style={{ perspective: 800 }}>
              <div
                className={`relative w-64 h-32 cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${
                  flipped[idx] ? "rotate-y-180" : ""
                }`}
                onClick={() => handleFlip(idx)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Face */}
                <div
                  className="absolute w-full h-full bg-blue-100 rounded-xl flex items-center justify-center text-lg font-medium shadow-lg backface-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {fact.question}
                </div>
                {/* Back Face */}
                <div
                  className="absolute w-full h-full bg-white rounded-xl flex items-center justify-center text-lg font-medium shadow-lg backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {fact.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          (Click the cards to reveal a fun fact!)
        </p>
      </div>

      {/* Section 2: Coffee Invitation */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 mb-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-amber-600 mb-2">
          Should We Grab a Coffee?
        </h2>
        <p className="mb-6 text-gray-700 text-center">
          Why should Siddhartha & Dimple meet for coffee? Choose what you vibe
          with:
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {choosePaths.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setPath(idx)}
              className={`px-5 py-3 rounded-xl shadow text-base font-semibold transition bg-amber-200 hover:bg-amber-400 hover:text-white ${
                path === idx ? "bg-amber-500 text-white scale-105" : ""
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {path !== null && (
          <div className="mt-4 bg-blue-50 p-4 rounded-xl text-blue-700 shadow max-w-md text-center animate-fade-in">
            {choosePaths[path].response}
            <br />
            <span className="font-semibold">
              Looks like we already have something in common! ☕
            </span>
          </div>
        )}
      </div>

      {/* Section 3: Call to Action */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2 text-pink-600">
          Want to geek out about Friends vs The Office?
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Or just want to swap travel stories or battle over board games?
        </p>
        <a
          href="mailto:siddhartha0610@gmail.com?subject=Let's connect!"
          className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow hover:bg-blue-800 transition"
        >
          Let’s Connect Over Coffee!
        </a>
        <p className="mt-3 text-xs text-gray-400">
          P.S. I promise I’m better at conversation than CSS centering (but just
          slightly) 😅
        </p>
      </div>
    </div>
  );
}
