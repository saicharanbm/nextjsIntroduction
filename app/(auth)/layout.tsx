export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full p-3 bg-gray-400"> This is banner </div>
      {children}
    </>
  );
}
