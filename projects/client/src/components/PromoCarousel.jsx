import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";

const CarouselWrapper = ({ children, app }) => {
	return (
		<>
			<div className="block sm:hidden">
				<Carousel
					showThumbs={false}
					showStatus={false}
					centerMode={true}
					width={null}
					swipeable={true}
					autoPlay={true}
					interval={4000}
					emulateTouch={true}
					showArrows={false}
					infiniteLoop={true}
					swipeScrollTolerance={10}
					preventMovementUntilSwipeScrollTolerance={false}
					stopOnHover={false}
				>
					{children}
				</Carousel>
			</div>
			<div className="hidden sm:block">
				<Carousel
					showThumbs={false}
					showStatus={false}
					centerMode={false}
					width={700}
					swipeable={true}
					autoPlay={true}
					interval={4000}
					emulateTouch={true}
					showArrows={true}
					infiniteLoop={true}
					swipeScrollTolerance={10}
					preventMovementUntilSwipeScrollTolerance={false}
					stopOnHover={false}
				>
					{children}
				</Carousel>
			</div>
		</>
	);
};
const PromoCarousel = () => {
	const app = useSelector((state) => state.app);
	return (
		<div className="z-10 rounded-xl my-8 mx-auto sm:my-16">
			<CarouselWrapper app={app}>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/inventory_promotions_1.png" alt="promo_1" />
				</div>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/global_promotions_1.png" alt="promo_2" />
				</div>
				<div className="rounded-xl mx-3">
					<img className="rounded-xl" src="/assets/promotions/global_promotions_2.png" alt="promo_3" />
				</div>
			</CarouselWrapper>
		</div>
	);
};

export default PromoCarousel;
