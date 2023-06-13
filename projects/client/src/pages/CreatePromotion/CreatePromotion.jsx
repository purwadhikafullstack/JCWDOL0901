import React from "react";
import CreatePromotionMobile from "./CreatePromotionMobile";
import CreatePromotionDesktop from "./CreatePromotionDesktop";
import { useSelector } from "react-redux";

const CreatePromotion = () => {
	const app = useSelector(state => state.app);
	return <div>{app.mobileView ? <CreatePromotionMobile /> : <CreatePromotionDesktop />}</div>;
};

export default CreatePromotion;
