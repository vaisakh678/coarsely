import { SignInSchemaType, SignUpSchemaType } from "@repo/schemas";
import httpPublic from "./httpPublic";
import { AppResponse } from "./types";
import { Token } from "@repo/types";

export const signUp = async (data: SignUpSchemaType): Promise<AppResponse> => {
	const res = await httpPublic.post("/api/v1/user/signup", data);
	return res.data;
};

export const signIn = async (data: SignInSchemaType): Promise<AppResponse<Token>> => {
	const res = await httpPublic.post("/api/v1/user/signin", data);
	return res.data;
};
