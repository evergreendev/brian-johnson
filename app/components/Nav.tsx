import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Nav = () => {
    return <div className="bg-green-500 shadow-md w-full flex justify-between">
        <div
            className="z-10 text-cream-500 font-body w-full max-w-screen-2xl mx-auto items-center justify-between text-xl lg:flex ">
            <Link href="/">
                <Image className="w-32" src={logo} alt="Vote Voight"/>
            </Link>
            <div className="space-x-8">
                <Link className="hover:text-orange1-500" href="/#issues">Platform</Link>
                <Link href="/donate" className="rounded hover:bg-orange2-500 text-cream-500 border-2 p-3 bg-orange1-500 border-orange1-500">Donate</Link>
            </div>

        </div>

    </div>
}

export default Nav;