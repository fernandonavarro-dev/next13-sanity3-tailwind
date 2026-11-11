export const metadata = {
  title: 'Fernando Navarro | Portfolio Studio',
  description: 'Edit the Fernando Navarro portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
