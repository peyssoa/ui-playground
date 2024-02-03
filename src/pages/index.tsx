import { Inter } from "next/font/google";
import { KeyIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const playgroundDirectory = [
    {
      name: "CSS Positioning",
      url: "/css-positioning",
    },
  ];

  /**
   * A list of things I would like to explore:
   * Animations
   * Canvas API
   * WebGL
   * SVG
   * Interactive Data Visualization
   * Three.js
   * React Three Fiber
   * GSAP
   * WebXR
   * Parallax
   * Scroll Effects
   * Progressive Hydration
   * Streaming SSR
   * Animated View Transitions
   */

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}>
      <div>
        <div className='flex flex-col gap-4'>
          {playgroundDirectory.map((playground) => (
            <Link
              key={playground.url}
              className='flex items-center gap-2 p-4 rounded-lg bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              href={playground.url}
            >
              <KeyIcon className='h-6 w-6' />
              <span>{playground.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
