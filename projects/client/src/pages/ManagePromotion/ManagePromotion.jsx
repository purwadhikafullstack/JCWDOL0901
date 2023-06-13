import React from "react";
import ManagePromotionMobile from "./ManagePromotionMobile";
import ManagePromotionDesktop from "./ManagePromotionDesktop";
import { useSelector } from "react-redux";

const ProductPromotion = () => {
	const app = useSelector(state => state.app);
	return <div>{app.mobileView ? <ManagePromotionMobile /> : <ManagePromotionDesktop />}</div>;
};

export default ProductPromotion;
