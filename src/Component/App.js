import React from "react"
import Boxes from "./Boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(Boxes)
    // const Style={
    //     backgroundColor:props.darkMode? "#222222" : "#cccccc"
    // }
    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }
      
    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         return prevSquares.map((square) => {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //     })
    // }
    
    const squareElements = squares.map(square => (
        // <div style={Style} className="box" key={square.id}></div>
        <Box value={square.on} key={square.id} id={square.id} handClick={toggle}/>
    ))
    return (
        <main>
            <h1>{squareElements}</h1>
        </main>
    )
}
