import '../../styles/globals.css';
export const metadata = {
  title: 'Fernando Navarro | GIS Web Developer',
  description: 'React, TypeScript, and ArcGIS web applications for utilities and infrastructure.',
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
