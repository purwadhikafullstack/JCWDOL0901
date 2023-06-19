import { useNavigate } from "react-router-dom";
import { LogoutIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/outline";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	return (
		<div key={product.name} className="flex flex-col border rounded-lg pb-4">
			<button key={product.id} onClick={() => navigate("/")} className="group">
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
				<p className="mt-1 text-lg font-medium text-gray-900">{`Rp ${product.price.toLocaleString("id")}`}</p>
			</button>
			<button
				className="self-end px-2 py-2 text-base font-medium hover:bg-green-100/20 rounded-md"
				onClick={() => {}}
			>
				<PlusIcon
					className="text-green-200 mr-4 flex-shrink-0 h-6 w-6 border-2 border-green-200 rounded-lg"
					aria-hidden="true"
				/>
			</button>
		</div>
	);
};

export default ProductCard;
