// ===============================
// SHAHZ AIB SOOMRO PORTFOLIO (Next.js App Router)
// ===============================
// Paste this structure into your Next.js project

/*
📁 app/
  ├── layout.tsx
  ├── page.tsx
  ├── about/page.tsx
  ├── work/page.tsx
  ├── services/page.tsx
  ├── contact/page.tsx

📁 components/
  └── Navbar.tsx
*/

// ===============================
// app/layout.tsx
// ===============================

export const metadata = {
  title: "Shahzaib Soomro Portfolio",
  description: "Video Editor Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "black", color: "white", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

// ===============================
// components/Navbar.tsx
// ===============================

"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", borderBottom: "1px solid #222" }}>
      <h2>Shahzaib Soomro</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

// ===============================
// app/page.tsx (HOME)
// ===============================

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1 style={{ fontSize: "50px" }}>Shahzaib Soomro</h1>
        <p style={{ color: "gray", marginTop: "10px" }}>
          Video Editor | Talking Head | FB Ads | Podcast Editor
        </p>
      </div>
    </div>
  );
}

// ===============================
// app/about/page.tsx
// ===============================

import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "50px" }}>
        <h1>About Me</h1>
        <p>
          I am Shahzaib Soomro, a professional video editor specializing in high-retention content,
          talking head videos, Facebook ads, and podcast editing.
        </p>
      </div>
    </div>
  );
}

// ===============================
// app/work/page.tsx
// ===============================

import Navbar from "../../components/Navbar";

export default function Work() {
  const projects = ["Talking Head", "FB Ads", "Podcast Editing", "VSL Editing"];

  return (
    <div>
      <Navbar />
      <div style={{ padding: "50px" }}>
        <h1>My Work</h1>
        <ul>
          {projects.map((p, i) => (
            <li key={i} style={{ marginTop: "10px" }}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ===============================
// app/services/page.tsx
// ===============================

import Navbar from "../../components/Navbar";

export default function Services() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "50px" }}>
        <h1>Services</h1>
        <ul>
          <li>Talking Head Video Editing</li>
          <li>Facebook Ads Editing</li>
          <li>Podcast Editing</li>
          <li>VSL / Sales Videos</li>
        </ul>
      </div>
    </div>
  );
}

// ===============================
// app/contact/page.tsx
// ===============================

import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "50px" }}>
        <h1>Contact</h1>
        <p>Email: shahzaibkhatri918@gmail.com</p>
        <p>WhatsApp: 03112224164</p>
      </div>
    </div>
  );
}
