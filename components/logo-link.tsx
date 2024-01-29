import Image from "next/image"
import Link from "next/link"

function LogoLink() {
  return (
    <Link href="/">
      <Image
        width={38}
        height={38}
        src="/gcc-logo-icon.svg"
        alt="Grace City Church"
        className="inline-block object-cover"
      />
      <span className="sr-only">go to home</span>
    </Link>
  )
}

export default LogoLink
