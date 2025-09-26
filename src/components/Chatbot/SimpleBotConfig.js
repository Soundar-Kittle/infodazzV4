import { createChatBotMessage } from "react-chatbot-kit";
import WhatsAppLink from "../widget/WhatsAppLink";
import QuestionButtons from "./QuestionButtons";

const config = {
  botName: "Dazzly",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to Infodazz. Leading service Provider in India",{ delay: 300 }),
      createChatBotMessage(
    "What are you looking for?",
    {
      delay: 900,
      widget: "serviceOptions", // 👈 load services immediately
    }),
  ],
  customComponents: {
    header: () => (
      <div className="bg-[#131f38] text-yellow-400 font-bold px-4 py-2 rounded-t-md">
        Talk With Dazzly
      </div>
    ),
    botAvatar: () => (
      <div className="w-8 h-8 bg-[#131f38] text-yellow-400 rounded-full flex items-center justify-center font-bold text-sm">
        D
      </div>
    ),
  },
  widgets: [
    {
      widgetName: "whatsappLink",
      widgetFunc: () => <WhatsAppLink />
    },
    {
  widgetName: "serviceOptions",
  widgetFunc: (props) => (
    <QuestionButtons
      options={[
        { label: "SEO", answer: "SEO" },
        { label: "Digital Marketing", answer: "Digital Marketing" },
        { label: "Software Development", answer: "Software Development" },
        { label: "Photography & Videography", answer: "photography and videography" },
      ]}
      {...props}
    />
  )
},
    {
      widgetName: "seoQuestions",
      widgetFunc: (props) => (
        <QuestionButtons
          options={[
            { label: "What is included?", answer: "We offer on-page, off-page, audits, reports and local SEO." },
            { label: "How long does it take?", answer: "You can expect results in 3–6 months with monthly updates." }
          ]}
          {...props}
        />
      )
    },
    {
      widgetName: "digitalQuestions",
      widgetFunc: (props) => (
        <QuestionButtons
          options={[
            { label: "Do you do social media marketing?", answer: "Yes, we offer content strategy, posting & engagement." },
            { label: "Do you run ads?", answer: "We manage Google Ads, Meta Ads, and retargeting." }
          ]}
          {...props}
        />
      )
    },
    {
      widgetName: "softwareQuestions",
      widgetFunc: (props) => (
        <QuestionButtons
          options={[
            { label: "Do you build mobile apps?", answer: "Yes, we develop cross-platform apps using Flutter & React Native." },
            { label: "Do you offer ERP systems?", answer: "Absolutely, we create custom ERP for business workflows." }
          ]}
          {...props}
        />
      )
    },
    {
      widgetName: "photographyQuestions",
      widgetFunc: (props) => (
        <QuestionButtons
          options={[
            { label: "Do you photography?", answer: "Yes, we develop phtography using Flutter & React Native." },
            { label: "Do you offer wedding Photoshoot?", answer: "Absolutely, we create custom videography for business workflows." }
          ]}
          {...props}
        />
      )
    }
  ]
};

export default config;
