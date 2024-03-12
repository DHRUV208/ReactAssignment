import { useContext } from "react";
import { DataContext } from "../context/dataProvider";

const Success = () => {
  const { userDetails } = useContext(DataContext);
  const { addFamilyMember } = useContext(DataContext);

  return (
    <div className="flex justify-around items-center">
      {/* <h1>Success</h1> */}
      <table className="border border-black">
        <thead className="m-4 p-4">
          <tr className="m-4 p-4">
            {/* <th>ID</th> */}
            <th className="m-4 p-4">First Name</th>
            <th className="m-4 p-4">Last Name</th>
            <th className="m-4 p-4">Parent Name</th>
            <th className="m-4 p-4">Phone No.</th>
            <th className="m-4 p-4">Email</th>
            <th className="m-4 p-4">Address</th>
          
          </tr>
        </thead>
        <tbody>
        {/* {userDetails.map((user) => ( */}
          <tr >
            <td>{userDetails.firstName}</td>
            <td>{userDetails.lastName}</td>
            <td>{userDetails.parentName}</td>
            <td>{userDetails.phoneNumber}</td>
            <td>{userDetails.mail}</td>
            <td>{userDetails.address}</td>
            
            {/* <td>{user.phoneNumber}</td> */}
          </tr>
        {/* ))} */}
      </tbody>
      </table>
      <table className="border border-black">
        <thead className="m-4 p-4">
          <tr className="m-4 p-4">
            {/* <th>ID</th> */}
            
            <th className="m-4 p-4">First Name</th>
            <th className="m-4 p-4">Last Name</th>
            <th className="m-4 p-4">Age</th>
            
          
          </tr>
        </thead>
        <tbody>
        {/* {userDetails.map((user) => ( */}
          <tr >
            
            <td>{addFamilyMember.firstName}</td>
            <td>{addFamilyMember.lastName}</td>
            <td>{addFamilyMember.age}</td>
            {/* <td>{user.phoneNumber}</td> */}
          </tr>
        {/* ))} */}
      </tbody>
      </table>
      {/* <h1>{userDetails.firstName}</h1>
      <h1>{userDetails.lastName}</h1>
      <h1>{userDetails.parentName}</h1>
      <h1>{userDetails.phoneNumber}</h1>
      <h1>{userDetails.mail}</h1>
      <h1>{userDetails.address}</h1>
      <h1>{addFamilyMember.firstName}</h1>
      <h1>{addFamilyMember.age}</h1> */}
    </div>
  );
};
export default Success;
