# FitLife Gym

A modern, responsive gym website built with Next.js — featuring smooth animations, a full contact form powered by EmailJS, and sections for services, trainers, pricing, and more.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Email | [EmailJS](https://www.emailjs.com/) |

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gym-website.git
cd gym-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS

Create a `.env.local` file in the project root and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your credentials at [emailjs.com](https://www.emailjs.com/). Your EmailJS template variables should match the contact form field names: `{{name}}`, `{{email}}`, `{{phone}}`, `{{message}}`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

## Live Link

[https://your-live-url.vercel.app](https://your-live-url.vercel.app)
