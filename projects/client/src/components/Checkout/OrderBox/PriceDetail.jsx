import React from "react";
import { getDisplayPrice } from "../handlers/checkoutHandler";

const Promo = ({ item, isBOGO }) => {
	const text = React.useRef("");

	if (isBOGO) {
		text.current = "(Buy One Get One)";
	} else {
		const promo = item.Inventory.promo;

		if (promo.Promotion.id === 2) {
			text.current = `Potongan Rp ${promo.value.toLocaleString("id")}`;
		} else if (promo.Promotion.id === 3) {
			text.current = `${promo.value}% Off`;
		}
	}

	return <span className="text-sm text-xs mt-auto text-left text-[#f47229] ml-3">{text.current}</span>;
};

const PriceWithPromo = ({ item }) => {
	const price = getDisplayPrice(item);

	return (
		<div className="flex flex-row">
			<span className="text-sm text-left">Rp {price.final.toLocaleString("id")}</span>
			{!price.isBOGO && (
				<span className="text-sm text-xs mt-auto text-left line-through text-gray-200 ml-3">
					Rp {price.original.toLocaleString("id")}
				</span>
			)}
			<Promo item={item} isBOGO={price.isBOGO} />
		</div>
	);
};

const PriceDetail = ({ item }) => {
	return item.Inventory.promo ? (
		<PriceWithPromo item={item} />
	) : (
		<span className="text-sm text-left">Rp {item.Inventory.Product.price.toLocaleString("id")}</span>
	);
};

export default PriceDetail;
