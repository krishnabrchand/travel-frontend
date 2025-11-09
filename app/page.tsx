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
          <div className="px-20 py-30 relative z-10 grid max-w-400 w-full mx-auto">
            <div className="flex">
              <span className="bg-primary/90 text-primary-foreground uppercase px-4 py-1">
                Booking for 2026 now open
              </span>
            </div>
            <h1 className="text-8xl font-bold relative z-10 text-background ml-40">
              Everest
            </h1>
            <div className="mt-2 ml-40">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xl font-semibold text-background"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 300 300"
                    fill="white"
                  >
                    <path d="M149.996 0C67.157 0 .001 67.161.001 149.997S67.157 300 149.996 300s150.003-67.163 150.003-150.003S232.835 0 149.996 0zM208.8 94.181l-38.097 107.473a2.59 2.59 0 0 1-2.067 1.699 2.597 2.597 0 0 1-2.469-1.032l-19.346-26.434-31.981 31.979c-.506.506-1.17.76-1.834.76s-1.328-.254-1.834-.76L91.806 188.5a2.59 2.59 0 0 1 0-3.667l31.979-31.984-26.436-19.343a2.594 2.594 0 0 1 .664-4.536l107.473-38.097a2.588 2.588 0 0 1 2.7.609c.71.704.949 1.755.614 2.699z" />
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
