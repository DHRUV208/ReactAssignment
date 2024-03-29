import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-green-300">
      <div className="flex items-center justify-around">
        <h1 className="font-bold">Single Page Application</h1>

        <ul className="flex  p-4 m-4">
          <div className="flex justify-between items-end">
            <li className="px-4">
              <Link to="/">Form-1</Link>
            </li>
            <li className="px-4">
              <Link to="/form">Form-2</Link>
            </li>
          </div>
          <div>
            <li className="px-4">
              <Link to="/task2"> Task-2 </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
