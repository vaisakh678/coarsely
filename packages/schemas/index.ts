import * as z from "zod";

export const signUpSchema = z.object({
	fullName: z.string().min(3, "Full name must be at least 3 characters"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
