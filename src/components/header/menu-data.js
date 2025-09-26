

// const   menu_data = [
//     {
//     id: 1,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Services",
//     sub_menus: [
//       { link: "/digital-marketing", title: "Digital Marketing" }, 
//       { link: "/it-solutions", title: "IT Soutions" },
//       { link: "/animation-vfx", title: "Animation & VFX " },
//       { link: "/event-management", title: "Event Management" },
//       { link: "/photo-and-videography", title: "Photo/Videography " },       
//            ],
//   },

//   {
//     id: 2,
//     mega_menu: false,
//     has_dropdown: true,
//     title: "Group",
//     sub_menus: [
//       { link: "https://kittle.ltd", title: "Kittle Private Limited",target:"_blank" }, 
//       { link: "https://www.internationaljournalssrg.org/", title: "Seventh Sense Research Group ",target:"_blank" },
//       { link: "https://dsjournals.com", title: "Dream Science Foundation",target:"_blank" },
//       { link: "https://kittle.ltd/", title: "KASTER",target:"_blank" },
//       { link: "/", title: "Infodazz"},       
//            ],
//   },
//   {
//     id: 4,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Media",
//     link: "/media",
//   },
//   {
//     id: 5,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Connect Us",
//     link: "/connect-us",
//   },
// ];
// export default menu_data;


// menu-data.js

// menu-data.js
import {
  UserRound,
  PenTool,
  Palette,
  FileText,
  Layout,
  Video,
  Film,
  Search,
  Rocket,
  ShoppingCart,
  Building2,
  Sparkles,
  BarChart3,
  Users,
  Share2,
  Monitor,
  Globe,
  Server,
  Layers,
  Brain,
  FolderOpen,
  BookOpen,
  PhoneCall,
  Settings
} from "lucide-react";

const menu_data = [
  // About Us
  { id: 1, title: "About Us", has_dropdown: false, link: "/about-us" },

  // Branding
  {
    id: 2,
    title: "Branding",
    has_dropdown: true,
    mega_menu: true,
    sections: [
      {
        heading: "Branding Services",
        items: [
          { title: "Logo Design", desc: "Create a unique brand identity", icon: PenTool, link: "/branding/logo-design" },
          { title: "Graphic Design", desc: "Stunning visuals for your brand", icon: Palette, link: "/branding/graphic-design" },
          { title: "Print Designs", desc: "Brochures, flyers & print materials", icon: FileText, link: "/branding/print-designs" },
          { title: "UI/UX Design", desc: "User-friendly interface design", icon: Layout, link: "/branding/ui-ux-design" },
          { title: "2D/3D Animation", desc: "Bring ideas to life with animation", icon: Video, link: "/branding/2d-3d-animation" },
          { title: "Story Telling Videos", desc: "Engaging narratives through video", icon: Film, link: "/branding/story-telling-videos" },
        ],
      },
    ],
  },

  // Digital Marketing
  {
    id: 3,
    title: "Digital Marketing",
    has_dropdown: true,
    mega_menu: true,
    sections: [
      {
        heading: "SEO",
        items: [
          { title: "SaaS SEO / B2B SEO", desc: "Boost search rankings for SaaS", icon: Search, link: "/digital-marketing/saas-seo-b2b-seo" },
          { title: "Programmatic SEO", desc: "Scale pages quickly with automation", icon: Rocket, link: "/digital-marketing/programmatic-seo" },
          { title: "Ecommerce SEO", desc: "Optimized product search visibility", icon: ShoppingCart, link: "/digital-marketing/ecommerce-seo" },
          { title: "Enterprise SEO", desc: "SEO strategies for large businesses", icon: Building2, link: "/digital-marketing/enterprise-seo" },
          { title: "Content Marketing Services", desc: "Content that engages & converts", icon: FileText, link: "/digital-marketing/content-marketing-services" },
          { title: "AI SEO Services", desc: "Leverage AI for search optimization", icon: Sparkles, link: "/digital-marketing/ai-seo-services" },
        ],
      },
      {
        heading: "PPC",
        items: [
          { title: "SaaS PPC / B2B PPC", desc: "Targeted pay-per-click campaigns", icon: BarChart3, link: "/digital-marketing/saas-ppc-b2b-ppc" },
          { title: "SaaS Paid Social", desc: "Drive engagement through social ads", icon: Share2, link: "/digital-marketing/saas-paid-social" },
          { title: "Google Ads", desc: "Reach customers with Google campaigns", icon: Globe, link: "/digital-marketing/google-ads" },
          { title: "Bing Ads", desc: "Advertise across the Bing network", icon: Monitor, link: "/digital-marketing/bing-ads" },
          { title: "LinkedIn Ads", desc: "Professional audience targeting", icon: Users, link: "/digital-marketing/linkedin-ads" },
          { title: "Meta Ads", desc: "Campaigns for Facebook & Instagram", icon: Share2, link: "/digital-marketing/meta-ads" },
        ],
      },
      {
        heading: "Social Media Marketing",
        items: [
          { title: "Social Media Management", desc: "Full-service account management", icon: Settings, link: "/digital-marketing/social-media-management" },
          { title: "Content Creation", desc: "Custom visuals & copywriting", icon: FileText, link: "/digital-marketing/content-creation" },
          { title: "Social Commerce", desc: "Sell directly via social platforms", icon: ShoppingCart, link: "/digital-marketing/social-commerce" },
          { title: "Social Media Strategy", desc: "Plan campaigns for engagement", icon: BarChart3, link: "/digital-marketing/social-media-strategy" },
          { title: "Influencer Marketing", desc: "Collaborate with key influencers", icon: Users, link: "/digital-marketing/influencer-marketing" },
          { title: "Advertising & Contests", desc: "Drive participation & conversions", icon: Sparkles, link: "/digital-marketing/advertising-contests" },
        ],
      },
    ],
  },

  // Web App Development
  {
    id: 4,
    title: "Web App Development",
    has_dropdown: true,
    mega_menu: true,
    sections: [
      {
        heading: "Web Solutions",
        items: [
          { title: "Custom Web Design & Development", desc: "Tailored solutions for your business", icon: Layout, link: "/web-dev/custom" },
          { title: "Ecommerce Web Development", desc: "Sell online with robust platforms", icon: ShoppingCart, link: "/web-dev/ecommerce" },
          { title: "Web Infrastructure & Maintenance", desc: "Keep your site running smoothly", icon: Server, link: "/web-dev/infrastructure" },
          { title: "Content Management System", desc: "Manage content with ease", icon: Layers, link: "/web-dev/cms" },
          { title: "AI & GPT Integration", desc: "Add AI-powered features to your site", icon: Brain, link: "/web-dev/ai-gpt" },
        ],
      },
    ],
  },

  // Portfolio
  { id: 5, title: "Portfolio", has_dropdown: false, link: "/portfolio", icon: FolderOpen },

  // Blog
  { id: 6, title: "Blog", has_dropdown: false, link: "/blog", icon: BookOpen },

  // Contact Us
  { id: 7, title: "Contact Us", has_dropdown: false, link: "/contact-us", icon: PhoneCall },
];

export default menu_data;
