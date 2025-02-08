"use client";

import { BookOpen } from "lucide-react";
import React from "react";
import TextField from "../../../components/ui/TextField";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { signInSchema, SignInSchemaType } from "@repo/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../utils/api";
import { AxiosError } from "axios";
import { useAuth } from "../../../hooks/AuthProvider";
import { useRouter } from "next/navigation";

const SignInForm = () => {
	const { setToken } = useAuth();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
		mode: "onBlur",
	});

	const mutation = useMutation({
		mutationKey: ["user"],
		mutationFn: signIn,
		onSuccess: (resp) => {
			const accessToken = resp?.data?.accessToken;
			const refreshToken = resp?.data?.refreshToken;
			setToken({ accessToken, refreshToken });
			router.push("/");
		},
	});

	let err;
	if (mutation.error) {
		if (mutation.error instanceof AxiosError) {
			err = mutation.error.response?.data.error;
		} else {
			err = "Something went wrong";
		}
	}

	return (
		<div className="border border-[#dfdfe0] max-w-[400px] w-full  rounded-xl px-8 pt-6 pb-10 shadow-sm">
			<div className="w-full flex justify-center flex-col items-center">
				<BookOpen className="mb-8" />
				<h1 className="font-bold text-lg mb-1">Sign in to Coursely</h1>
				<p className="opacity-80 text-sm font-thin">Welcome back! Please sign in to continue</p>
			</div>
			<fieldset disabled={isSubmitting}>
				<form onSubmit={handleSubmit((data) => mutation.mutateAsync(data))}>
					<div className="mt-6 space-y-2">
						<TextField label="Email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
						<TextField
							label="Password"
							type="password"
							{...register("password")}
							error={!!errors.password}
							helperText={errors.password?.message}
						/>
					</div>
					<Button className="w-full mt-6 relative" loading={isSubmitting}>
						<span>Continue</span>
					</Button>
				</form>
			</fieldset>
			<div className="mt-4 flex items-center flex-col">
				<p className="text-center text-sm">
					Don&apos;t have an account? <Link href={"signup"}>Sign Up</Link>
				</p>
				{err ? <p className="text-sm text-red-500 mt-1">{err}</p> : null}
			</div>
		</div>
	);
};

export default SignInForm;
