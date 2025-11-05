import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium transition ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
    }`;


  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyApp
      </Link>
      <div className="flex gap-3">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/weather" className={linkClass}>
          Weather
        </NavLink>
        
      </div>
    </nav>
  );
}
