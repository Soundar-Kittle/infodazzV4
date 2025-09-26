import { SettingsProvider } from "@/context/SettingsContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/context/ModalProvider";
import QueryContainer from "@/context/QueryContainer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      /> */}
      <body>
        <QueryContainer>
          <SettingsProvider>
            <ModalProvider>{children}</ModalProvider>
          </SettingsProvider>
        </QueryContainer>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
