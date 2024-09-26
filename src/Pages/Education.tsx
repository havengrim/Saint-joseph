import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";

const Education = () => {
  return (
    <div className="bg-gray-50">
        <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-center text-gray-800">
                Quality education for all
            </h2>
            <p className="mb-10 mt-4 text-center w-full max-w-3xl mx-auto text-gray-700">
                Saint Joseph School of Fairview Inc is devoted to excellence in teaching, learning, research, and developing leaders in many disciplines who make a difference globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                {/* Left Side: Content */}

                <div>
                <img
                    src={images.preschool}
                    alt="A representative image for About Us"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>

                <div>
                <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                    Preschool Education
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600">
                    Saint Joseph School of Fairview Inc offers a nurturing environment for preschool children through its Montessori program, which helps develop early childhood skills and prepares students for higher education levels.
                </p>
                <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                </Button>
                </div>
            </div>
            </div>
        </section>

        <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                {/* Left Side: Content */}

                <div>
                    <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                        Basic Education
                    </h3>
                    <p className="text-lg mt-4 leading-relaxed text-gray-600">
                        Saint Joseph School of Fairview Inc offers elementary, junior high school, and senior high school with three major tracks for the K to 12 program – Science, Technology, Engineering, and Mathematics Track, Accountancy, Business, and Management Track, and Humanities and Social Sciences Track.
                    </p>
                    <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                        Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                    </Button>
                </div>

                <div>
                <img
                    src={images.basic}
                    alt="A representative image for About Us"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>
            </div>
            </div>
        </section>

        <section className="py-24">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
                {/* Left Side: Content */}

                <div>
                <img
                    src={images.graduate}
                    alt="A representative image for About Us"
                    className="w-full h-auto rounded-lg shadow-md"
                />
                </div>

                <div>
                <h3 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                    Graduate School
                </h3>
                <p className="text-lg mt-4 leading-relaxed text-gray-600">
                    The Graduate School Program at Saint Joseph School of Fairview Inc produces outstanding professional practitioners who assume roles of responsible leadership in educational, governmental, and business disciplines. The Graduate School operates under a Trimester Plan for the following – Doctor of Philosophy (Major in Educational Management), Master of Arts in Education (Major in Educational Management), Master in Business Administration, and Master in Public Administration.
                </p>
                <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                    Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                </Button>
                </div>
            </div>
            </div>
        </section>
    </div>
  );
};

export default Education;
