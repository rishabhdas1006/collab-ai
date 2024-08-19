import { Link2Icon, MoreVertical, PenBox, Trash2 } from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

function DocumentOptions({ doc, deleteDocument }) {
	const base = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
		? "https://" + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
		: process.env.NEXT_PUBLIC_BASE_URL;
	const pathname = usePathname();

	const links = base + pathname;
	const copylink = (e) => {
		navigator.clipboard.writeText(links);
		toast("Link copied to clipboard!", {
			description: "You can now share this document with anyone",
			action: {
				label: "Okay",
				onClick: () => console.log("Link copied"),
			},
		});
	};

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<MoreVertical className="h-4 w-4" />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem className="flex gap-2" onClick={copylink}>
						<Link2Icon className="h-4 w-4" /> Share Link
					</DropdownMenuItem>
					<DropdownMenuItem className="flex gap-2">
						<PenBox className="h-4 w-4" />
						Rename
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => deleteDocument(doc?.id)}
						className="flex gap-2 text-red-500"
					>
						<Trash2 className="h-4 w-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default DocumentOptions;
