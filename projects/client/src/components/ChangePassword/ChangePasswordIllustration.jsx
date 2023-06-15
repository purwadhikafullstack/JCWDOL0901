const ChangePasswordIllustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-28 mr-auto ml-6 text-3xl font-semibold">Register</div>
				<img
					className="w-[250px] mx-auto pr-4 sm:min-w-[400px] sm:w-[400px]"
					src="/assets/images/register_illustration.png"
					alt="Change Password"
				/>
			</div>
			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">Create an account.</div>
				<img
					className="w-[250px] mx-auto pr-4 sm:min-w-[400px] sm:w-[400px]"
					src="/assets/images/register_illustration.png"
					alt="Change Password"
				/>
			</div>
		</>
	);
};

export default ChangePasswordIllustration;
