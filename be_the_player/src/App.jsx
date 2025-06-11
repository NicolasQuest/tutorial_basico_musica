import { useEffect, useRef } from "react";
import SaxC from "./assets/sounds/sax_C.wav";
import SaxD from "./assets/sounds/sax_D.wav";
import SaxE from "./assets/sounds/sax_E.wav";
import SaxF from "./assets/sounds/sax_F.wav";
import SaxG from "./assets/sounds/sax_G.wav";
import SaxA from "./assets/sounds/sax_A.wav";
import SaxB from "./assets/sounds/sax_B.wav";
import "./App.css";


 const noteMap = {
  c: SaxC,
  d: SaxD,
  e: SaxE, 
  f: SaxF,
  g: SaxG,
  a: SaxA,
  b: SaxB,
};

function App() {

  const currentAudio = useRef(null);

  const playNote = (noteSrc) => {
    if (currentAudio.current) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }
    const audio = new Audio(noteSrc);
    currentAudio.current = audio;
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (noteMap[key]) {
        playNote(noteMap[key]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);



  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl text-white"> Be the player</h1>
      </div>
      <div className="flex justify-center gap-3 p-8">
        <button
          onClick={() => playNote(SaxC)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          C
        </button>
        <button
          onClick={() => playNote(SaxD)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          D
        </button>
        <button
          onClick={() => playNote(SaxE)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          E
        </button>
        <button
          onClick={() => playNote(SaxF)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          F
        </button>
        <button
          onClick={() => playNote(SaxG)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          G
        </button>
        <button
          onClick={() => playNote(SaxA)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          A
        </button>
        <button
          onClick={() => playNote(SaxB)}
          className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          B
        </button>
      </div>
      <div className="flex justify-center">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/s7s0-w5yH6o?si=8z78QtWPYMPLVzEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </>
  );
}

export default App;
