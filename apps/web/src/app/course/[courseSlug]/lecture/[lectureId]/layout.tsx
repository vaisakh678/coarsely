import React from "react";
import { SidebarProvider, SidebarTrigger } from "../../../../../components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";

const LectueLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<SidebarProvider>
			<div className="flex">
				<AppSidebar />
				<div>
					<SidebarTrigger />
					<main>{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
};

export default LectueLayout;
