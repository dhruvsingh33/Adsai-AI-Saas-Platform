# AI Video Ads Generator

A modern SaaS platform for creating professional video advertisements using AI. Built with Next.js, React, Akool AI, and Convex.

![AI Video Ads Generator](https://img.shields.io/badge/AI-Video%20Ads%20Generator-blue)
![Next.js](https://img.shields.io/badge/Next.js-13-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

![App Screenshot](./public/ss.png)

## Features

- 🎥 AI-powered video ad creation
- 🎨 Rich template library
- 💬 AI chat assistance
- 🌓 Light/Dark mode
- 🔒 Secure authentication
- 📱 Responsive design
- ⚡ Real-time preview
- 🎯 Smart editing tools

## Tech Stack

- **Frontend:**
  - Next.js 13+ (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components

- **Backend:**
  - Convex (Database & Backend)
  - Akool AI (Video Generation)
  - Clerk (Authentication)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Convex account
- Akool AI API key
- Clerk account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-video-ads-generator.git
   cd ai-video-ads-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Akool AI
   AKOOL_API_KEY=your_akool_api_key

   # Convex
   CONVEX_URL=your_convex_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-video-ads-generator/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── app-sidebar.tsx   # Main sidebar
│   └── mode-toggle.tsx   # Theme toggle
├── lib/                  # Utility functions
├── public/              # Static assets
└── convex/             # Convex backend
```

## Features in Detail

### AI Video Generation
- Text-to-video conversion
- Template-based generation
- Custom video editing
- Real-time preview

### Smart Editing
- AI-powered suggestions
- Drag-and-drop interface
- Timeline editing
- Asset management

### Collaboration
- Team workspaces
- Project sharing
- Version control
- Comments and feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Convex](https://www.convex.dev/)
- [Akool AI](https://akool.com/)
- [Clerk](https://clerk.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
