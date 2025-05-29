"use client"
import Image from "next/image";
import brianFamily from "@/public/brian-family.jpg";
import family from "@/public/family-2.jpg";
import family2 from "@/public/family.jpg";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
    const videoSources = [
        "/media/Brian%20Johnson%20WEB_1.mp4",
        "/media/Brian%20Johnson%20WEB_2.mp4",
        "/media/Brian%20Johnson%20WEB_3.mp4",
        "/media/Brian%20Johnson%20WEB_4.mp4"
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [videoWidth, setVideoWidth] = useState(0);

    // Initialize video refs
    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videoSources.length);
    }, [videoSources.length]);

    // Calculate video width
    useEffect(() => {
        const updateVideoWidth = () => {
            if (containerRef.current) {
                // Get the container width and calculate the video width (80% of container)
                const containerWidth = containerRef.current.clientWidth;
                const calculatedVideoWidth = containerWidth * 0.8; // 80% as per the w-[80%] class
                setVideoWidth(calculatedVideoWidth);
            }
        };

        // Calculate initially
        updateVideoWidth();

        // Recalculate on window resize
        window.addEventListener('resize', updateVideoWidth);

        // Cleanup
        return () => window.removeEventListener('resize', updateVideoWidth);
    }, []);
    function getTranslateX(idx: number, w: number) {
        const LEFT_MARGIN = 0;                // how much the first slide peeks out// slide‑to‑slide shift relative to width
        //   540 px is the gap you want
        const step =  w;          // negative because we move the track left

        return -(LEFT_MARGIN + step * idx);
    }
    // Function to pause the currently active video
    const pauseActiveVideo = () => {
        // @ts-ignore
        if (videoRefs.current[activeIndex] && videoRefs.current[activeIndex].pause) {
            // @ts-ignore
            videoRefs.current[activeIndex].pause();
        }
    };

    const handlePrev = () => {
        pauseActiveVideo();
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        pauseActiveVideo();
        setActiveIndex((prevIndex) =>
            prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <main className="flex flex-col items-center justify-between text-cream-500 bg-blue-500 overflow-x-hidden">
            <div className="flex w-full flex-col relative">
                <Image className="bg-slate-500 w-full" src={family} alt=""/>
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
            <div className="bg-blue-600 w-full flex justify-around ">
                <div className="max-w-screen-lg py-10 text-center px-2">
                    <Link className="bg-red-500 text-white p-2 rounded text-4xl font-bold" href="/RCArea6.pdf">View Area 6 Map</Link>
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

            <div className="bg-blue-500 w-full" id="videos">
                <div className="max-w-screen-2xl mx-auto py-10 px-4">
                    <h2 className="font-body text-5xl mb-8 text-center text-cream-500 uppercase">Campaign Videos</h2>

                    <div className="relative mx-auto max-w-4xl">
                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-red-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                            aria-label="Previous video"
                        >
                            <FaChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-red-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                            aria-label="Next video"
                        >
                            <FaChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>

                        {/* Carousel Container */}
                        <div className="overflow-visible" ref={containerRef}>
                            <div className="flex transition-transform duration-300 ease-in-out relative"
                                 style={{
                                    transform: `translateX(${getTranslateX(activeIndex, videoWidth)}px)`
                                 }}>

                                {videoSources.map((src, index) => {

                                    // Calculate the position relative to active index
                                    const position = (index - activeIndex) % videoSources.length;
                                    // Ensure position is between -2 and 2
                                    const normalizedPosition = ((position + videoSources.length) % videoSources.length) -
                                                              (position > 2 ? videoSources.length : 0);

                                    return (
                                        <div
                                            key={index}
                                            className={`flex-shrink-0 w-full transition-all duration-300 ease-in-out
                                                ${activeIndex === index ? 'opacity-100' : 'opacity-50'}
                                                ${activeIndex === index ? 'w-[80%] scale-100 z-20' : 
                                                   Math.abs(activeIndex - index) >= 1 ? 'w-[80%] scale-90 z-10 mx-[-10%]' : 'hidden'}`}
                                        >
                                            <div className="bg-blue-600 rounded-lg overflow-hidden shadow-lg">
                                                <video
                                                    onClick={() => {
                                                        pauseActiveVideo();
                                                        setActiveIndex(index);
                                                    }}
                                                    className="w-full aspect-video"
                                                    controls={normalizedPosition === 0}
                                                    preload="metadata"
                                                    // @ts-ignore
                                                    ref={el => videoRefs.current[index] = el}
                                                >
                                                    <source src={src} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center mt-4">
                            {videoSources.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        pauseActiveVideo();
                                        setActiveIndex(index);
                                    }}
                                    className={`h-3 w-3 mx-1 rounded-full ${
                                        index === activeIndex ? 'bg-red-500' : 'bg-cream-500 opacity-50'
                                    }`}
                                    aria-label={`Go to video ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
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
