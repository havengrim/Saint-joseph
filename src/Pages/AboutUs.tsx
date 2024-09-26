import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";


const AboutUs = () => {
  return (
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16">
          {/* Left Side: Content */}
          <div>
            <h3 className="font-bold text-4xl leading-tight text-gray-700">
              Why Saint Joseph School of Fairview Inc?
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              We offer a student-centered learning experience that provides a wide range of teaching methods designed to sustain students’ aspirations, interests, and needs. Saint Joseph School of Fairview Inc has also modern and adequate facilities suited for academic studies, research and science, physical activities, extra-curricular programs, socio-civic and religious activities. We also offer Montessori programs for elementary and high school that features the philosophy of holistic development for a child – physical, social, emotional, and cognitive.
            </p>
            <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
              About Us <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>


          <div>
            <img
              src={images.about}
              alt="A representative image for About Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
