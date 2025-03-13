import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Nav = () => {
    return <>
{/*        <div className="w-full bg-blue-600">
            <div className="max-w-screen-lg mx-auto">
                <Link className="ml-auto size-10 flex items-center justify-around"
                      href="https://www.facebook.com/profile.php?id=61558807948713">
                    <FontAwesomeIcon icon={faFacebook} size="lg" width="24px"/>
                </Link>
            </div>
        </div>*/}
        <div className="bg-blue-500 w-full flex flex-wrap justify-between sticky top-0 z-20 shadow-md">

            <div
                className="z-10 py-2 px-6 text-cream-500 font-body w-full max-w-screen-xl mx-auto items-center justify-between text-xl lg:flex ">
                <Link href="/">
                    <Image className="w-32" src={logo} alt="Brian Johnson for Area 6 School Board"/>
                </Link>
                <div className="space-x-8">
                    <Link className="hover:text-red-500" href="/#about">About</Link>
                    <Link className="hover:text-red-500" href="/#priorities">Priorities</Link>
                    <Link href="/"
                          className="rounded hover:bg-red-500 text-cream-500 border-2 p-3 py-1 bg-red-500 border-red-500">Donate</Link>
                </div>

            </div>
        </div>
    </>
}

export default Nav;
