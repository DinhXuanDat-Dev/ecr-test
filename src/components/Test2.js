import React, { useState } from 'react'
import "./Test.css"

function Test2() {

    const [input, setInput] = useState(0)
    const [matrix, setMatrix] = useState([]);

    const handleMatrix = (e) => {

        setInput(e);
        if (!e || e > 30) return 'Number too huge';
        for (let i = 0; i < e; i++) {
            matrix[i] = {
                id: i
            };
        }

        setMatrix(matrix)

        console.log(matrix);
    }

    console.log('matrix', matrix)

    const handleClearInput = () => {
        setMatrix([]);
        setInput(0)

    }

    return (
        <>
            <div className="center">
                <h3>Input number value to generate matrix</h3>
                <input
                    value={input}
                    type="text"
                    onChange={e => handleMatrix(e.target.value)}
                >
                </input>
                <button onClick={() => handleClearInput()}>Clear input</button>
                <table className="matrix-table">
                    {matrix.map((index, key) => (
                        <tr key={key}>
                            {matrix.map((index2, key2) => (
                                <td key={index2.id}></td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}


export default Test2
