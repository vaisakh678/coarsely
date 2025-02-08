"use client";

import { BookOpen } from "lucide-react";
import React from "react";
import TextField from "../../../components/ui/TextField";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchemaType } from "@repo/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(signUpSchema),
	});

	return (
		<div className="border border-[#dfdfe0] max-w-[400px] w-full h-[500px] rounded-xl px-8 pt-6 pb-4 shadow-sm">
			<div className="w-full flex justify-center flex-col items-center">
				<BookOpen className="mb-8" />
				<h1 className="font-bold text-lg mb-1">Create you&apos;r account</h1>
				<p className="opacity-80 text-sm font-thin">Please fill in the details to get started.</p>
			</div>
			<fieldset disabled={isSubmitting}>
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
						return new Promise((resolve) => {
							setTimeout(() => {
								resolve(null);
							}, 200);
						});
					})}
				>
					<div className="mt-6 space-y-2">
						<TextField {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message} label="Full Name" />
						<TextField {...register("email")} error={!!errors.email} helperText={errors.email?.message} label="Email" />
						<TextField {...register("password")} error={!!errors.password} helperText={errors.password?.message} label="Password" />
					</div>
					<Button className="w-full mt-6" loading={isSubmitting}>
						Continue
					</Button>
				</form>
			</fieldset>
			<div className="mt-4 flex justify-center">
				<p className="text-center text-sm">
					Already have an account? <Link href={"signin"}>Sign In</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
