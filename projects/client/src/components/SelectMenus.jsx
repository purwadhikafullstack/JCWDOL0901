const SelectMenus = ({ formName, required, setInput, data }) => {
	const inputHandler = (setInput, event) =>
		setInput(previousInput => ({
			...previousInput,
			[event.target.name]: event.target.value,
		}));

	return (
		<div className="w-full">
			<label
				htmlFor={`${formName}`}
				className="block text-sm text-white mb-1 text-left"
			>
				{formName}
				{required && <span className="text-red font-bold">*</span>}
			</label>
			<select
				id={formName}
				name={formName.toLowerCase()}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
				onChange={event => inputHandler(setInput, event)}
				defaultValue={`Select ${formName}`}
			>
				<option disabled hidden value="">
					Select {formName}
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
