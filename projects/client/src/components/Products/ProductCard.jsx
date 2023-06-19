const ProductCard = ({ product }) => {
	return (
		<div key={product.name} className="border rounded-lg">
			Card {product.name}
		</div>
	);
};

export default ProductCard;
