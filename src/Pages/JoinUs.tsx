import { images } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";


export default function JoinUs() {
  return (
    <section className="py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <section className="dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
              <div 
                className="h-64 bg-cover lg:h-full" 
                style={{ backgroundImage: `url(${images.enroll})` }} // Use images.enroll as the background image
              />
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="font-bold text-3xl sm:text-4xl leading-tight text-gray-700">
                Embrace the Values of <span className="text-[#630000]">St. Joseph</span>
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-300">
                At St. Joseph School, we cultivate an environment that blends innovation with traditional values.
                Join us in our mission to foster holistic development through educational excellence and community engagement.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <Button className="rounded-full mt-4 bg-[#630000] p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center">
                  Start Your Journey <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
