import './App.css';

import { LetterBox } from './components/LetterBox'

function App() {
  return (
    <div className="App">
      <h1>Wordle</h1>

      <div className='game-container'>
        <div className='board-row'>
          <LetterBox letter='H' />
          <LetterBox letter='A' />
          <LetterBox letter='P' />
          <LetterBox letter='P' />
          <LetterBox letter='Y' />
        </div>
        <div className='board-row'>
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
        <div className='board-row'>
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
        <div className='board-row'>
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
        <div className='board-row'>
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
        <div className='board-row'>
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
          <LetterBox />
        </div>
      </div>
    </div>
  );
}

export default App;
