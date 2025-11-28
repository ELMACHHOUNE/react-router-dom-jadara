export default function Home() {
  return (
    <div className="max-w-4xl w-full text-center">
      <main>
        <h2 className="text-5xl font-bold mb-4">
          Learn React, build real projects
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Hands-on React courses for beginners and intermediates. Follow guided
          lessons, build projects, and get ready for real-world development.
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700"
        >
          Enroll Now
        </a>

        <section
          id="features"
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Beginner-friendly</h3>
            <p className="text-sm text-gray-600">
              Start with fundamentals and progress step-by-step.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Project-based</h3>
            <p className="text-sm text-gray-600">
              Build real apps (to-do, dashboard, blog) as you learn.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Certificate</h3>
            <p className="text-sm text-gray-600">
              Receive a completion certificate to showcase your skills.
            </p>
          </div>
        </section>

        <section id="about" className="mt-12 text-left">
          <h3 className="text-xl font-semibold mb-2">Why ReactStudy?</h3>
          <p className="text-sm text-gray-600">
            Clear lessons, modern tooling, and practical exercises designed to
            turn learners into builders.
          </p>
        </section>
      </main>
    </div>
  );
}
