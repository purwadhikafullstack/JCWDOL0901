const Mutation = ({ item }) => {
	const changes = item.stock_after - item.stock_before;
	const isNegative = changes < 0;

	const string = isNegative ? changes.toString() : `+${changes}`;
	const className = isNegative ? "text-red font-bold" : "text-green-300 font-bold";

	return <span className={className}>{string}</span>;
};

const Time = ({ item }) => {
	const fullDate = new Date(item.created_at).toString();
	const date = fullDate.split(" ").slice(0, 4).join(" ").replace(" ", ", ");
	const time = fullDate.split(" ").slice(4, 5).join(" ");

	return (
		<span>
			{date} - {time}
		</span>
	);
};

const ProductSalesViewMode = ({ item, index, page, itemPerPage }) => {
	const tdClassName = index % 2 ? "py-4 bg-green-100 text-xs" : "py-4 bg-white text-xs";
	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>{(page - 1) * itemPerPage + (index + 1)}</td>
				<td className={tdClassName + " text-left"}>{item.name}</td>
				<td className={tdClassName}>{item.qty}</td>
			</tr>
		</tbody>
	);
};

export default ProductSalesViewMode;
