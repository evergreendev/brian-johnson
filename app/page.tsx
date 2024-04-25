import Image from "next/image";
import voight from "@/public/voight.jpg";
import family from "@/public/family-2.jpg";
import family2 from "@/public/family.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between text-cream-500 bg-green-500">
            <div className="flex w-full flex-col relative">
                <Image className="bg-slate-500" src={voight} alt=""/>
                <div className="bg-orange1-500 text-center bg-opacity-80 md:absolute bottom-0 py-10">
                    <h1 className="font-header px-6 text-4xl lg:text-8xl text-green-500 mb-3 uppercase">Vote Voight</h1>
                    <h2 className="font-body text-xl lg:text-5xl text-center text-green-500 bg-cream-500 uppercase">Curt
                        Voight for Senate 33</h2>
                </div>
            </div>

            <div className="bg-green-500 w-full flex justify-around">
                <div className="max-w-screen-lg py-10 text-center px-2">

                    <p className="text-4xl mb-6">Absentee and Early Voting Began: <span
                        className="font-bold">April 19, 2024</span></p>
                    <p className="text-4xl">Election day: <span className="font-bold">June 4, 2024</span></p>
                </div>
            </div>
            <div className="bg-orange2-500 w-full flex justify-around">
                <h2 className="font-body text-5xl p-2 py-10 text-center">Vote for Curt Voight, the REAL conservative,
                    running for
                    principles, not power.
                </h2>
            </div>
            <div className="flex flex-wrap justify-between w-full max-w-screen-2xl" id="about">
                <div className="bg-center w-full xl:w-6/12 flex flex-col bg-cover">
                    <Image src={family} alt="" className="m-auto shadow-sm opacity-95 shadow-gray-200"/>
                    <Image src={family2} alt="" className="m-auto shadow-sm opacity-95 shadow-gray-200"/>
                </div>
                <div
                    className="self-center mx-auto max-w-prose xl:w-5/12 text-xl xl:text-2xl bg-green-500 p-6 xl:p-26">
                    <p className="mb-6">Dr. Curt Voight is a seasoned educator, leader, and community advocate with over
                        three decades of experience in various roles within the education sector, including coach,
                        teacher, administrator, principal, and professor. Throughout his career, Dr. Voight has been
                        instrumental in shaping the educational landscape of South Dakota, demonstrating a steadfast
                        commitment to excellence both inside and outside the classroom. He has served as a consultant
                        for Elk Mountain Virtual High School, contributed to the National Board of Love INC, and
                        provided consultancy for the development of Distance Delivery Systems in K-12 Education.
                        Additionally, Dr. Voight has received an Executive Appointment from Gov. Janklow to the
                        Educators’ Education Review Panel. His contributions have been recognized with commendations
                        from the South Dakota Legislature, and he is a proud NRA Life Member. Beyond education, he is
                        actively involved in community initiatives such as the Doty Fire Department, where he serves as
                        Assistant Chief, and as a longstanding member of the Board of Directors of Breadroot Food Co-op.
                        Driven by a passion for education, leadership, and community welfare, Dr. Voight continues to be
                        a dedicated advocate for the people of South Dakota.
                    </p>
                    <p>
                        A devout Christian, Curt has been married to his beloved wife Jan for 55 years. Together, they
                        have raised three children and are proud grandparents to five grandchildren. With this strong
                        foundation of faith and family, Curt is deeply committed to securing a bright future for the
                        next generation.
                    </p>
                </div>
            </div>
            <div className="bg-orange2-500 w-full" id="issues">
                <div className="flex flex-col justify-around max-w-screen-2xl mx-auto p-3">
                    <h2 className="font-body text-5xl mb-6 mt-8 uppercase">On the Issues
                    </h2>
                    <div className="flex flex-wrap">
                        <Link href="/issues#god-given"
                              className="text-center grow text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Protection of God-Given and Constitutional Rights
                        </Link>
                        <Link href="/issues#family"
                              className="text-center grow text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Safeguarding Children and Family Values
                        </Link>
                        <Link href="/issues#school-choice"
                              className="text-center grow text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Education Reform and <br/>School Choice
                        </Link>
                        <Link href="/issues#tax-relief"
                              className="text-center grow text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Property Tax Relief for Long-Term Homeowners
                        </Link>
                        <Link href="/issues#second-amendment"
                              className="text-center grow text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Protection of Second Amendment Rights
                        </Link>
                        <Link href="/issues" className="grow bg-cream-500 text-orange1-500 hover:bg-transparent
                        hover:text-cream-500 text-center flex items-center justify-around transition-colors rounded text-3xl w-96 p-3 border-2 border-white m-2 font-bold">
                            Learn More
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
