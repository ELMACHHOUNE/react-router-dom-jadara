import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white py-4 shadow-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <BookOpen style={{ color: "var(--brand-2)" }} />
          <span className="text-2xl font-bold text-gray-900">ReactStudy</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-gray-900">
            Courses
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-4 inline-block"
            style={{
              backgroundColor: "var(--brand-2)",
              color: "white",
              padding: "8px 14px",
              borderRadius: 6,
            }}
          >
            Enroll
          </Link>
        </nav>
      </div>
    </header>
  );
}
