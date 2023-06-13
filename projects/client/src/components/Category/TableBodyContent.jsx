import React from "react";
import { editCategory } from "./handlers/categoryHandler";
import { useNavigate } from "react-router-dom";

const TableBodyContent = ({ datas, page }) => {
	const navigate = useNavigate();
	const tdClassName = "py-1 h-16 bg-white text-xs text-center";
	return datas.map((item, index) => {
		return (
			<tbody key={index}>
				<tr>
					<td className={tdClassName}>{(page - 1) * 5 + (index + 1)}</td>
					<td className={tdClassName}>
						<img
							src={process.env.REACT_APP_IMAGE_BASE_URL + item.image}
							className="w-[80px] max-h-20 ml-2"
							alt={item.name}
						/>
					</td>
					<td className={tdClassName}>{item.name}</td>
					<td className={tdClassName}>
						<button
							className="bg-green-400 text-white px-4 py-2 rounded-lg"
							onClick={() => editCategory(item, navigate)}
						>
							Edit
						</button>
					</td>
				</tr>
			</tbody>
		);
	});
};

export default TableBodyContent;
