import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-green-300">
            <div className="flex items-center justify-around">
            <h1 className="font-bold">Header</h1>

                <ul className="flex  p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Form-1</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/form">Form-2</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
};

export default Header;