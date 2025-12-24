import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { Image } from '@/shared/ui/Image/Image.ui';
import { Avatar } from '@/shared/ui/Avatar/Avatar.ui';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-full">
      <header className="border-b bg-white/60 dark:bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar fallback="FS" />
            <div>
              <div className="font-semibold">Frontend Starter</div>
              <div className="text-xs text-slate-500">Opinionated template</div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Link to="/menu" className="hidden md:inline">
              <Button variant="ghost">Menu</Button>
            </Link>
            <Link to="/dashboard" className="hidden md:inline">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Production-ready frontend starter
            </h1>
            <p className="text-lg text-slate-600 mb-6 max-w-xl">
              Opinionated, documented and scaffolded starter to build customer-facing React
              applications. Includes linting, formatting, CI, Docker, PWA support and more.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/menu">
                <Button size="lg">Browse Menu</Button>
              </Link>
              <a href="#docs">
                <Button variant="outline" size="lg">
                  Documentation
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-sm text-slate-500">Used by</div>
                <div className="mt-2 flex items-center gap-3">
                  <Avatar src="https://i.pravatar.cc/" alt="User" fallback="A" />
                  <Avatar src="https://i.pravatar.cc/" alt="User" fallback="B" />
                  <Avatar src="https://i.pravatar.cc/" alt="User" fallback="C" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <Image
                src="/vite.sv"
                alt="Hero"
                // priority
                className="w-80 h-80 rounded-xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="docs" className="mt-16">
          <h2 className="text-2xl font-bold mb-4">What you'll find in this template</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-6 bg-background/85 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Tooling & Quality</h3>
              <p className="text-sm text-slate-600">Preconfigured ESLint, Prettier, Husky, lint-staged and CI.</p>
            </article>
            <article className="p-6 bg-background/85 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Architecture</h3>
              <p className="text-sm text-slate-600">Feature-first structure, domain entities and shared UI primitives.</p>
            </article>
            <article className="p-6 bg-background/85 border rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Deploy & Docker</h3>
              <p className="text-sm text-slate-600">Dockerfile, compose for dev and prod-like builds and Vercel deploy workflows.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t py-2 mt-10 bg-foreground/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Frontend Starter</div>
          <div className="flex items-center gap-4">
            <a href="/docs">Docs</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// named export at declaration
