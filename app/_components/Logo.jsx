import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href={"/dashboard"} className="flex items-center gap-2">
			<Image src={"/logo.png"} alt="logo" width={120} height={150} />
		</Link>
	);
}

export default Logo;
