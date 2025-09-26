import Image from "next/image";
import Seo2 from "../../../public/images/digitalmarketing/seo2.svg"; // adjust path as needed

const WhyUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wide text-indigo-600">Search Engine Marketing</p>
              <h3 className="text-3xl font-bold text-gray-800 leading-snug">
                Optimizing <span className="text-indigo-600">Visibility and Traffic</span> via Strategic Investment...
              </h3>
            </div>

            <p className="mb-4 text-gray-700">
              Infodazz is at the forefront of the SEM industry, boasting a team of skilled professionals equipped with extensive business knowledge. We specialize in search-form advertising that is driven by results. Regardless of your financial limits, we prioritize providing maximum effect with customized promotions designed to coincide with your company goals.
            </p>
            <p className="mb-6 text-gray-700">
              Infodazz is unique in the field of search engine marketing since it offers comprehensive support and powerful solutions for business promotion. Our customized SEM strategies are designed to yield excellent results while considering your business's constraints, objectives, and aspirations.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {[
                "Keyword Research",
                "Market Analysis",
                "Campaign Management",
                "Competitor Analysis",
                "Ad Campaign Design",
                "Reporting",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                  <h5 className="text-base font-medium">{item}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
            <Image src={Seo2} alt="Digital Marketing" className="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
