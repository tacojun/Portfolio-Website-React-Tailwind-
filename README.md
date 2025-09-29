portfolio-website/
 ├─ src/
 │   ├─ components/
 │   │   ├─ Navbar.jsx
 │   │   ├─ Hero.jsx
 │   │   ├─ Projects.jsx
 │   │   └─ Contact.jsx
 │   ├─ App.jsx
 │   └─ index.js
 ├─ public/
 │   └─ index.html
 ├─ package.json
 ├─ tailwind.config.js
 └─ README.md
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.1",
    "tailwindcss": "^3.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
import React from "react";

function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-200 to-purple-200">
      <h2 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h2>
      <p className="text-lg max-w-xl mb-6">
        I am a passionate developer building modern web applications and creative projects.
      </p>
      <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        View My Work
      </a>
    </section>
  );
}

export default Hero;
import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio website built with React and Tailwind CSS." },
    { title: "YouTube Data Analysis", description: "Data analysis project using Python and Pandas." },
    { title: "Flask Chatbot", description: "A simple chatbot built with Flask and OpenAI API." },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full mb-4 p-3 border rounded"></textarea>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: sans-serif;
}
# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS**.  
It includes sections for About Me, Projects, and Contact.

## Features
- Responsive design
- Modern UI with Tailwind CSS
- Easy customization

## Installation
```bash
npm install
npm start
# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS**.  
It includes sections for About Me, Projects, and Contact.

## Features
- Responsive design
- Modern UI with Tailwind CSS
- Easy customization

## Installation
```bash
npm install
npm start


# Portfolio Website

A personal portfolio website built with **React** and **Tailwind CSS**.  
It includes sections for About Me, Projects, and Contact.

## Features
- Responsive design
- Modern UI with Tailwind CSS
- Easy customization

## Installation
```bash
npm install
npm start
# Portfolio-Website-React-Tailwind-
