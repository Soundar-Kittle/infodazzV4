import React from 'react'
import Image from 'next/image';
import TeamImage from "../../../public/images/teamLanding.svg";
import PgMgmnt from '../../../public/images/pgmgmnt.png';

export default function Whyus() {
  return (
    <section className="py-16 px-4 sm:px-10 bg-white">
      <div className="container mx-auto">
      <div className="text-center mb-12">
  {/* Container for 'Why Us' with lines */}
  <div className="flex items-center justify-center mb-2">
    <div className="w-16 h-0.5 bg-green-500 mr-4"></div>
    <p className="text-lg font-bold uppercase tracking-wide text-[#76a527]">Why Us...?</p>
    <div className="w-16 h-0.5 bg-green-500 ml-4"></div>
  </div>

  {/* Main Heading */}
  <h3 className="text-3xl font-bold">
    What Distinguishes <span className="text-green-500">Our Approach</span> From That Of Our Peers?
  </h3>
</div>


        {/* Use flex to make both columns equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <div className="mb-6 w-full">
              <Image
                src={TeamImage}
                alt="teamimage"
                className="w-full h-115 rounded-lg"
              />
            </div>
            <div className="text-center lg:text-left flex-grow">
              <h5 className="text-xl font-semibold mb-4">Dedicated Team</h5>
              <p className="text-gray-600 text-justify">
                Enjoy the coziness of a committed team that is customized for your convenience. Our crew fosters a homey atmosphere and are more than simply experts—they're your traveling companions toward achievement.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="mb-6 w-full">
              <Image
                src={PgMgmnt}
                alt="projectmanagement"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="text-center lg:text-left flex-grow">
              <h5 className="text-xl font-semibold mb-4">Project Management</h5>
              <p className="text-gray-600 text-justify">
                With great insights and commitment to an excellent working nature, we emphasize the valuable goals for incorporating efficiency to simplify success by taking care of deadlines, real-time collaboration, and smooth handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
