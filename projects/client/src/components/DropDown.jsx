import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const ToggleDropDown = ({ open, data }) => {
	return (
		<Listbox.Button
			className={`bg-white w-full border border-green-200 py-2 rounded-lg disabled:opacity-50 disabled:border-gray-300 disabled:cursor-no-drop`}
		>
			<div className="flex flex-row items-center justify-end max-w-full">
				<div className="max-w-[70%] mx-auto font-semibold text-sm overflow-x-hidden ">
					<div className="max-w-full whitespace-nowrap text-xs box-border">{data?.name || "..."}</div>
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
			.then((result) => setLists(result.data))
			.catch((error) => setLists([{ name: "Server Unavailable", id: 0 }]));
	}, []);

	return (
		lists && (
			<div className="relative">
				<Transition
					as={Fragment}
					enter="transition-opacity ease-in-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="border absolute h-fit inset-0 max-h-44 min-w-full w-fit overflow-auto rounded-lg text-xs cursor-pointer">
						<DataLists lists={lists} setter={setter} />
					</Listbox.Options>
				</Transition>
			</div>
		)
	);
};

const DropDown = ({ data, setter, getter, disabled = false }) => {
	return (
		<Listbox disabled={disabled}>
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
