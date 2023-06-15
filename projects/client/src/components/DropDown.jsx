import React from "react";
import { Listbox } from "@headlessui/react";

const ToggleDropDown = ({ open, data }) => {
	return (
		<Listbox.Button className={`bg-white w-full border border-green-200 py-2 rounded-lg`}>
			<div className="flex flex-row items-center justify-end max-w-full">
				<div className="max-w-[70%] mx-auto font-semibold text-sm overflow-x-hidden ">
					<div className="max-w-full whitespace-nowrap text-xs box-border">
						{data?.name || "..."}
					</div>
				</div>
				<span className="material-symbols-rounded">expand_more</span>
			</div>
		</Listbox.Button>
	);
};

const Option = ({ item, selected }) => {
	return (
		<div
			className={
				selected
					? "font-bold text-green-300 flex flex-row justify-center text-[90%]"
					: "flex flex-row justify-center text-[90%]"
			}
		>
			{item?.name}
		</div>
	);
};

const DataLists = ({ lists, setter }) => {
	return lists.map((item, index) => {
		return (
			<Listbox.Option
				className="border-b py-2 px-4 shadow whitespace-nowrap min-w-inherit max-w-full bg-white"
				key={index}
				value={item.id}
				onClick={() => setter(item)}
			>
				{({ selected }) => <Option item={item} selected={selected} />}
			</Listbox.Option>
		);
	});
};

const DropDownOptions = ({ setter, getter }) => {
	const [lists, setLists] = React.useState([]);

	React.useEffect(() => {
		getter()
			.then(result => setLists(result.data))
			.catch(error => setLists([{ name: "Server Unavailable", id: 0 }]));
	}, []);

	return (
		lists && (
			<div className="relative">
				<Listbox.Options className="border absolute h-fit inset-0 max-h-44 min-w-full w-fit overflow-auto rounded-lg text-xs cursor-pointer">
					<DataLists lists={lists} setter={setter} />
				</Listbox.Options>
			</div>
		)
	);
};

const DropDown = ({ data, setter, getter }) => {
	return (
		<Listbox>
			{({ open }) => {
				return (
					<div className="w-full">
						<ToggleDropDown open={open} data={data} />
						<DropDownOptions setter={setter} getter={getter} />
					</div>
				);
			}}
		</Listbox>
	);
};

export default DropDown;
