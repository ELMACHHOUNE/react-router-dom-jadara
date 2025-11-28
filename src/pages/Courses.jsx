import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Monitor } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      lessons: 8,
      icon: <BookOpen style={{ color: "var(--brand-1)" }} />,
    },
    {
      id: 2,
      title: "Hooks & State",
      lessons: 6,
      icon: <Code style={{ color: "var(--brand-2)" }} />,
    },
    {
      id: 3,
      title: "Routing & Forms",
      lessons: 5,
      icon: <Monitor style={{ color: "var(--accent-2)" }} />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-gray-600">
          Browse our available React courses and start learning.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <article key={c.id} className="p-5 bg-white rounded-lg shadow">
            <div className="flex items-center gap-3 mb-3">
              {c.icon}
              <h3 className="font-semibold">{c.title}</h3>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              {c.lessons} lessons
            </div>
            <Link
              to="/contact"
              className="inline-block"
              style={{
                backgroundColor: "var(--brand-2)",
                color: "white",
                padding: "8px 12px",
                borderRadius: 6,
              }}
            >
              Enroll
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
