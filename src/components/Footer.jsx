import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="font-semibold">ReactStudy</div>
          <div className="text-gray-500">
            Practical React courses & project labs
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <div className="font-semibold mb-2">Explore</div>
          <ul>
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-gray-600 text-right md:text-left">
          <div>
            © {new Date().getFullYear()} ReactStudy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
