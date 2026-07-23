"use client";

import { useState } from "react";
import Tittle from "../../ui/Tittle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Failed to send your message.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-2 p-1 lg:px-5">
      <div className="px-5 lg:px-6">
        <Tittle title="CONTACT" />
      </div>

      <article className="group rounded-xl border border-transparent px-5 py-5 transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-800 lg:px-6">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
            Let&#39;s Work Together
          </h3>

          {/* Status Message */}
          {status.message && (
            <div
              className={`mt-4 rounded-lg border px-4 py-3 text-sm font-medium ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400"
                  : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 rounded-xl border bg-orange-400/20 px-4 py-2 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500/20 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
