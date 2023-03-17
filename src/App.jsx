import { useState, useEffect } from "react"
import Die from "./Pages/Die"
import Heading from "./Pages/Heading"

import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {

    const [tenzies, setTenzies] = useState(false);
    const [dice, setDice] = useState(allNewDice);

    useEffect(() => {
        // console.log('Dice State Changed')

        const allTrue = dice.every(dices => dices.isHeld) //check if every dice is true
        const firstValue = dice[0].value;
        const sameValue = dice.every(dices => dices.value === firstValue)

        if (allTrue && sameValue) {
            setTenzies(true);
        }

    }, [dice])

    function allNewDice() { // add 10 random value to an array

        const arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(generateNewDice())
        }
        return (arr)
    }

    function generateNewDice() {
        return (
            {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        )
    }

    const eachDiceElement = dice.map((dices) => {
        return (
            <Die
                key={dices.id}
                value={dices.value}
                isHeld={dices.isHeld}
                onClick={() => holdDice(dices.id)}
            // id={dices.id}
            // onClick={holdDice}
            />
        )
    })


    function holdDice(id) {
        setDice(prevDice => {
            return (
                prevDice.map((item) => {
                    return (
                        item.id === id ?
                            { ...item, isHeld: !item.isHeld } :
                            item
                    )
                })
            )
        })
    }



    function rollDiceHandle() {
        if (tenzies === false) {  //if player didn't win, roll dice
            setDice(prevDice =>
                prevDice.map((item) => item.isHeld === true ? { ...item } : generateNewDice())
            )
        }
        else { // if player wins 
            setTenzies(false);
            setDice(allNewDice)
        }
    }

    return (
        <main>
            {tenzies && < Confetti />}
            <div className="sike">
                <Heading />
                <div className="dieContainer">
                    {eachDiceElement}
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
                    {<button onClick={rollDiceHandle} className="rollDice">{tenzies ? "New Game" : "Roll"}</button>}
                </div>
            </div>
        </main>
    )
}