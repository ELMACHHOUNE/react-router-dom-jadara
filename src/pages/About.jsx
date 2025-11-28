import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">About ReactStudy</h1>
        <p className="text-gray-700 mb-6">
          ReactStudy offers practical, project-based React courses designed to
          help learners move from theory to production-ready apps.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Make modern web development approachable by teaching tools and
            patterns used in real projects — with clear explanations and
            hands-on labs.
          </p>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">What we teach</h3>
            <p className="text-gray-600">
              React fundamentals, hooks, state management, routing, and testing.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">How we teach</h3>
            <p className="text-gray-600">
              Short lessons, guided projects, and optional quizzes to reinforce
              learning.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Instructors</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Lead Instructor — Jane Doe (Frontend Engineer)</li>
            <li>Curriculum — John Smith (Senior Developer)</li>
            <li>Design — Alex Lee (Product Designer)</li>
          </ul>
        </section>

        <div className="flex items-center gap-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Contact / Enroll
          </a>
        </div>
      </div>
    </div>
  );
}
