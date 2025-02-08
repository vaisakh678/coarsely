import React from "react";
import { BookOpen } from "lucide-react";

const Header = () => {
	return (
		<div className="h-12 px-10 bg-black flex justify-between items-center text-white">
			<div className="flex items-center gap-3">
				<BookOpen />
				<h1 className="font-semibold text-lg">Coursely</h1>
			</div>
			<div>
				<button className="">Sign In</button>
			</div>
		</div>
	);
};

export default Header;
