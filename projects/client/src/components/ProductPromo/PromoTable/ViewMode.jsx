import Value from "./Value";

const ViewMode = ({ item, index, setEditMode }) => {
	const tdClassName = index % 2 ? "py-4 bg-green-100 text-xs text-center" : "py-4 bg-white text-xs text-center";
	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>
					<img
						src={process.env.REACT_APP_IMAGE_BASE_URL + item.Inventory.Product.image}
						className="w-[80px] mx-auto"
						alt={item.Inventory.Product.name}
					/>
				</td>
				<td className={tdClassName}>{item.Inventory.Product.name}</td>
				<td className={tdClassName}>{item.Promotion.name}</td>
				<td className={tdClassName}>
					<Value value={item.value} promotion_id={item.Promotion.id} />
				</td>
				<td className={tdClassName}>
					<span className="text-green-200">{item.start_at}</span>
				</td>
				<td className={tdClassName}>
					<span className="text-red">{item.expired_at}</span>
				</td>
				<td className={tdClassName}>
					<button className="bg-green-400 text-white px-4 py-2 rounded-lg" onClick={() => setEditMode(index)}>
						Edit
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default ViewMode;
