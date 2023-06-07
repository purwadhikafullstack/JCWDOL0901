import React from "react";
import { Carousel } from "react-responsive-carousel";

const PromoCarousel = () => {
	return (
		<div className="z-10 rounded-xl my-8">
			<Carousel
				showThumbs={false}
				showStatus={false}
				centerMode={true}
				swipeable={true}
				emulateTouch={true}
				showArrows={false}
				infiniteLoop={true}
				swipeScrollTolerance={10}
				preventMovementUntilSwipeScrollTolerance={true}
			>
				<div className="rounded-xl mx-3">
					<img
						className="rounded-xl"
						src="/assets/promotions/inventory_promotions_1.png"
					/>
				</div>
				<div className="rounded-xl mx-3">
					<img
						className="rounded-xl"
						src="/assets/promotions/global_promotions_1.png"
					/>
				</div>
				<div className="rounded-xl mx-3">
					<img
						className="rounded-xl"
						src="/assets/promotions/global_promotions_2.png"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default PromoCarousel;
