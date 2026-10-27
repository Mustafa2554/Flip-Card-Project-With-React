// import { useState } from 'react'
// import './App.css'
// import { flashcards } from './array.js'

// function App() {


//   return (
//    <div className="container">
//       {
//         flashcards.map((item , index) => <Cards key={index} item={item} />)
//       }
//    </div>
//   )
// }

// export default App


// function Cards({ item }) {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       className={isFlipped ? 'flipped card' : 'card'}
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}

//     >
//       <h3>{isFlipped ? item.text : item.title}</h3>
//     </div>
//   );
// }


import './App.css';
import { flashcards } from './array.js';

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">YOUR LEARNING SPACE</p>
        <h1>Master<span>Class.</span></h1>
        <p className="subtitle">
          Hover over a card to reveal the answer.
        </p>
      </header>

      <div className="container">
        {flashcards.map((item) => (
          <Cards key={item.id ?? item.title} item={item} />
        ))}
      </div>
    </main>
  );
}

function Cards({ item }) {
  return (
    <div className="card-scene" tabIndex={0}>
      <div className="card-inner">
        <div className="card-face card-front">
          <span className="card-label">QUESTION</span>
          <h3>{item.title}</h3>
          <span className="card-hint">Hover to reveal ↗</span>
        </div>

        <div className="card-face card-back">
          <span className="card-label">ANSWER</span>
          <h3>{item.text}</h3>
          <span className="card-hint">Master the concept ✦</span>
        </div>
      </div>
    </div>
  );
}

export default App;
