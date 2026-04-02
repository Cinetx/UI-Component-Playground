import type { Metadata } from "next";
import "normalize.css";
import "./globals.css";
import styles from "./layout.module.scss";
import Navigation from "@/components/navigation/Navigation";
import StoreProvider from "./StoreProvider";
import DataLoader from "@/lib/providers/DataLoader";
export const metadata: Metadata = {
  title: "UI Component Playground",
  description: "React UI components playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <DataLoader />
          <div className={styles.container}>
            <main className={styles.main}>
              <Navigation />
              {children}
            </main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
