"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import image1 from "../../../../public/images/events/attendees.jpg"

const EventCard = ({ title, description, image, link, delay, type }) => {
  const bgColor = type === 'corporate' ? 'bg-corporate-light' : 'bg-personal-light';
  const buttonColor = type === 'corporate' ? 'bg-corporate hover:bg-corporate-dark' : 'bg-personal hover:bg-personal-dark';

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`event-card ${bgColor} p-6 rounded-lg shadow-md`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link}>
        <Button className={buttonColor}>Learn More</Button>
      </Link>
    </div>
  );
};


export default function page() {
   useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
  }, []);

  return (
    <>


      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card data-aos="fade-right" className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <img src="/images/events/attendees.jpg" alt="Corporate Events" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-corporate/30 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">Corporate Events</h2>
              </div>
            </div>
            <CardContent className="p-6 bg-corporate-light">
              <p className="text-gray-700 mb-6">
                Professional events tailored for businesses of all sizes.
              </p>
              <Link href="/event-management/corporate-events">
                <Button className="bg-corporate hover:bg-corporate-dark text-white w-full py-6 font-semibold tracking-wide">
                  Explore Corporate Events
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card data-aos="fade-left" data-aos-delay="200" className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <img src="/images/events/attendees.jpg" alt="Personal Events" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-personal/30 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">Personal Events</h2>
              </div>
            </div>
            <CardContent className="p-6 bg-personal-light">
              <p className="text-gray-700 mb-6">
                Celebrate life's special moments with our personalized services.
              </p>
              <Link href="/event-management/personal-events">
                <Button className="bg-personal hover:bg-personal-dark text-white w-full py-6 font-semibold tracking-wide">
                  Explore Personal Events
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Explore Our Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* List of EventCard components */}
            {[{
              title: "Corporate Conferences",
              description: "Professional event management for businesses.",
              image: "/images/events/attendees.jpg",
              link: "/corporate",
              delay: 200,
              type: "corporate",
            },
            {
              title: "Team Building Events",
              description: "Foster collaboration with team activities.",
              image: "/images/events/attendees.jpg",
              link: "/corporate",
              delay: 400,
              type: "corporate",
            },
            {
              title: "Product Launches",
              description: "Memorable launches for your brand.",
              image: "/images/events/attendees.jpg",
              link: "/corporate",
              delay: 600,
              type: "corporate",
            },
            {
              title: "Weddings",
              description: "Dream weddings planned to perfection.",
              image: "/images/events/attendees.jpg",
              link: "/personal",
              delay: 800,
              type: "personal",
            },
            {
              title: "Birthday Celebrations",
              description: "Unforgettable birthdays crafted just for you.",
              image: "/images/events/attendees.jpg",
              link: "/personal",
              delay: 1000,
              type: "personal",
            },
            {
              title: "Graduation Parties",
              description: "Honor your academic journey with flair.",
              image: "/images/events/attendees.jpg",
              link: "/personal",
              delay: 1200,
              type: "personal",
            }].map(event => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

  {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Why Choose EventElite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              icon: <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>,
              title: "Experience",
              description: "Over 10 years of creating successful events for thousands of satisfied clients."
            }, {
              icon: <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6H6m6 0h6" />
                </svg>
              </div>,
              title: "Customization",
              description: "Each event is uniquely designed to reflect your vision, brand, and objectives."
            }, {
              icon: <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
                </svg>
              </div>,
              title: "Support",
              description: "Dedicated event coordinator available throughout the planning process and on event day."
            }].map((item, idx) => (
              <div className="text-center p-6" key={item.title} data-aos="fade-up" data-aos-delay={200 * (idx + 1)}>
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white text-center" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Next Event?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a consultation and let's create something extraordinary together.</p>
          <Button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </section>

    </>
  )
}
