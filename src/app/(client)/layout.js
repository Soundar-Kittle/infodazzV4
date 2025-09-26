  import Header from "@/components/header/Header";
  import Footer from "@/components/footer/Footer";
  import { generateDynamicMeta } from "@/lib/seo/generateDynamicMeta";
  import ScrollToTopButton from "@/components/Scrolltotop/ScrollToTopButton";
  import ChatbotToggle from "@/components/Chatbot/ChatbotToggle";
  import "./globals.css";

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <ChatbotToggle/>
          <ScrollToTopButton/>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    );
  }

  export const generateMetadata = async () => {
    return await generateDynamicMeta("digital-marketing");
  };
