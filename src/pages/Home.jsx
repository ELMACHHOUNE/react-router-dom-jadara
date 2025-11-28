import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Layers, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="bg-white rounded-lg shadow p-10">
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Master React with practical projects
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Project-driven courses, modern workflows, and real-world best
              practices to help you ship production-ready apps.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-block"
                style={{
                  backgroundColor: "var(--brand-2)",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: 8,
                }}
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="text-gray-700 border border-gray-200 px-5 py-3 rounded-md hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          <aside className="md:w-96 mt-8 md:mt-0">
            <div className="bg-gray-50 p-5 rounded-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen style={{ color: "var(--brand-1)" }} /> Popular course
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Layers style={{ color: "var(--brand-2)" }} /> React
                  Fundamentals — 8 lessons
                </li>
                <li className="flex items-center gap-2">
                  <Award style={{ color: "var(--accent-2)" }} /> Hooks & State —
                  6 lessons
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen style={{ color: "var(--accent-3)" }} /> Routing &
                  Forms — 5 lessons
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Structured curriculum</h3>
          <p className="text-sm text-gray-600">
            Clear learning paths from fundamentals to advanced patterns.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Hands-on projects</h3>
          <p className="text-sm text-gray-600">
            Build a portfolio of real apps you can show to employers.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Mentor feedback</h3>
          <p className="text-sm text-gray-600">
            Optional mentor reviews to guide your growth and code quality.
          </p>
        </div>
      </section>
    </div>
  );
}
