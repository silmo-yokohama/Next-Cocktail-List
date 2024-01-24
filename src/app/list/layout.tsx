export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mt-20 md:mt-28">{children}</main>;
}
