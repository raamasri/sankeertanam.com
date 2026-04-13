"use client";

import { useState, FormEvent } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby0yX-QjhDXCRJRschN_WbBDJrdwyhvz2pQdXkhTvZDWbunsJvnpx-RJbotvkOphx_k/exec";

interface SubscribeFormProps {
  variant?: "inline" | "stacked";
}

export function SubscribeForm({ variant = "inline" }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const isConfigured = !GOOGLE_SCRIPT_URL.includes("REPLACE");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !isConfigured) return;

    setState("loading");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });
      setState("success");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p className="text-sm text-saffron font-medium">
        Thank you for subscribing.
      </p>
    );
  }

  const inputClasses =
    "bg-transparent border border-white/20 rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors";
  const buttonClasses =
    "px-5 py-2.5 bg-saffron text-white text-sm font-medium rounded-sm hover:bg-saffron-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "inline"
          ? "flex flex-col sm:flex-row gap-3"
          : "flex flex-col gap-3"
      }
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        placeholder="Enter your email"
        required
        className={`${inputClasses} ${variant === "inline" ? "flex-1" : "w-full"}`}
      />
      <button
        type="submit"
        disabled={state === "loading" || !isConfigured}
        className={buttonClasses}
      >
        {state === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {state === "error" && (
        <p className="text-xs text-red-400 mt-1">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
