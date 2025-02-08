import Category from "../components/Category";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<div className="min-h-svh px-16">
				<div className="bg-blue-300x pt-14 pb-32 max-w-[600px]">
					<h1 className="text-4xl  mb-3">Expand Your Knowledge with our coureses</h1>
					<p className="text-sm opacity-70">
						Discover a world of learning with our expertly crafted courses. Learn from industry professionals and take your skills to the
						next level.
					</p>
				</div>
				<Category />
				<div className="grid grid-cols-4 gap-5">
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</div>
			</div>
			<Footer />
		</>
	);
}
