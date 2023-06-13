import React from "react";
import { patchInventoryPromotions, getPromotionsType } from "./handlers/productPromoHandler";

const PromotionEdit = ({ selected, onChange }) => {
	const [types, setTypes] = React.useState([]);

	React.useEffect(() => {
		getPromotionsType()
			.then(result => setTypes(result.data))
			.catch(error => alert(error));
	}, []);

	return (
		types && (
			<select name="promotion_id" className="bg-gray-100 rounded p-1" onChange={onChange}>
				{types.map((type, index) => {
					return (
						<option value={type.id} key={index}>
							{type.name}
						</option>
					);
				})}
			</select>
		)
	);
};

const EditModeButton = ({ setEditMode, editValue }) => {
	const handleSave = () => {
		patchInventoryPromotions(localStorage.getItem("token"), editValue)
			.then(result => setEditMode(-1))
			.catch(error => alert("please try again"))
			.finally(() => window.location.reload(false));
	};
	return (
		<td className="py-4 bg-white text-xs text-white text-center">
			<button className="bg-green-500 px-3 py-1.5 rounded" onClick={handleSave}>
				Save
			</button>
			<button className="bg-red px-3 py-1.5 rounded ml-2" onClick={() => setEditMode(-1)}>
				Cancel
			</button>
		</td>
	);
};

const EditMode = ({ item, index, setEditMode }) => {
	const [editValue, setEditValue] = React.useState({
		id: item.id,
		inventory_id: item.inventory_id,
		promotion_id: item.promotion_id,
		value: item.value,
		start_at: item.start_at,
		expired_at: item.expired_at,
	});

	const tdClassName = "py-4 bg-white text-xs text-center";

	const handleChange = event =>
		setEditValue({ ...editValue, [event.target.name]: event.target.value });

	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>
					<img src={item.Inventory.Product.image} className="w-[80px] ml-4" />
				</td>
				<td className={tdClassName}>{item.Inventory.Product.name}</td>
				<td className={tdClassName}>
					<PromotionEdit selected={item.promotion_id} name="promotion_id" onChange={handleChange} />
				</td>
				<td className={tdClassName}>
					<input
						className="text-center bg-gray-100 rounded p-1"
						name="value"
						type="number"
						defaultValue={item.value}
						onChange={handleChange}
					/>
				</td>
				<td className={tdClassName}>
					<input type="date" name="start_at" defaultValue={item.start_at} onChange={handleChange} />
				</td>
				<td className={tdClassName}>
					<input
						type="date"
						name="expired_at"
						defaultValue={item.expired_at}
						onChange={handleChange}
					/>
				</td>
				<EditModeButton setEditMode={setEditMode} editValue={editValue} />
			</tr>
		</tbody>
	);
};

export default EditMode;
