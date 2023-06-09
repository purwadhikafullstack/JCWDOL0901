import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";

const CarouselWrapper = ({ children, app }) => {
	return (
		<Carousel
			showThumbs={false}
			showStatus={false}
			centerMode={app.mobileView ? true : false}
			width={app.mobileView ? null : 700}
			swipeable={true}
			autoPlay={true}
			interval={4000}
			emulateTouch={true}
			showArrows={app.mobileView ? false : true}
			infiniteLoop={true}
			swipeScrollTolerance={10}
			preventMovementUntilSwipeScrollTolerance={true}
		>
			{children}
		</Carousel>
	);
};
const PromoCarousel = () => {
	const app = useSelector(state => state.app);
	return (
		<div
			className={app.mobileView ? "z-10 rounded-xl my-8 mx-auto" : "z-10 rounded-xl my-16 mx-auto"}
		>
			<CarouselWrapper app={app}>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/inventory_promotions_1.png" />
				</div>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/global_promotions_1.png" />
				</div>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/global_promotions_2.png" />
				</div>
			</CarouselWrapper>
		</div>
	);
};

export default PromoCarousel;
