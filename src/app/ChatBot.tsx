"use client";
import { useState, useRef } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are an AI assistant for Hawaii Mobile Dental. Help users schedule dental appointments and answer their questions. Collect name, email, phone, and preferred date/time for scheduling." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      let aiMsg = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        aiMsg += new TextDecoder().decode(value);
        setMessages((msgs) => [
          ...msgs.slice(0, -1),
          msgs[msgs.length - 1],
          { role: "assistant", content: aiMsg },
        ]);
      }
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Sorry, there was an error. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-xs sm:max-w-sm z-50 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col">
      <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 font-bold text-blue-700 dark:text-blue-300">AI Dental Assistant</div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ maxHeight: 320 }}>
        {messages.filter(m => m.role !== "system").map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "inline-block bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-lg px-3 py-2" : "inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg px-3 py-2"}>
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex border-t border-zinc-200 dark:border-zinc-800">
        <input
          className="flex-1 p-2 rounded-bl-xl bg-transparent outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask or schedule..."
          disabled={loading}
        />
        <button type="submit" className="px-4 py-2 text-blue-700 dark:text-blue-300 font-bold" disabled={loading || !input.trim()}>Send</button>
      </form>
    </div>
  );
}
