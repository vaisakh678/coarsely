export interface AppResponse<T = undefined> {
	data: T;
	message?: string;
	error?: string;
}
