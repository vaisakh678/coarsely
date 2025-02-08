"use client";

import { BookOpen } from "lucide-react";
import React from "react";
import TextField from "../../../components/ui/TextField";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchemaType } from "@repo/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../../utils/api";
import { AxiosError } from "axios";

const SignUpForm = () => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, errors },
	} = useForm<SignUpSchemaType>({
		resolver: zodResolver(signUpSchema),
	});

	const mutation = useMutation({
		mutationKey: ["user"],
		mutationFn: signUp,
		onSuccess: (resp) => {
			console.log("resp", resp);
		},
	});

	let err;

	if (mutation.error) {
		if (mutation.error instanceof AxiosError) {
			err = mutation.error.response?.data.message;
		} else {
			err = "Something went wrong";
		}
	}

	console.log("errrr", mutation.data);

	return (
		<div className="border border-[#dfdfe0] max-w-[400px] w-full h-[500px] rounded-xl px-8 pt-6 pb-4 shadow-sm">
			<div className="w-full flex justify-center flex-col items-center">
				<BookOpen className="mb-8" />
				<h1 className="font-bold text-lg mb-1">Create you&apos;r account</h1>
				<p className="opacity-80 text-sm font-thin">Please fill in the details to get started.</p>
			</div>
			<fieldset disabled={isSubmitting}>
				<form onSubmit={handleSubmit((data) => mutation.mutateAsync(data))}>
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
			<div className="mt-4 flex items-center flex-col">
				<p className="text-center text-sm">
					Already have an account? <Link href={"signin"}>Sign In</Link>
				</p>
				{err ? <p className="text-sm text-red-500 mt-1">{err}</p> : null}
			</div>
		</div>
	);
};

export default SignUpForm;
