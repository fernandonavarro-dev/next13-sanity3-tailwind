import '../../styles/globals.css';
export const metadata = {
  title: 'Fernando Navarro | Portfolio',
  description: 'Portfolio of Fernando Navarro, full-stack and GIS developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
