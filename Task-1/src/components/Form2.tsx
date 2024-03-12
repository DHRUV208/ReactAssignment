import { useState } from "react";
import One from "./One";

const Form2: React.FC = () => {
  let [counters, setCounters] = useState<number>(1);
  const [showIndex, setShowIndex] = useState<boolean | null>(null);



  const handleClick = () => {
    console.log("counter", counters);
    setShowIndex(!showIndex);

    setCounters(++counters);
  };
  return (
    <div className="" id="test">
      <div>
        <button onClick={handleClick} className="border border-black m-4 p-4">
          Add More Family Member +
        </button>
      </div>
      {[...Array(counters)].map((_, idx) => (
        <One />
      ))}
    </div>
  );
};
export default Form2;
