const ReferralCard = ({ user }) => {
	return (
		<div className="bg-white overflow-hidden sm:rounded-md mb-6 flex justify-center sm:justify-start sm:ml-6">
			<div className="bg-green-200 min-w-80 w-5/6 sm:w-96 text-white font-semibold rounded-lg p-4 text-left flex overflow-hidden">
				<img src="/assets/images/gratis_ongkir.png" className="h-24 mr-4" alt="gratis ongkir" />
				<div className="flex flex-col">
					<div className="mb-1">Dapatkan Gratis Ongkir 25rb</div>
					<div className=" font-normal text-xs mb-1">Bagikan & ajak temanmu daftar pakai kode referral</div>
					<div className=" bg-green-400 w-fit px-1">{user?.referral_code}</div>
				</div>
			</div>
		</div>
	);
};

export default ReferralCard;
