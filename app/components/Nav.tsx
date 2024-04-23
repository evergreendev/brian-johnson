import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@awesome.me/kit-28900b2a06/icons/classic/brands";

const Nav = () => {
    return <>
        <div className="w-full bg-green-600">
            <div className="max-w-screen-lg mx-auto">
                <Link className="ml-auto size-10 flex items-center justify-around"
                      href="https://www.facebook.com/profile.php?id=61558807948713">
                    <FontAwesomeIcon icon={faFacebook} size="lg" width="24px"/>
                </Link>
            </div>
        </div>
        <div className="bg-green-500 w-full flex flex-wrap justify-between sticky top-0 z-20 shadow-md">

            <div
                className="z-10 py-2 px-6 text-cream-500 font-body w-full max-w-screen-xl mx-auto items-center justify-between text-xl lg:flex ">
                <Link href="/">
                    <Image className="w-32" src={logo} alt="Vote Voight"/>
                </Link>
                <div className="space-x-8">
                    <Link className="hover:text-orange1-500" href="/#about">About</Link>
                    <Link className="hover:text-orange1-500" href="/issues">Issues</Link>
                    <Link href="/donate"
                          className="rounded hover:bg-orange2-500 text-cream-500 border-2 p-3 py-1 bg-orange1-500 border-orange1-500">Donate</Link>
                </div>

            </div>
        </div>
    </>
}

export default Nav;