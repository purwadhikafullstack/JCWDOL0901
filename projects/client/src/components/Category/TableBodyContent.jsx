import React from "react";
import { editCategory } from "./handlers/categoryHandler";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";

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
						<div className="flex justify-center gap-2">
							<button
								className="bg-green-400 text-white px-4 py-2 rounded-lg"
								onClick={() => editCategory(item, navigate)}
							>
								Edit
							</button>
							<button
								className="bg-red text-white px-2 py-2 rounded-lg flex justify-center"
								onClick={() => editCategory(item, navigate)}
							>
								<TrashIcon
									className={`text-green-100 flex-shrink-0 h-5 w-5 mx-auto`}
									aria-hidden="true"
								/>
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		);
	});
};

export default TableBodyContent;
