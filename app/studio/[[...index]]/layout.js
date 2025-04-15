export const metadata = {
  title: 'Rent Press Studio',
  description: 'Manage your Rent Press blog content',
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 