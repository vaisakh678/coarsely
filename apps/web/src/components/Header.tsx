"use client";

import React from "react";
import { BookOpen, CircleUserRound } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../hooks/AuthProvider";
import { useParams } from "next/navigation";

const Header = () => {
	const { isLoggedIn } = useAuth();
	const params = useParams();
	if (params.lectureId) {
		return null;
	}

	return (
		<div className="h-12 px-10 bg-black flex justify-between items-center text-white">
			<div className="flex items-center gap-3">
				<Link href="/" className="flex items-center gap-3">
					<BookOpen />
					<h1 className="font-semibold text-lg">Coursely</h1>
				</Link>
			</div>
			<div className="flex items-center gap-3">
				{isLoggedIn ? (
					<CircleUserRound />
				) : (
					<>
						<Link className="text-sm font-medium" href="signin">
							Sign In
						</Link>
						<Link className="text-sm font-medium" href="signup">
							Sign Up
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
