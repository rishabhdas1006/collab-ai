import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Collab AI",
	description: "Collab with ease",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					unsafe_disableDevelopmentModeWarnings: true,
				},
			}}
		>
			<html lang="en">
				<body className={inter.className}>
					<Toaster />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
