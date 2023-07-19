const ViewMode = ({ item, index, setEditMode }) => {
	const tdClassName = index % 2 ? "py-4 bg-green-100 text-xs text-center" : "py-4 bg-white text-xs text-center";

	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>
					<img
						src={process.env.REACT_APP_IMAGE_BASE_URL + item.Product.image}
						className="max-w-[80px] mx-auto"
					/>
				</td>
				<td className={tdClassName}>{item.name}</td>
				<td className={tdClassName}>{item.stock}</td>

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
