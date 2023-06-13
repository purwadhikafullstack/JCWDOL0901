const ViewMode = ({ item, index, setEditMode }) => {
	const tdClassName = "py-4 bg-white text-xs text-center";
	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>{index + 1}</td>
				<td className={tdClassName}>
					<img src={process.env.REACT_APP_IMAGE_BASE_URL + item.image} className="w-[50px] ml-4" />
				</td>
				<td className={tdClassName}>{item.name}</td>
				<td className={tdClassName}>
					<button
						className="bg-green-400 text-white px-4 py-2 rounded-lg"
						onClick={() => setEditMode(index)}
					>
						Edit
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default ViewMode;
