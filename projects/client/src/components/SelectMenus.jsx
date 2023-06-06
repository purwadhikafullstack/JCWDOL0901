import FormikError from "./InputGroup/FormikError";

const SelectMenus = ({ name, inputKey, data, formik, ignore, setInput }) => {
	return (
		<div className="w-full my-1">
			<label htmlFor={`${name}`} className="block text-sm ml-1 mb-1 text-left">
				{name}
			</label>
			<div className="relative">
				<select
					name={inputKey}
					id={name}
					onChange={
						ignore ? event => setInput(event.target.value) : formik.handleChange
					}
					onBlur={formik.handleBlur}
					value={formik.values[inputKey]}
					className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
				>
					<option value={0}>Select {name}</option>
					{data.map(el => (
						<option key={el.id} value={el.id}>
							{(el.type ? el.type + " " : "") + el.name}
						</option>
					))}
				</select>
				<FormikError formik={formik} inputKey={inputKey} />
			</div>
		</div>
	);
};

export default SelectMenus;
