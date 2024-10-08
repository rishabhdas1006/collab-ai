'use client'

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

function DcoumentHeader() {

	const base = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ? ("https://" + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) : process.env.NEXT_PUBLIC_BASE_URL;
	const pathname = usePathname();

	const links = base + pathname;
	const copylink = (e) => {
		navigator.clipboard.writeText(links);
		toast("Link copied to clipboard!", {
			description:
				"You can now share this document with anyone",
			action: {
				label: "Okay",
				onClick: () => console.log("Link copied"),
			},
		});
	};

	return (
		<div className="flex justify-between items-center p-3 px-7 shadow-md">
			<div></div>
			<OrganizationSwitcher />
			<div className="flex gap-2">
				<Button onClick={copylink} >Share</Button>
				<UserButton />
			</div>
		</div>
	);
}

export default DcoumentHeader;
