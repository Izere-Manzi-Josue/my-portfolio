"use client";

import { useState } from "react";
import Tittle from "../ui/Tittle";

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
  };

  return (
    <section id="contact" className="space-y-2 lg:px-5">
      <div className="px-5 lg:px-6">
        <Tittle title="CONTACT" />
      </div>

      <article className="group rounded-xl border border-transparent px-5 py-5 transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-800 lg:px-6">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
            Let's Work Together
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-xl border py-2 px-4 hover:bg-orange-500/20 text-orange-500 bg-orange-400/20 transition cursor-pointer dark:hover:bg-orange-500/20 duration-300 font-semibold "
            >
              Send Message
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
