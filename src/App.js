
import './App.css';
import GameBoard from "./components/GameBoard/GameBoard"
import ColorPicker from "./components/ColorPicker/ColorPicker"
import GameTimer from "./components/GameTimer/GameTimer"
import GuessPegs from "./components/GuessPegs/GuessPegs"
import GuessRow from "./components/GuessRow/GuessRow"
import GuessScore from "./components/GuessScore/GuessScore"
import NewGameButton from "./components/NewGameButton/NewGameButton"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Mastermind
      </header>
      <main className="main">
      <GameBoard /><div>
      <ColorPicker />
      <GameTimer />
      <NewGameButton /></div></main>
      <Footer />
    
    </div>
  );
}

export default App;