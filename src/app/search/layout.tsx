import SubHeader from "@/components/organisms/header/SubHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mt-[80px]">{children}</main>;
}
