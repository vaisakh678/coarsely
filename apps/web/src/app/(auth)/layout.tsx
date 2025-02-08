import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="h-[calc(100%-48px)] w-full flex justify-center items-center">{children}</div>;
};

export default AuthLayout;
