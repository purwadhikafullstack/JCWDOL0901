import React from "react";
import { Splide } from "@splidejs/react-splide";
import SliderSlides from "./SliderSlides";
import axios from "axios";

const fetchCategories = async setCategories => {
	await axios
		.get(`${process.env.REACT_APP_API_BASE_URL}/category/list`)
		.then(result => {
			setCategories(result.data);
		})
		.catch(error => {
			setCategories({ id: 404, name: "Server Error", image: "" });
		});
};

const CategoriesSlider = () => {
	const [categories, setCategories] = React.useState([]);

	React.useEffect(() => {
		fetchCategories(setCategories);
	}, []);

	return (
		categories && (
			<Splide options={{ perPage: 4.5, padding: 5, pagination: false, arrows: false }}>
				<SliderSlides categories={categories} />
			</Splide>
		)
	);
};

export default CategoriesSlider;
