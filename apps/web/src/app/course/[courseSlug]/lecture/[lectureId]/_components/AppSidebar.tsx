import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Progress } from "../../../../../../components/ui/progress";
import { Library } from "lucide-react";

function AppSidebar() {
	return (
		<Sidebar className="w-[350px]x border-r" side="left" variant="inset">
			<SidebarHeader className="bg-blue-200x border-b py-4 px-6">
				<div className="flex items-center gap-2">
					<Library className="size-5" />
					<h3>Course Library</h3>
				</div>
				<div className="text-black">
					<h1 className="text-xl font-semibold">Zero to full stack hero</h1>
					<div className="mt-3">
						<div className="flex justify-between mb-1 items-center text-sm">
							<p>Course progress</p>
							<span>29%</span>
						</div>
						<Progress value={29} />
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent className="px-6">
				{Array(10)
					.fill(0)
					.map((_, idx) => (
						<div key={idx} className="p-4 bg-blue-400 m-1">
							hello
						</div>
					))}
				{/* <SidebarGroup /> */}
				{/* <SidebarGroup /> */}
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}

export default AppSidebar;
