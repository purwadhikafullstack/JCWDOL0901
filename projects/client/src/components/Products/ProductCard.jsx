import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { determinePrice } from "./handlers/ProductsHandler";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const [price, setPrice] = useState({ original: 0, final: 0, promo: false });
	useEffect(() => {
		determinePrice(product, setPrice);
	}, []);
	return (
		<div key={product.name} className="flex flex-col border rounded-lg pb-4">
			<button
				key={product.id}
				onClick={() => navigate("/product/detail/" + product.Inventories[0].id)}
				className="group"
			>
				{product.Inventories[0].promo ? (
					<div className="flex items-center my-auto ml-2">
						<span className="absolute text-sm text-left text-green-100 px-2 py-0.5 rounded ml-2 bg-rose-500 w-fit">
							{price?.promo?.value}
						</span>
					</div>
				) : null}
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>

				<h3 className="mt-4 text-sm font-semibold text-left px-4 truncate" aria-labelledby={product.name}>
					{product.name}
				</h3>
				{product.Inventories[0].promo ? (
					<>
						<p className="mt-1 text-sm font-bold text-green-400 text-left px-4">
							{`Rp ${price.final.toLocaleString("id")}`}
							<span className="text-xs font-light text-gray-300">{` / ${product.unit}`}</span>
						</p>
						<p className="mt-1 text-sm font-medium text-gray-200 text-left px-4 line-through">{`Rp ${price.original.toLocaleString(
							"id",
						)}`}</p>
					</>
				) : (
					<>
						<p className="mt-1 text-sm font-bold text-green-400 text-left px-4">
							{`Rp ${price.final.toLocaleString("id")}`}
							<span className="text-xs font-light text-gray-300">{` / ${product.unit}`}</span>
						</p>
					</>
				)}
			</button>
			<button className="self-end px-2 py-2 text-base font-medium rounded-md group" onClick={() => {}}>
				<PlusIcon
					className="text-green-200 mr-4 flex-shrink-0 h-6 w-6 border-2 border-green-200 rounded-lg group-hover:border-green-400 group-hover:text-green-400"
					aria-hidden="true"
				/>
			</button>
		</div>
	);
};

export default ProductCard;
