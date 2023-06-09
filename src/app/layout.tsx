import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-gray-900 text-gray-50 min-h-screen flex flex-col items-center justify-center">
				{children}
			</body>
		</html>
	);
}
