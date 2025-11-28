import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white py-4 shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          ReactStudy
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Enroll
          </Link>
        </nav>
      </div>
    </header>
  );
}
