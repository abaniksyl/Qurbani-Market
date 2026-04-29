# Qurbani Livestock Marketplace

A premium Next.js single-page-like web application for browsing and booking livestock for Qurbani.

## Purpose
This project provides a beautiful, accessible, and responsive platform to connect buyers with premium livestock farms. It features simulated authentication, an in-memory booking system, dynamic routing, and a clean, unique UI designed specifically for the Qurbani market.

## Features
- **Home Page**: Hero section, featured animals, and quick browse access.
- **All Animals**: Browse, sort by price, and filter by animal type.
- **Animal Details**: In-depth animal specifications and a seamless booking form.
- **Booking Flow**: Validated booking process with success toasts (in-memory state, no DB required).
- **Authentication**: Simulated email/password and Google OAuth login/register flow.
- **My Profile**: View user information, edit profile details, and track your Qurbani bookings.
- **Loading & Not Found States**: Smooth UX with custom loading spinners and a 404 page.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API (`AuthContext`, `BookingContext`)
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables (create a `.env.local` file):
   ```
   NEXT_PUBLIC_API_BASE=http://localhost:3000/api
   ```

### Running Locally
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production
To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Deployment
This Next.js application is optimized for deployment on Vercel. 
Simply push this repository to GitHub, connect it to Vercel, and it will deploy automatically.
