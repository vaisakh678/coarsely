import React from "react";
import CourseContent from "./_components/CourseContent";

const Course = () => {
	return (
		<div>
			<div className="h-[300px] bg-gray-100 flex justify-center">
				<div className="bg-lime-400x max-w-[1100px] w-full py-6 grid grid-cols-3">
					<div className="w-auto col-span-2 max-w-[80%]">
						<h1 className="font-bold text-3xl mb-2">Stripe In Practice</h1>
						<p>Build your own online eCommerce store and subscription membership website with Stripe, Firebase, Node & Express</p>
					</div>
					<div className=" h-[500px]x h-full bg-black"></div>
				</div>
			</div>

			<div className="flex justify-center">
				<div className="max-w-[1100px] w-full">
					<CourseContent />
				</div>
			</div>
		</div>
	);
};

export default Course;
