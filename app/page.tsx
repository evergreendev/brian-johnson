import Image from "next/image";
import voight from "@/public/voight.jpg";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between text-cream-500 bg-green-500">
            <div className="bg-green-500 shadow-md w-full flex justify-between">
                <div
                    className="z-10 text-cream-500 font-body w-full max-w-screen-2xl mx-auto items-center justify-between text-xl lg:flex ">
                    <Link href="/">
                        <Image className="w-32" src={logo} alt="Vote Voight"/>
                    </Link>
                    <Link className="hover:text-orange1-500" href="/platform">Platform</Link>
                </div>

            </div>
            <div className="flex w-full flex-col relative">
                <Image src={voight} alt=""/>
                <div className="bg-orange1-500 text-center bg-opacity-80 md:absolute bottom-0 py-10">
                    <h1 className="font-header px-6 text-4xl lg:text-8xl text-green-500 mb-3">Vote Voight</h1>
                    <h2 className="font-body text-xl lg:text-5xl text-center text-green-500 bg-cream-500 uppercase">Curt
                        Voight for Senate 33</h2>
                </div>
            </div>

            <div className="bg-green-500 w-full flex justify-around">
                <div className="max-w-screen-lg py-10 text-center">

                    <p className="text-4xl mb-6">Absentee voting begins: <span
                        className="font-bold">April 19, 2024</span></p>
                    <p className="text-4xl mb-6">Early voting begins: <span className="font-bold">May 26, 2024</span>
                    </p>
                    <p className="text-4xl">Election day: <span className="font-bold">June 4, 2024</span></p>
                </div>
            </div>
            <div className="bg-orange2-500 w-full flex justify-around">
                <h2 className="font-body text-5xl p-2 py-10 text-center">Vote for Curt Voight, the REAL conservative,
                    running for
                    principles, not power.
                </h2>
            </div>
            <div className="max-w-screen-lg w-full text-2xl bg-green-500 p-20">
                <p>Dr. Curt Voight is a seasoned educator, leader, and community advocate with over three decades of
                    experience in various roles within the education sector, including coach, teacher, administrator,
                    principal, and professor. Throughout his career, Dr. Voight has been instrumental in shaping the
                    educational landscape of South Dakota, demonstrating a steadfast commitment to excellence both
                    inside and outside the classroom. He has served as a consultant for Elk Mountain Virtual High
                    School, contributed to the National Board of Love INC, and provided consultancy for the development
                    of Distance Delivery Systems in K-12 Education. Additionally, Dr. Voight has participated in the
                    Gates Leadership mentoring project and received an Executive Appointment from Gov. Janklow to the
                    Educators’ Education Review Panel. His contributions have been recognized with commendations from
                    the South Dakota Legislature, and he is a proud NRA Life Member. Beyond education, he is actively
                    involved in community initiatives such as the Doty Fire Department, where he serves as Assistant
                    Chief, and as a longstanding member of the Board of Directors of Breadroot Food Co-op. Driven by a
                    passion for education, leadership, and community welfare, Dr. Voight continues to be a dedicated
                    advocate for the people of South Dakota.
                </p>
            </div>
        </main>
    );
}
