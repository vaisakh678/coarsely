import React from "react";

const CourseCard = () => {
	return (
		<div className="w-full max-w-[300px] min-h-[300px] pb-5 border border-[#d1d2e0] rounded-xl overflow-hidden">
			<div className="w-full h-[200px] bg-gray-300" />
			<div className="p-5 flex flex-col gap-1">
				<h1 className="text-base font-bold">ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</h1>
				<p className="text-sm opacity-70">Author 1, Author 2</p>
				<div className="gap-3 flex items-center">
					<span className="flex">4.5</span>
					<span className="flex">(55,101)</span>
				</div>
				<div className="font-semibold">$299</div>
			</div>
		</div>
	);
};

export default CourseCard;
