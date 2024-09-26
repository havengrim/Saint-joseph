import { images } from "@/assets/images";
import { Card } from "@/components/ui/card";

const News = () => {
  return (
    <div className="bg-gray-50">
      <section className="py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-start text-gray-800">
            Our Latest News and Events
          </h2>
          <p className="mb-10 mt-4 text-gray-700">
            Stay updated with the latest happenings at Saint Joseph School of Fairview Inc. From academic achievements to upcoming events, we are continuously striving to foster a vibrant learning environment that shapes the leaders of tomorrow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-16">
            {/* News Card 1 */}
            <Card className="flex flex-col shadow-md hover:shadow-lg transition duration-300">
              <img
                src={images.volleyball} // Volleyball image
                alt="Exciting Volleyball Match"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Exciting Volleyball Match</h3>
                <p className="text-gray-600 mt-2">
                  Our students showcased their skills during an exhilarating volleyball match last week.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 20, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 2 */}
            <Card className="flex flex-col shadow-md hover:shadow-lg transition duration-300">
              <img
                src={images.basketball} // Basketball image
                alt="Basketball Tournament Highlights"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Basketball Tournament Highlights</h3>
                <p className="text-gray-600 mt-2">
                  Our basketball team displayed incredible teamwork and spirit during the recent tournament.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 18, 2024</span>
                </div>
              </div>
            </Card>

            {/* News Card 3 */}
            <Card className="flex flex-col shadow-md hover:shadow-lg transition duration-300">
              <img
                src={images.chess} // Chess image
                alt="Chess Club Competition"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Chess Club Competition</h3>
                <p className="text-gray-600 mt-2">
                  Our chess club hosted a friendly competition, showcasing the strategic skills of our players.
                </p>
                <div className="flex items-center text-gray-500 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h8m-4 4h4m-2 6H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6z"
                    />
                  </svg>
                  <span>September 15, 2024</span>
                </div>
              </div>
            </Card>

            {/* Add more news cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
