const ProductCard = ({ product }) => {
	return (
		<div key={product.name} className="border rounded-lg">
			<div>{product.name}</div>
			<div>{`Rp ${product.price.toLocaleString("id")}`}</div>
		</div>
	);
};

export default ProductCard;
