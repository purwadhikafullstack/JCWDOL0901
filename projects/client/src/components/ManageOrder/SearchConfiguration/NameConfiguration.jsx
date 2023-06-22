import React from "react";

const NameConfiguration = ({ name, setName }) => {
	const [input, setInput] = React.useState("");

	return (
		<div className="flex flex-col w-[25%]">
			<div className="flex flex-col items-center justify-around w-full text-green-100 mt-auto lg:flex-row">
				<div
					className="flex w-fit text-black mb-1 rounded-lg p-1 px-2 cursor-pointer block lg:hidden"
					onClick={(event) => setName(input)}
				>
					<span class="material-symbols-rounded w-full overflow-hidden whitespace-nowrap">
						keyboard_return
					</span>
				</div>
				<input
					type="text"
					className="border border-green-400 px-3 py-2 w-[90%] rounded-lg mb-auto text-black outline-0 lg:w-[70%]"
					placeholder="Order ID"
					onKeyDown={(event) => (event.key === "Enter" ? setName(input) : null)}
					onChange={(event) => setInput(event.target.value)}
				/>
				<div
					className="flex max-w-[20%] w-fit bg-green-300  rounded-lg p-1 px-2 cursor-pointer hidden lg:block"
					onClick={() => setName(input)}
				>
					<span class="material-symbols-rounded w-full overflow-hidden whitespace-nowrap">search</span>
				</div>
			</div>
		</div>
	);
};

export default NameConfiguration;
