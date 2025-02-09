"use client";

import React from "react";

const data = [
	{
		title: "Module 1: Introduction to Generative AI",
		lessons: [
			{ title: "Lesson 1: What is Generative AI?" },
			{ title: "Lesson 2: The Evolution of AI and Machine Learning" },
			{ title: "Lesson 3: Key Concepts in Generative AI" },
			{ title: "Lesson 4: Ethical Considerations in AI" },
			{ title: "Lesson 5: Real-World Applications of Generative AI" },
		],
	},
	{
		title: "Module 2: Generative AI Tools",
		lessons: [
			{ title: "Lesson 1: Overview of Generative AI Tools" },
			{ title: "Lesson 2: Working with Large Language Models (LLMs)" },
			{ title: "Lesson 3: Image Generation with AI" },
			{ title: "Lesson 4: AI-Powered Code Generation" },
			{ title: "Lesson 5: AI in Music and Video Creation" },
			{ title: "Lesson 6: Hands-on with Generative AI Platforms" },
		],
	},
	{
		title: "Module 3: Building with Generative AI",
		lessons: [
			{ title: "Lesson 1: Introduction to AI Model Training" },
			{ title: "Lesson 2: Fine-Tuning Pretrained AI Models" },
			{ title: "Lesson 3: Data Preparation for AI Training" },
			{ title: "Lesson 4: Deploying AI Models in Production" },
			{ title: "Lesson 5: Optimizing AI Model Performance" },
		],
	},
	{
		title: "Module 4: The Future of Generative AI",
		lessons: [
			{ title: "Lesson 1: Trends in Generative AI" },
			{ title: "Lesson 2: AI Regulations and Compliance" },
			{ title: "Lesson 3: AI's Role in Society and the Workforce" },
			{ title: "Lesson 4: The Next Frontier of AI Research" },
			{ title: "Lesson 5: How to Stay Updated in AI" },
		],
	},
];

interface Lesson {
	title: string;
}

interface CourseModuleProps {
	title?: string;
	lessons?: Lesson[];
}

const CourseModule: React.FC<CourseModuleProps> = ({ title, lessons }) => {
	const [toggle, setToggle] = React.useState(false);

	return (
		<div className="border rounded-md">
			<button
				className=" w-full h-12 px-3 flex items-center border-b last:border-b-0"
				onClick={() => {
					document.startViewTransition(() => {
						setToggle(!toggle);
					});
				}}
				//
			>
				<div className="flex items-center gap-2">
					<span>{title}</span>
				</div>
			</button>
			{toggle ? (
				<>
					{lessons?.map((lesson, idx) => (
						<div key={idx} className="h-12 px-3 flex items-center border-b last:border-b-0" style={{ viewTransitionName: "test" }}>
							<div className="flex items-center gap-2">
								<div className="rounded-full bg-muted size-6 flex items-center justify-center text-sm ">{idx + 1}</div>
								<span>{lesson.title}</span>
							</div>
						</div>
					))}
				</>
			) : null}
		</div>
	);
};

const CourseContent = () => {
	return (
		<div className="border rounded-lg px-4 py-6 mt-10 max-w-[800px]">
			<h1 className="font-medium text-xl mb-4">Course content</h1>
			<div className="flex flex-col gap-2">
				{data.map((module, idx) => (
					<CourseModule key={idx} title={module.title} lessons={module.lessons} />
				))}
			</div>
		</div>
	);
};

export default CourseContent;
