import { Link2Icon, MoreVertical, PenBox, Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function WorkspaceOptions({ deleteWorkspace, renameWorkspace }) {
	const [newName, setNewName] = useState("");

	return (
		<div>
			<Dialog>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<MoreVertical className="h-4 w-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DialogTrigger asChild>
							<DropdownMenuItem
								className="flex gap-2"
							>
								<PenBox className="h-4 w-4" />
								Rename
							</DropdownMenuItem>
						</DialogTrigger>
						<DropdownMenuItem
							onClick={() => {
								deleteWorkspace();
							}}
							className="flex gap-2 text-red-500"
						>
							<Trash2 className="h-4 w-4" />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>Rename workspace?</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>

					<div className="flex items-center space-x-2">
						<div className="grid flex-1 gap-2">
							<Input
								placeholder="Workspace Name"
								onChange={(e) => {
									setNewName(e.target.value);
								}}
							/>
						</div>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button
								onClick={() => {
									renameWorkspace(newName);
								}}
							>
								Confirm
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default WorkspaceOptions;
