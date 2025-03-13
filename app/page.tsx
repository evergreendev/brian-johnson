import Image from "next/image";
import brianFamily from "@/public/brian-family.jpg";
import family from "@/public/family-2.jpg";
import family2 from "@/public/family.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between text-cream-500 bg-blue-500">
            <div className="flex w-full flex-col relative">
                <Image className="bg-slate-500 w-full" src={brianFamily} alt=""/>
                <div className="bg-red-500 text-center bg-opacity-80 md:absolute bottom-0 py-10">
                    <h1 className="font-header px-6 text-4xl lg:text-8xl text-blue-500 mb-3 font-bold">Brian
                        Johnson </h1>
                    <h2 className="font-body text-xl lg:text-5xl text-center text-blue-500 bg-cream-500 uppercase p-6">for
                        Area 6 School Board</h2>
                </div>
            </div>

            <div className="bg-blue-500 w-full flex justify-around">
                <div className="max-w-screen-lg py-10 text-center px-2">

                    <p className="text-4xl mb-6">Absentee and Early Voting Begins: <span
                        className="font-bold">May 19, 2025</span></p>
                    <p className="text-4xl">Election Day: <span className="font-bold">June 3, 2025</span></p>
                </div>
            </div>
            <div className="bg-red-500 w-full flex justify-around">
                <h2 className="font-body text-5xl p-2 py-10 text-center">
                    <p className="font-bold text-4xl">Smart Foundations, Strong Futures:</p> Strengthening schools today for student success tomorrow.
                </h2>
            </div>
            <div className="flex flex-wrap justify-between w-full max-w-screen-2xl" id="about">
                <div className="bg-center w-full xl:w-6/12 flex flex-col bg-cover">
                    <Image src={family2} alt="" className="m-auto shadow-sm opacity-95 shadow-gray-200"/>
                    <Image src={family} alt="" className="m-auto shadow-sm opacity-95 shadow-gray-200"/>
                </div>
                <div
                    className="self-center mx-auto max-w-prose xl:w-5/12 text-xl xl:text-2xl bg-blue-500 p-6 xl:p-26">
                    <p className="mb-4">As a lifelong resident of Rapid City, Brian Johnson has deep roots in the
                        community and its school system. For 53 years, he has called Rapid City home — growing up in
                        Rapid City, attending Rapid City schools, and now watching his own family follow the same path.
                        Brian, his wife, and their children are all proud graduates of the Rapid City school system.
                        With two grandchildren who will one day enter these same schools, he is highly motivated to
                        ensure that the best possible education is provided for current and future generations.</p>

                    <p className="mb-4">Brian was fortunate to receive a strong education in Rapid City, but recent test
                        scores show a concerning decline, falling well below national averages. He recognizes that the
                        schools are struggling, and there is no better time than now to reverse this trend. He believes
                        it is essential to refocus on building a curriculum and teaching approach that reaches the
                        maximum number of students while equipping them with critical thinking and real-world
                        skills.</p>

                    <p className="mb-4">Brian’s vision is clear: restore excellence in our schools, craft a solid
                        educational foundation that will endure for generations, and create a school system that
                        prepares every child for success.</p>

                    <p className="mb-4">The time for change is now. The current trajectory is not setting children up
                        for the future they deserve. Brian is committed to bringing Rapid City’s schools back to being a
                        place of opportunity and achievement for all students.</p>

                </div>
            </div>
            <div className="bg-red-500 w-full " id="priorities">
                <div className="flex flex-col max-w-screen-lg justify-around mx-auto p-3">
                    <h2 className="font-body text-5xl mb-6 mt-8 uppercase">Priorities
                    </h2>
                    <div className="p-4 bg-cream-500 rounded shadow-md mb-4">
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">Critical Thinking</h3>
                        <p className="text-xl text-gray-700">Fostering a learning environment that encourages students
                            to think for themselves, ask questions, and solve problems with confidence.</p>
                    </div>
                    <div className="p-4 bg-cream-500 rounded shadow-md mb-4">
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">Common Sense, Real-World Learning</h3>
                        <p className="text-xl text-gray-700">Preparing students with practical, real-world skills and
                            knowledge to help them achieve success beyond the classroom.</p>
                    </div>
                    <div className="p-4 bg-cream-500 rounded shadow-md mb-4">
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">Future-Focused Education</h3>
                        <p className="text-xl text-gray-700">Laying the foundation for a stronger school system to
                            provide tomorrow’s students with the best opportunities to succeed.</p>
                    </div>
                    <div className="p-4 bg-cream-500 rounded shadow-md mb-4">
                        <h3 className="text-2xl font-bold text-blue-500 mb-2">Restoring Excellence</h3>
                        <p className="text-xl text-gray-700">Reversing the trend of declining test scores to ensure that
                            Rapid City schools reflect the high standards of excellence the community is capable of
                            achieving.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}
