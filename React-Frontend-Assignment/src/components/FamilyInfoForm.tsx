import { useState } from "react";
import AddFamilyMemberForm from "./AddFamilyMemberForm";

const FamilyInfoForm: React.FC = () => {
  let [counters, setCounters] = useState<number>(1);

  const handleClick = () => {
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
        <AddFamilyMemberForm />
      ))}
    </div>
  );
};
export default FamilyInfoForm;
