import React, { useState } from "react";
import Harmony from "./Harmony";
import Melody from "./Melody";
import Rhythm from "./Rhythm";
import Musica from "./Musica";
const App = () => {
  const [count, setCount] = useState(0);
  const [countD, setCountD] = useState(0);


  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h1 className="text-center texto">
            ♪ Teoría Musical Básica en 5' ♪
          </h1>
          <div className="mb-2">
           
          </div>

          <div className="d-flex justify-content-center mt-5">
          <Musica />  
          </div>  
          <Harmony />
          <Melody />
          <Rhythm />
          <div className="d-flex justify-content-center  gap-1">
            <button
              className="btn btn-success"
              onClick={() =>
                setCount((c) => {
                  const countLikes = c + 1;
                  localStorage.setItem("likes", countLikes);
                  return countLikes;
                })
              }
            >
              Likes 👍 {count}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                setCountD((c) => {
                  const countDislikes = c + 1;
                  localStorage.setItem("dislikes", countDislikes);
                  return countDislikes;
                });
              }}
            >
              Dislikes 👎 {countD}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
