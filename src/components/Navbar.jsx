import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full">
      <header className="max-w-4xl w-full flex items-center justify-between mb-12">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          ReactStudy
        </Link>

        <nav>
          <Link to="/" className="mr-4 text-gray-700 hover:underline">
            Home
          </Link>
          <Link to="/about" className="mr-4 text-gray-700 hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:underline">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
