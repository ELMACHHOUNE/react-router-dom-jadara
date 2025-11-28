import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">About ReactStudy</h1>
        <p className="text-gray-700 mb-6">
          ReactStudy delivers concise, project-based React courses that teach
          modern tooling, architecture, and best practices so learners become
          confident builders.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Help developers of all backgrounds level up with clear lessons,
            practical projects, and actionable feedback.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Curriculum</h3>
            <p className="text-gray-600">
              Core React, state management, routing, testing, and deployment.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Approach</h3>
            <p className="text-gray-600">
              Hands-on projects, bite-sized theory, and supportive reviews.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/instructor-1.svg"
                alt="Jane Doe"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-semibold">Jane Doe</div>
                <div className="text-sm text-gray-600">Lead Instructor</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/images/instructor-2.svg"
                alt="John Smith"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-semibold">John Smith</div>
                <div className="text-sm text-gray-600">Curriculum</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/images/instructor-3.svg"
                alt="Alex Lee"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-semibold">Alex Lee</div>
                <div className="text-sm text-gray-600">Design</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Outcomes</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">90%</div>
              <div className="text-sm text-gray-600">
                Course completion rate
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-gray-600">Average rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm text-gray-600">Projects built</div>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            style={{ color: "var(--brand-2)" }}
            className="hover:underline"
          >
            ← Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-block"
            style={{
              backgroundColor: "var(--accent-2)",
              color: "white",
              padding: "8px 12px",
              borderRadius: 6,
            }}
          >
            Contact / Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}
