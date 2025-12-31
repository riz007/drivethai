# DriveThai

Master Thai road signs and traffic regulations for motorcycles, cars, and trucks. Bilingual guide in English and Thai with interactive learning.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Project Structure

- `app/`: Contains the core application logic, including pages and API routes.
  - `app/api/`: API routes for the application.
  - `app/laws/`: Pages related to driving laws.
  - `app/legal/`: Pages for legal information.
  - `app/quiz/`: The quiz section of the application.
  - `app/signs/`: Pages related to road signs.
- `components/`: Reusable UI components.
  - `components/ui/`: UI components from a component library.
- `contexts/`: React contexts for state management.
- `hooks/`: Custom React hooks.
- `lib/`: Utility functions and data.
- `public/`: Static assets.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the project files.

## API Endpoints

- `GET /api/ai-quiz`: Endpoint for the AI quiz.
- `GET /api/signs`: Endpoint for road signs.
- `GET /api/signs/search`: Endpoint for searching road signs.

## Contributing

Contributions are welcome! Please see the [LICENSE.md](LICENSE.md) file for details on how to contribute to this project.

## License

This project is licensed under the terms of the [LICENSE.md](LICENSE.md) file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
