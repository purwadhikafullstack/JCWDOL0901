const SelectMenus = ({ name, inputKey, required, setInput, data }) => {
	const inputHandler = (setInput, event) =>
		setInput(previousInput => ({
			...previousInput,
			[event.target.name]: event.target.value,
		}));

	return (
		<div className="w-full my-1">
			<label htmlFor={`${name}`} className="block text-sm ml-1 mb-1 text-left">
				{name}
				{required && <span className="text-red font-bold">*</span>}
			</label>
			<select
				id={name}
				name={inputKey}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
				onChange={event => inputHandler(setInput, event)}
				defaultValue={`Select ${name}`}
			>
				<option disabled hidden value="">
					Select {name}
				</option>
				{data.map(el => (
					<option key={el.id} value={el.name}>
						{el.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectMenus;
