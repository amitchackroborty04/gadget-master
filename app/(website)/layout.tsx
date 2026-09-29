import "../globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <div className="min-h-full flex flex-col bg-[#131313]">{children}</div>
    </div>
  );
}
