import React from "react";

const CartPage = () => {
	return (
		<>
			<section className="section-title ml-5 text-lg font-bold text-gray-700">Product test</section>

			<div className="post flex border border-gray-300 w-500 p-10 shadow-md rounded-md mb-5 ml-5">...</div>

			<div className="img-thumb w-200 h-150 mr-5">
				<img className="w-full h-full object-cover" src="..." alt="..." />
			</div>

			<div className="content flex-1">
				<p className="title mb-4 text-2xl font-bold text-blue-900">...</p>
				<p className="desc mb-4 text-base text-gray-700">...</p>
			</div>

			<button className="remove px-4 py-3 bg-red-600 text-white rounded-md outline-none mt-3">...</button>

			<button className="update px-4 py-3 bg-green-500 text-white rounded-md outline-none mt-3 mr-2">...</button>

			<button className="remove:hover update:hover cursor-pointer"></button>

			<div className="form-add-post shadow-md w-500 ml-5 p-10 mb-10 rounded-md">
				<label className="text-sm font-bold text-gray-700 mb-2">...</label>
				<input
					className="outline-none border border-gray-700 p-3 rounded-md mb-5 w-full text-sm text-gray-700"
					type="text"
				/>
				<textarea
					className="outline-none border border-gray-700 p-3 rounded-md mb-5 w-full text-sm text-gray-700"
					rows="4"
				></textarea>
				<button className="btn-submit outline-none border border-blue-500 px-8 py-2 rounded-md text-blue-500 uppercase font-bold mt-10">
					...
				</button>
			</div>
		</>
	);
};

export default CartPage;
