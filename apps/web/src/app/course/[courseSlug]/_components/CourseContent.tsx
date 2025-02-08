"use client";

import React, { useState } from "react";

const SectionAccordionItem = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="select-none">
			<div
				onClick={() => {
					// document.startViewTransition(() => {
					setToggle(!toggle);
					// });
				}}
				className="cursor-pointer"
			>
				<div className="h-12 px-4 flex items-center bg-gray-200">
					<div>25+ Generative AI Tools to 10x Business</div>
				</div>
			</div>
			{toggle && (
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid at aut assumenda qui, sed doloribus nulla non. Dolor blanditiis
					eligendi quasi assumenda dolorem dolores quia! Debitis, fuga. Saepe, sed iure.
				</div>
			)}
		</div>
	);
};

const CourseContent = () => {
	return (
		<div className="my-8">
			<h1 className="font-medium text-2xl mb-4">Course content</h1>
			<div className="border border-black">
				<SectionAccordionItem />
				<SectionAccordionItem />
				<SectionAccordionItem />
				<SectionAccordionItem />
			</div>
		</div>
	);
};

export default CourseContent;
