import Image from "next/image"
import Link from "next/link"

function Banner() {
  return (
    <section className="dark flex h-32 items-center justify-center bg-background py-2 lg:h-[200px]">
      <Link href="/">
        <span className="sr-only">go to home</span>
        <Image
          width={200}
          height={200}
          src="./gcc-logo.svg"
          alt="Grace City Church"
          className="block h-[128px] w-[128px] object-cover lg:h-[200px] lg:w-[200px]"
        />
      </Link>
    </section>
  )
}

export default Banner
