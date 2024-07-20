import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kartoflada - Wielkie Święto Ziemniaka",
  description: "Kto by pomyślał, że nasz region z kartofla słynie? My! Dlatego zapraszamy wszystkich do udziału w Kartofladzie. Już teraz możecie oddać głos na swoją ulubioną ziemniaczaną potrawę, a w czasie wielkiego finału bawić się na rodzinnych animacjach i koncercie Kasi Wilk.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
