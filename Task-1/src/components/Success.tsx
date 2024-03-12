import { useContext } from "react";
import { DataContext } from "../context/dataProvider";

interface User {
  firstName: string;
  lastName: string;
  parentName: string;
  phoneNumber: number;
  mail: string;
  address: string;
}

interface FamilyMember { 
  firstName: string;
  lastName: string;
  age: number;
}

const Success: React.FC = () => {
  const { userDetails } = useContext(DataContext);
  const { addFamilyMember } = useContext(DataContext);

  return (
    <div className="flex justify-around items-center">
      <h1>Success</h1>
      <table className="border border-black">
        <thead className="m-4 p-4">
          <tr className="m-4 p-4">
            <th className="m-4 p-4">First Name</th>
            <th className="m-4 p-4">Last Name</th>
            <th className="m-4 p-4">Parent Name</th>
            <th className="m-4 p-4">Phone No.</th>
            <th className="m-4 p-4">Email</th>
            <th className="m-4 p-4">Address</th>
          </tr>
        </thead>
        <tbody>
        {userDetails && ( 
            <tr>
              <td>{userDetails.firstName}</td>
              <td>{userDetails.lastName}</td>
              <td>{userDetails.parentName}</td>
              <td>{userDetails.phoneNumber}</td>
              <td>{userDetails.mail}</td>
              <td>{userDetails.address}</td>
            </tr>
          )}
      </tbody>
      </table>
      <table className="border border-black">
        <thead className="m-4 p-4">
          <tr className="m-4 p-4">
            <th className="m-4 p-4">First Name</th>
            <th className="m-4 p-4">Last Name</th>
            <th className="m-4 p-4">Age</th>
          </tr>
        </thead>
        <tbody>
        {addFamilyMember && ( 
            <tr>
              <td>{addFamilyMember.firstName}</td>
              <td>{addFamilyMember.lastName}</td>
              <td>{addFamilyMember.age}</td>
            </tr>
          )}
      </tbody>
      </table>
      
    </div>
  );
};
export default Success;
