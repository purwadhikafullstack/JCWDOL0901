import React from "react";
import { editCategory, showDeleteAlert, deleteCategoryHandler } from "./handlers/categoryHandler";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import DeleteAlert from "../DeleteAlert";
import { useState } from "react";

const TableBodyContent = ({ datas, page, itemPerPage }) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [categoryId, setCategoryId] = useState(0);
	const [categoryName, setCategoryName] = useState(0);
	const tdClassName = "py-1 h-16 text-xs text-center px-4";
	return (
		<>
			{alert ? (
				<DeleteAlert
					title={`Delete Category "${categoryName}"`}
					desc="Are you sure you want to delete this category? You can only delete this category if there are no products under this category. This category will be permanently removed from the server forever. This action cannot be undone."
					buttonName="Delete Category"
					open={open}
					setOpen={setOpen}
					categoryId={categoryId}
					handler={deleteCategoryHandler}
				/>
			) : null}
			{datas.map((item, index) => {
				return (
					<tbody key={index} className="odd:bg-green-100/50 even:bg-white">
						<tr>
							<td className={tdClassName}>{(page - 1) * itemPerPage + (index + 1)}</td>
							<td className={tdClassName}>
								<div className="flex justify-center">
									<img
										src={process.env.REACT_APP_IMAGE_BASE_URL + item.image}
										className="w-[80px] max-h-20"
										alt={item.name}
									/>
								</div>
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
									<div>{alert}</div>
									<button
										className="bg-red text-white px-2 py-2 rounded-lg flex justify-center"
										onClick={() => showDeleteAlert(item, setOpen, setCategoryId, setCategoryName)}
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
			})}
		</>
	);
};

export default TableBodyContent;
