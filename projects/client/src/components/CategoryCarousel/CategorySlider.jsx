import React from "react";
import SliderSlides from "./SliderSlides";
import axios from "axios";

const fetchCategories = async (setCategories) => {
	await axios
		.get(`${process.env.REACT_APP_API_BASE_URL}/category/list`)
		.then((result) => {
			setCategories([
				{ id: "", name: "All Category", image: "uploads/category/category_0.png" },
				...result.data.rows,
			]);
		})
		.catch((error) => {
			setCategories({ id: 404, name: "Server Error", image: "" });
		});
};

const CategoriesSlider = () => {
	const [categories, setCategories] = React.useState([]);

	React.useEffect(() => {
		fetchCategories(setCategories);
	}, []);

	return categories && <SliderSlides categories={categories} />;
};

export default CategoriesSlider;
