import { useState } from "react";
import One from "./One";

const Task = () => {

    let [counter, setCounter] = useState(1);
    const handleClick = () => {
        console.log("counter", counter);
        setCounter(counter++);
        <One />
    }
    return (
        <div>
            <button onClick={handleClick} className="border border-black m-4 p-4">Add More Family Member +</button>

        </div>
    )
};
export default Task;