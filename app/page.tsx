"use client";

import { useState, useCallback } from "react";
import { GameContent, getRandomGameItems } from "./data/content";
import { DrawingDisplay } from "./components/Drawings";

type GameState = "landing" | "playing" | "reveal" | "results";

interface GameSession {
  items: GameContent[];
  currentIndex: number;
  score: number;
  answers: { item: GameContent; correct: boolean }[];
}

// Sound effects (using Web Audio API for simple sounds)
const playSound = (type: "correct" | "wrong") => {
  if (typeof window === "undefined") return;

  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "correct") {
      // Happy ascending notes
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.4);
    } else {
      // Sad descending note
      oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    }
  } catch {
    // Audio not supported
  }
};

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("landing");
  const [session, setSession] = useState<GameSession | null>(null);
  const [lastAnswer, setLastAnswer] = useState<"correct" | "wrong" | null>(null);
  const [showContent, setShowContent] = useState(false);

  const startGame = useCallback(() => {
    const items = getRandomGameItems(10);
    setSession({
      items,
      currentIndex: 0,
      score: 0,
      answers: [],
    });
    setGameState("playing");
    setShowContent(false);
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const handleGuess = (guess: "ai" | "child") => {
    if (!session) return;

    const currentItem = session.items[session.currentIndex];
    const isCorrect = guess === currentItem.source;

    setLastAnswer(isCorrect ? "correct" : "wrong");
    playSound(isCorrect ? "correct" : "wrong");

    setSession({
      ...session,
      score: isCorrect ? session.score + 1 : session.score,
      answers: [...session.answers, { item: currentItem, correct: isCorrect }],
    });

    setGameState("reveal");
  };

  const nextRound = () => {
    if (!session) return;

    if (session.currentIndex >= session.items.length - 1) {
      setGameState("results");
    } else {
      setShowContent(false);
      setTimeout(() => {
        setSession({
          ...session,
          currentIndex: session.currentIndex + 1,
        });
        setGameState("playing");
        setLastAnswer(null);
        setTimeout(() => setShowContent(true), 100);
      }, 300);
    }
  };

  const getShareText = () => {
    if (!session) return "";
    const emojis = session.answers.map(a => a.correct ? "✅" : "❌").join("");
    return `AI or Child? I scored ${session.score}/10!\n${emojis}\nCan you tell the difference?`;
  };

  const copyResults = async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      alert("Copied to clipboard!");
    } catch {
      alert(getShareText());
    }
  };

  // Landing Screen
  if (gameState === "landing") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow-200 via-pink-200 to-blue-200 flex flex-col items-center justify-center p-4">
        <div className="text-center animate-bounce-slow">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 font-comic drop-shadow-lg">
            AI or Child?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-md mx-auto">
            Can you tell if it was made by artificial intelligence or a real kid?
          </p>
          <p className="text-lg text-gray-500 mb-8">
            (It&apos;s harder than you think!)
          </p>
        </div>

        <button
          onClick={startGame}
          className="bg-green-500 hover:bg-green-600 text-white text-3xl font-bold py-6 px-16 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95"
        >
          Play
        </button>

        <div className="mt-12 flex gap-8 text-6xl">
          <span className="animate-wiggle">🤖</span>
          <span className="text-4xl text-gray-400">vs</span>
          <span className="animate-wiggle-reverse">👶</span>
        </div>
      </main>
    );
  }

  // Game Screen
  if (gameState === "playing" && session) {
    const currentItem = session.items[session.currentIndex];

    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col p-4">
        {/* Progress bar */}
        <div className="w-full max-w-2xl mx-auto mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Round {session.currentIndex + 1} of {session.items.length}</span>
            <span>Score: {session.score}</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-500"
              style={{ width: `${((session.currentIndex) / session.items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content area */}
        <div className={`flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {currentItem.prompt && (
            <div className="bg-white/80 rounded-2xl px-6 py-3 mb-4 shadow-md">
              <p className="text-gray-600 text-center">
                <span className="font-semibold">Prompt:</span> &quot;{currentItem.prompt}&quot;
              </p>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full min-h-[250px] flex items-center justify-center border-4 border-dashed border-gray-200">
            {currentItem.type === "text" ? (
              <p className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed font-handwriting">
                &quot;{currentItem.content}&quot;
              </p>
            ) : (
              <DrawingDisplay drawingId={currentItem.content} />
            )}
          </div>
        </div>

        {/* Guess buttons */}
        <div className="flex gap-4 justify-center mt-6 mb-8">
          <button
            onClick={() => handleGuess("ai")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl md:text-2xl font-bold py-4 px-8 md:py-6 md:px-12 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95 flex items-center gap-2"
          >
            <span className="text-3xl">🤖</span> AI
          </button>
          <button
            onClick={() => handleGuess("child")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl font-bold py-4 px-8 md:py-6 md:px-12 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95 flex items-center gap-2"
          >
            <span className="text-3xl">👶</span> Child
          </button>
        </div>
      </main>
    );
  }

  // Reveal Screen
  if (gameState === "reveal" && session) {
    const currentItem = session.items[session.currentIndex];
    const isCorrect = lastAnswer === "correct";

    return (
      <main className={`min-h-screen flex flex-col p-4 transition-colors duration-500 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
        {/* Flash animation */}
        <div className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${isCorrect ? 'bg-green-400' : 'bg-red-400'} animate-flash`} />

        {/* Result header */}
        <div className="text-center py-6">
          <div className={`text-5xl md:text-6xl mb-2 animate-bounce ${isCorrect ? '' : 'animate-shake'}`}>
            {isCorrect ? "✅" : "❌"}
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? "Correct!" : "Wrong!"}
          </h2>
        </div>

        {/* Reveal content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full">
            {/* Source reveal */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">
                {currentItem.source === "ai" ? "🤖" : "👶"}
              </div>
              <p className="text-xl font-bold text-gray-800">
                {currentItem.source === "ai" ? "Made by AI" : "Made by a Child"}
              </p>
              <p className="text-gray-600 mt-1">{currentItem.context}</p>
            </div>

            {/* The content */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-4 border-2 border-gray-100">
              {currentItem.type === "text" ? (
                <p className="text-lg text-gray-700 text-center font-handwriting">
                  &quot;{currentItem.content}&quot;
                </p>
              ) : (
                <div className="max-w-[200px] mx-auto">
                  <DrawingDisplay drawingId={currentItem.content} />
                </div>
              )}
            </div>

            {/* Fun fact */}
            {currentItem.funFact && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
                <p className="text-sm text-yellow-800">
                  <span className="font-bold">Fun fact:</span> {currentItem.funFact}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Next button */}
        <div className="text-center mt-6 mb-8">
          <button
            onClick={nextRound}
            className="bg-purple-500 hover:bg-purple-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            {session.currentIndex >= session.items.length - 1 ? "See Results" : "Next Round"}
          </button>
        </div>
      </main>
    );
  }

  // Results Screen
  if (gameState === "results" && session) {
    const percentage = (session.score / session.items.length) * 100;
    let message = "";
    let emoji = "";

    if (percentage === 100) {
      message = "Perfect! Are you secretly an AI?";
      emoji = "🏆";
    } else if (percentage >= 80) {
      message = "Impressive! You've got a keen eye.";
      emoji = "🌟";
    } else if (percentage >= 60) {
      message = "Not bad! It's tricky, right?";
      emoji = "👍";
    } else if (percentage >= 40) {
      message = "The line is blurrier than we thought!";
      emoji = "🤔";
    } else {
      message = "Maybe ask a 5-year-old for help?";
      emoji = "😅";
    }

    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-200 to-yellow-200 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Score
          </h2>
          <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-2">
            {session.score}/{session.items.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">{message}</p>

          {/* Results breakdown */}
          <div className="flex justify-center gap-1 mb-6 flex-wrap">
            {session.answers.map((answer, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                  answer.correct ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                {answer.correct ? '✅' : '❌'}
              </div>
            ))}
          </div>

          {/* Share button */}
          <button
            onClick={copyResults}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl mb-3 transition-all"
          >
            📋 Copy Results to Share
          </button>

          {/* Play again */}
          <button
            onClick={startGame}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
          >
            🔄 Play Again
          </button>

          <button
            onClick={() => setGameState("landing")}
            className="mt-4 text-gray-500 hover:text-gray-700 underline"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return null;
}
