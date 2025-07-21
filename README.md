# Stellar Password Generator

A modern, secure, and responsive password generator web app built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS** — inspired by the "Stellar" visual style from Cruip.

All password generation happens **locally in your browser** for privacy and maximum security.

---

## ✨ Features

- **Modern design:** Glassmorphism cards, animated starfield background, vivid accent colors
- **Client-side only:** Passwords are generated securely on your device, never sent to any server
- **Automatic updates:** The password regenerates instantly as you change any option (length, charset)
- **One-page navigation:** All sections (Generator, Trivia, FAQ, Tips, Stats) with smooth scrolling
- **Mobile friendly:** Responsive, beautiful on any device
- **Copy-to-clipboard:** Convenient password copying with one click
- **Best practices:** Quick security tips and statistics provided for every user

---

## 🧭 App Sections

- **Generator:** Create strong, customizable passwords. Choose length, include uppercase, lowercase, numbers, and symbols. Copy or regenerate as you wish.
- **Trivia:** Fun facts about passwords, breaches, and security habits.
- **FAQ:** Common questions about safe password usage and how the generator works.
- **Tips:** Key reminders and good practices for password security.
- **Stats:** Numbers that open your eyes — password strengths, time-to-crack, leaks, and 2FA usage.

---

## 🛠️ Technology Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (customized Stellar palette)
- [lucide-react](https://lucide.dev/) (icon pack)

---

## 🚀 Usage

**Local development:**

git clone https://github.com/danskonieczny/password-generator-app.git
cd stellar-password-generator
npm install
npm run dev

Then open [http://localhost:3000](http://localhost:3000)

**Vercel deployment:**  
This project is 100% compatible with [Vercel](https://vercel.com). Just import your repo and deploy — no extra configuration required.

---

## 🔒 Security & Privacy

- **All password logic runs 100% client-side.**
- **Nothing is ever sent or stored on any server.**
- **No analytics, no ads, no trackers.**  
- **You alone see your generated password.**

---

## ⚙️ Customization

- Change themes via `tailwind.config.ts`
- Content in FAQ, Tips, Trivia, Stats can be edited in app code
- Adjust number/effect of stars in `StarfieldBackground.tsx`

---

## 📄 License

MIT — free to use, fork, share, and adapt.

> **Made with ❤️ by danskonieczny 
> Inspired by the Stellar demo from [Cruip.com](https://cruip.com/demos/stellar/)**

---
