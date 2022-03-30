import React, { useState, useRef } from 'react'
import "./Test.css"

function Test3() {
    const [input, setInput] = useState('')
    const [matrix, setMatrix] = useState([]);

    const handleMatrix = (e) => {
        if (!e || e > 30) return 'Number too huge';
        for (let i = 0; i < e; i++) {
            for (let j = 0; j < e; j++) {
                matrix[i] = {
                    id: `${i}${j}`
                };
            }
        }
        setMatrix(matrix)
        setInput(`0` + (e-1))

        console.log(matrix);
    }

    console.log('matrix', matrix)

    const handleClearInput = () => {
        setMatrix([]);
    }

    console.log('input', input);

    return (
        <>
            <div className="center">
                <h3>Input number value to generate matrix</h3>
                <input
                    type="text"
                    onChange={e => handleMatrix(e.target.value)}
                >
                </input>

                {console.log(input)}

                <button type="reset" onClick={() => handleClearInput()}>Clear</button>
                <table className="matrix-table">
                    {matrix.map((index, key) => (
                        <tr key={key}>
                            {matrix.map((index2, key2) => (
                                <td className={ `${index2.id}` === input ? 'blue' : ''}
                                    key={index2.id}
                                ></td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}


export default Test3
