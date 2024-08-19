"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import WorkspaceOptions from "./WorkspaceOptions";
import { db } from "@/config/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";

function WorkspaceItemList({ workspaceList }) {
	const router = useRouter();
	const OnClickWorkspaceItem = (workspaceId) => {
		router.push("/workspace/" + workspaceId);
	};

	const DeleteWorkspace = async (workspaceId) => {
		await deleteDoc(doc(db, "Workspace", workspaceId + ""));
		router.refresh();
		toast("Workspace Deleted!");
	};

	const RenameWorkspace = async (workspaceId, newWorkspaceName) => {
		const docRef = doc(db, "Workspace", workspaceId + "");
		await updateDoc(docRef, {
			["workspaceName"]: newWorkspaceName,
		});
		router.push("/dashboard");
		toast("Workspace Updated!");
	};

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
			{workspaceList &&
				workspaceList.map((workspace, index) => (
					<div
						key={index}
						className="border shadow-xl rounded-xl
            hover:scale-105 transition-all cursor-pointer"
					>
						<div onClick={() => OnClickWorkspaceItem(workspace.id)}>
							<Image
								src={workspace?.coverImage}
								width={400}
								height={200}
								alt="cover"
								className="h-[150px] object-cover rounded-t-xl"
							/>
						</div>
						<div className="p-4 rounded-b-xl flex justify-between">
							<h2 className="flex gap-2">
								{workspace?.emoji} {workspace.workspaceName}
							</h2>
							<WorkspaceOptions
								deleteWorkspace={() =>
									DeleteWorkspace(workspace.id)
								}
								renameWorkspace={(newWorkspaceName) =>
									RenameWorkspace(
										workspace.id,
										newWorkspaceName
									)
								}
							/>
						</div>
					</div>
				))}
		</div>
	);
}

export default WorkspaceItemList;
