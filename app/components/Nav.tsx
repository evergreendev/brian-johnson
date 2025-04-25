import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaFacebookSquare } from "react-icons/fa";

const Nav = () => {
    return <>
{/*       <div className="w-full bg-blue-600">
            <div className="max-w-screen-lg mx-auto">

            </div>
        </div>*/}
        <div className="bg-blue-500 w-full flex flex-wrap justify-between sticky top-0 z-20 shadow-md">

            <div
                className="z-10 py-2 px-6 text-cream-500 font-body w-full max-w-screen-xl mx-auto items-center justify-between text-xl lg:flex ">
                <Link href="/">
                    <Image className="w-48" src={logo} alt="Brian Johnson for Area 6 School Board"/>
                </Link>
                <div className="space-x-8 flex items-center">
                    <Link className="size-10 flex items-center justify-around hover:text-red-500"
                          href="https://www.facebook.com/BrianJohnsonforSchoolBoard/">
                        <FaFacebookSquare width={48} className="w-full" />
                    </Link>
                    <Link className="hover:text-red-500" href="/#about">About</Link>
                    <Link className="hover:text-red-500" href="/#priorities">Priorities</Link>
                    <Link className="hover:text-red-500" href="/#videos">Videos</Link>
                    <Link href="https://secure.anedot.com/brian-johnson-for-school-board/brianforarea6"
                          className="rounded hover:bg-red-500 text-cream-500 border-2 p-3 py-1 bg-red-500 border-red-500">Donate</Link>
                </div>

            </div>
        </div>
    </>
}

export default Nav;
