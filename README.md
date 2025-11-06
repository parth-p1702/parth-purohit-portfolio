# My Portfolio - Personal Website

A modern, responsive portfolio website built with Next.js featuring dark/light mode, animations, and email functionality.

## 🚀 Features
- Latest Next.js with App Router
- Next.js Server Actions
- Client & Server Components
- TypeScript (Beginner & Intermediate level)
- Tailwind CSS for styling
- Context API for state management
- Advanced Animations with Framer Motion
- Email functionality with React.Email & Resend
- Custom React hooks
- Fresh, modern UI design
- Light & Dark mode
- Fully Responsive design

## 🛠 Tech Stack
**Frontend:** HTML, Tailwind CSS, TypeScript, React  
**Framework:** Next.js 13.4.8  
**Animation:** Framer Motion  
**Email:** React.Email & Resend  
**Icons:** React Icons

## 📦 Installation & Setup

### Prerequisites
- Node.js installed on your system  
- npm or yarn package manager

### Steps to Run Locally

#### 1. Clone the repository
```bash
git clone <your-repo-url>
cd my-portfolio
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Environment Setup
Create a `.env.local` file in the root directory and add your Resend API key:
```text
RESEND_API_KEY=your_resend_api_key_here
```
Get your API key from: [https://resend.com/api-keys](https://resend.com/api-keys)

#### 4. Configure Email
Navigate to the `send-email.ts` action file and change the **"to"** email address to your own email.

#### 5. Run the development server
```bash
npm run dev
```

#### 6. Open your browser
Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Additional Node Packages Used
```bash
npm i react-icons
npm i framer-motion
npm i --save clsx
npm i react-intersection-observer
npm i react-vertical-timeline-component
npm i react-toastify
npm i resend@0.16.0
npm i @react-email/tailwind
npm i @react-email/components
npm i @react-email/render
```

## 🎯 What You'll Learn
This project demonstrates:
- Modern React development patterns
- Next.js App Router implementation
- TypeScript integration
- Responsive design with Tailwind CSS
- Advanced animations and transitions
- Email functionality implementation
- Context API for global state management
- Custom hook creation
- Dark/light mode implementation

## 📞 Contact
Feel free to reach out if you have any questions about setting up or running this project!
