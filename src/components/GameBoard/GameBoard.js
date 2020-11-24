import GuessRow from '../GuessRow/GuessRow'

const GameBoard = (props) => {
    return (
        <div className="component" id="GameBoard">
            GameBoard
            <GuessRow />
            <GuessRow />
           
        </div>
    )
}

export default GameBoard;