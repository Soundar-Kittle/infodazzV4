// import Image from 'next/image'

// const contactLinks = [
//   {
//     icon: '/media/instagramLogo.png',
//     label: 'Instagram',
//     url: 'https://www.instagram.com/infodazzphotography/',
//   },
//   {
//     icon: '/media/youtubeIcon.png',
//     label: 'YouTube',
//     url: 'https://www.youtube.com/@Infodazz',
//   },
//   {
//     icon: '/media/facebookLogo.png',
//     label: 'Facebook',
//     url: 'https://www.facebook.com/infodazz',
//   },
//   {
//     icon: '/media/logo-black.png',
//     label: 'Twitter',
//     url: 'https://x.com/infodazzz',
//   },
//   {
//     icon: '/media/linkedinLogo.png',
//     label: 'LinkedIn',
//     url: 'https://www.linkedin.com/company/infodazz/',
//   },
// ]

// export default function MediaPage() {
//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading and Description */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Infodazz Media & Moments
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//             Explore our media footprints across platforms. From photography to behind-the-scenes moments, we capture the vibrant pulse of our work and community.
//           </p>
//         </div>

//         {/* Media Image Banner */}
//         <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md mb-10">
//           <Image
//             src="/images/contactus.png" // Replace with your media image
//             alt="Infodazz Media Banner"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Social Links */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
//           {contactLinks.map((media) => (
//             <a
//               key={media.label}
//               href={media.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition"
//             >
//               <Image src={media.icon} alt={media.label} width={32} height={32} />
//               <span className="text-sm text-gray-700 font-medium">{media.label}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Image from 'next/image'
import Link from 'next/link';
import Ctasectionbtm from '@/components/cta/landingpage/Ctasectionbtm';

export default function MediaPage() {
  return (
    <>
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
  Elevating Brands Globally through
  <br />
  <span className="text-pink-600">Digital Platforms & Innovation</span>
</h1>

<p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
  At Infodazz, we empower brands to thrive in the digital age — blending cutting-edge web development, scalable software, immersive media, and precision marketing. From local roots to global impact, we build platforms that perform, engage, and grow your presence worldwide.
</p>

  <br />
  <br />
  <h3 className="mt-10 text-lg lg:text-xl font-bold text-gray-800 uppercase tracking-wider">
  Our <span className="text-pink-600">Media Presence</span>
</h3>
     {/* Media Icons Below Buttons */}
     <div className="mt-10 flex justify-center lg:justify-start gap-5 flex-wrap">
            {[
              {
                src: '/media/instagramLogo.png',
                alt: 'Instagram',
                href: 'https://instagram.com/infodazzphotography',
              },
              {
                src: '/media/youtubeIcon.png',
                alt: 'YouTube',
                href: 'https://youtube.com/@Infodazz',
              },
              {
                src: '/media/facebookLogo.png',
                alt: 'Facebook',
                href: 'https://facebook.com/infodazz',
              },
              {
                src: '/media/logo-black.png',
                alt: 'Twitter',
                href: 'https://x.com/infodazzz',
              },
              {
                src: '/media/linkedinLogo.png',
                alt: 'LinkedIn',
                href: 'https://linkedin.com/company/infodazz',
              },
            ].map(({ src, alt, href }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
              >
                <Image src={src} alt={alt} width={20} height={20} />
              </Link>
            ))}
          </div>


        </div>

        {/* Right Illustration */}
        <div className="flex-1">
          <Image
            src="/images/hero-Illustration.png"
            alt="Digital Media Engagement"
            width={600}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
    <Ctasectionbtm/>
    </>
  )
}
