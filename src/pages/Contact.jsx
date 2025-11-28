import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Non-functional demo: log form values. In real app, hook to an API.
    console.log("Enroll request:", form);
    alert("Thanks! We received your request (demo).");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-4">Contact / Enroll</h1>
        <p className="text-gray-600 mb-6">
          Fill this form to ask about courses or request enrollment info.
        </p>

        <label className="block mb-3">
          <span className="text-sm text-gray-700">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm text-gray-700">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-gray-700">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            rows={4}
          />
        </label>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Send
          </button>
          <a href="/" className="text-gray-600 hover:underline">
            ← Back
          </a>
        </div>
      </form>
    </div>
  );
}
