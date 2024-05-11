import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container
    padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/images/logo.svg" 
            width={180} height={200} alt="logo"/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            { NAV_LINKS.map((item) => (
                <Link href={item.href} key={item.key} 
                    className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {item.label}
                </Link>
            ))}
        </ul>
        <div
        className="lg:flexCenter hidden">
            <Button 
                type="button"
                title="Ingresa"
                icon="/user.svg"
                variant="btn_purple"
            />

        </div>
        <Image
            src="menu.svg"
            width={32}
            height={32}
            alt="menu"
            className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar