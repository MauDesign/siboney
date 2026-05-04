import { Playfair_Display, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const mistral = localFont({
  src: "../../public/fonts/mistral.ttf",
  variable: "--font-mistral",
});


export const metadata = {
  title: "Mis 15 Años - Invitación",
  description: "Estás cordialmente invitado a celebrar mis 15 años.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} ${mistral.variable} h-full antialiased`}
    >
      <body className="min-h-full font-[family-name:var(--font-montserrat)]">{children}</body>
    </html>
  );
}

