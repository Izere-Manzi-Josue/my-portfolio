"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    // we'll connect backend later
  };

  return (
    <section id="contact" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Have a project in mind or just want to say hello? Feel free to send me
          a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 p-8 dark:border-slate-700"
      >
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 outline-none"
        />

        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 outline-none"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Message..."
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 outline-none"
        />

        <button className="rounded-lg bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
