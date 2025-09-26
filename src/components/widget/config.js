// import WhatsAppLink from "./Widgets/WhatsAppLink";

// const config = {
//   botName: "SupportBot",
//   initialMessages: [createChatBotMessage("Hi! How can I help you?")],
//   widgets: [
//     {
//       widgetName: "whatsappLink",
//       widgetFunc: () => <WhatsAppLink />,
//     },
//   ],
// };

import WhatsAppLink from "./Widgets/WhatsAppLink";
import ServiceOptions from "./ServiceOptions";

const config = {
  botName: "SupportBot",
  initialMessages: [
    createChatBotMessage("Hi! What service are you interested in?", {
      widget: "serviceOptions"
  ],
  widgets: [
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
    },
    {
      widgetName: "whatsappLink",
      widgetFunc: () => <WhatsAppLink />,
    },
  ],
};
