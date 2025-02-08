"use client";

import React, { useEffect, useState } from "react";

type SubCategory = Omit<ICategory, "subCategories">;
interface ICategory {
	id: number;
	name: string;
	slug: string;
	subCategories: SubCategory[];
}

const _categories: ICategory[] = [
	{
		id: 1,
		name: "Data Science",
		slug: "data-science",
		subCategories: [
			{
				id: 1,
				name: "Python",
				slug: "python",
			},
			{
				id: 2,
				name: "NLP",
				slug: "nlp",
			},
		],
	},
	{
		id: 2,
		name: "It Certifications",
		slug: "it-certifications",
		subCategories: [
			{
				id: 1,
				name: "AWS",
				slug: "aws",
			},
			{
				id: 2,
				name: "Azure",
				slug: "azure",
			},
		],
	},
	{
		id: 3,
		name: "Leader Ship",
		slug: "leader-ship",
		subCategories: [
			{
				id: 1,
				name: "Management",
				slug: "management",
			},
			{
				id: 2,
				name: "Communication",
				slug: "communication",
			},
		],
	},
];

const Category = () => {
	const [categories, setCategories] = useState<ICategory[]>();
	const [subCategories, setSubCategories] = useState<SubCategory[]>();

	const [selectedCategory, setSelectedCategory] = useState<ICategory>();
	const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();

	useEffect(() => {
		setCategories(_categories);
		setSubCategories(_categories?.[0]?.subCategories);

		setSelectedCategory(_categories?.[0]);
		setSelectedSubCategory(_categories?.[0]?.subCategories?.[0]);
	}, []);

	return (
		<div className="mb-5">
			<div className="py-5">
				<div className="border-b gap-5 flex">
					{categories?.map((category, idx) => (
						<button
							key={idx}
							className={`text-lg -mb-px border-b-2 ${category.id === selectedCategory?.id ? "border-black" : "border-transparent"}`}
							onClick={() => {
								setSelectedCategory(category);
								setSubCategories(category.subCategories);
								setSelectedSubCategory(category.subCategories?.[0]);
							}}
						>
							{category.name}
						</button>
					))}
				</div>
			</div>
			<div>
				{
					<div className="flex gap-3">
						{subCategories?.map((subCategory, idx) => (
							<button
								key={idx}
								className={`px-3 py-1 rounded-full ${subCategory.id === selectedSubCategory?.id ? "bg-black text-white" : "bg-gray-200"}`}
								onClick={() => {
									setSelectedSubCategory(subCategory);
								}}
							>
								<h1 className="opacity-80">{subCategory.name}</h1>
							</button>
						))}
					</div>
				}
			</div>
		</div>
	);
};

export default Category;
