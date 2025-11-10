import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="page-wrapper"
      className="w-full flex flex-col min-h-screen overflow-hidden"
    >
      <header
        id="page-header"
        className="fixed top-0 left-0 w-full z-50 px-12 py-4 flex flex-wrap justify-between items-center"
      >
        <div className="flex flex-wrap items-center gap-10">
          <div className="w-[94px] h-[49px] relative">
            <Image
              src="/images/travel-logo.svg"
              alt="Logo"
              width={94}
              height={49}
              className="invert"
            />
          </div>
          <nav>
            <ul className="flex flex-wrap gap-8 list-none">
              <li>
                <Link href="/" className="no-underline text-background">
                  Treks
                </Link>
              </li>
              <li>
                <Link href="/" className="no-underline text-background">
                  Peak Climbing
                </Link>
              </li>
              <li>
                <Link href="/" className="no-underline text-background">
                  Expeditions
                </Link>
              </li>
              <li>
                <Link href="/" className="no-underline text-background">
                  Multi-Activity Trips
                </Link>
              </li>
              <li>
                <Link href="/" className="no-underline text-background">
                  Company
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="grow">
        <section className="w-full h-screen bg-background relative grid content-center">
          <div className="absolute h-full w-full left-0 top-0">
            <Image
              src="/images/mountain.jpg"
              alt="Hero Image"
              fill
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-full bg-black/30"
            ></span>
          </div>
          <div className="px-20 py-30 relative z-10 grid gap-3 max-w-300 w-full mx-auto">
            <div className="flex ml-1.5">
              <span className="text-background bg-primary/80 px-3 py-0.5 font-medium">
                Booking for 2026 now open
              </span>
            </div>
            <h1 className="text-8xl font-bold relative z-10 text-background">
              Everest
            </h1>
            <div className="mt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-lg text-background font-semibold hover:text-primary transition-colors duration-300"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm.707-14.707 4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Your Adventure Starts Here</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer id="page-footer" className="">
        <div className="grid gap-20 bg-primary p-20">
          <div className="grid gap-5 text-background">
            <h2 className="text-5xl font-semibold relative z-10">
              Footer Heading
            </h2>
            <p className="max-w-lg text-xl mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-md"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="grid gap-5 text-background">
            <h2 className="text-5xl font-semibold font-serif italic relative z-10">
              Footer Heading 1
            </h2>
            <p className="max-w-lg text-lg mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-secondary-foreground text-secondary font-semibold px-8 py-3 rounded-md"
              >
                Button
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-20 bg-background p-20">
          <div className="grid gap-5 text-foreground">
            <h2 className="text-5xl font-semibold relative z-10">
              Footer Heading
            </h2>
            <p className="max-w-lg text-xl mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="grid gap-5 text-foreground">
            <h2 className="text-5xl font-semibold font-serif italic relative z-10">
              Footer Heading 1
            </h2>
            <p className="max-w-lg text-lg mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-secondary-foreground text-secondary font-semibold px-8 py-3 rounded-md"
              >
                Button
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-20 bg-secondary-foreground p-20">
          <div className="grid gap-5 text-secondary">
            <h2 className="text-5xl font-semibold relative z-10">
              Footer Heading
            </h2>
            <p className="max-w-lg text-xl mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-md"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="grid gap-5 text-secondary">
            <h2 className="text-5xl font-semibold font-serif italic relative z-10">
              Footer Heading 1
            </h2>
            <p className="max-w-lg text-lg mb-2">
              Himalayan Ecstasy Nepal, a Trekking and Climbing Operator Company
              in Nepal, combines the best of international standards with the
              deep knowledge of local experts.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-md"
              >
                Button
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
