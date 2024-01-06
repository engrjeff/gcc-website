import Image from "next/image"
import Link from "next/link"

function SiteFooter() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="container space-y-4 py-8">
        <Image
          width={60}
          height={60}
          src="./gcc-logo-icon.svg"
          alt="Grace City Church"
          className="object-cover"
        />
        <ul className="flex flex-col gap-3 px-4 lg:flex-row">
          <li>
            <Link
              className="text-sm font-semibold uppercase transition-colors hover:text-primary"
              href="/plan-your-visit"
            >
              I&apos;m New
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold uppercase transition-colors hover:text-primary"
              href="/login"
            >
              Member Login
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold uppercase transition-colors hover:text-primary"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-semibold uppercase transition-colors hover:text-primary"
              href="/give"
            >
              Give
            </Link>
          </li>
        </ul>
        <div className="space-y-3 px-4 text-sm">
          <address className="not-italic text-muted-foreground">
            Sitio Ziplang, Barangay San Guillermo,
            <br />
            Morong, Rizal 1960.
            <br />
            Philippines.
          </address>
          <a href="tel:+639623797084" className="text-muted-foreground">
            +63962-379-7084
          </a>
        </div>
        <div className="px-4 text-sm">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Grace City Church.
            <br />
            All rights reserved.
            <br />
            Soli Deo Gloria!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
