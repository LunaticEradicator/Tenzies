import { useState } from "react"
import Die from "./Pages/Die"
import Heading from "./Pages/Heading"


export default function App() {

    const [dice, setDice] = useState(allNewDice)

    function allNewDice() {
        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(Math.ceil(Math.random() * 6))
        }
        return (arr)
    }

    const diceElement = dice.map((dices) => {
        return (
            <Die
                value={dices}
            />
        )
    })

    function rollDiceClick() {
        setDice(allNewDice);
    }

    return (
        <main>
            <div className="sike">
                <Heading />
                <div className="dieContainer">
                    {diceElement}
                    {/* <Die value={newDice[0]} />
                    <Die value={newDice[1]} />
                    <Die value={newDice[2]} />
                    <Die value={newDice[3]} />
                    <Die value={newDice[4]} />
                    <Die value={newDice[5]} />
                    <Die value={newDice[6]} />
                    <Die value={newDice[7]} />
                    <Die value={newDice[8]} />
                    <Die value={newDice[9]} /> */}
                </div>
                <div className="rollDiceDiv">
                    <button onClick={rollDiceClick} className="rollDice">Roll Dice</button>
                </div>
            </div>
        </main>
    )
}