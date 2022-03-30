import React, {useState} from 'react'
import "./Test.css"

function Test1() {
    const [color, setColor] = useState(false);

    const handleChangeColor = () => setColor(!color);

    return (
        <>
            <h3>Toggle to change square color</h3>
                <div className={color ? 'blue' : 'green'} onClick={handleChangeColor} id="square"></div>
        </>
    )
}


export default Test1
