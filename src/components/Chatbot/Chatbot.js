import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./SimpleBotConfig";
import MessageParser from "./SimpleBotMessageParser";
import ActionProvider from "./SimpleBotActionProvider";

export default function ChatbotUI() {
  return <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />;
}