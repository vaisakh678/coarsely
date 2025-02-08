import { getCategories } from "../repository/category.repo";

export const fetchCategory = async () => {
	return getCategories();
};
