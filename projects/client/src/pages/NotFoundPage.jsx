import { useNavigate } from "react-router-dom";
import CompanyLogo from "../components/CompanyLogo";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<>
			<main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<div className="">
						<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
					</div>
					<p className="text-4xl font-semibold text-green-500 sm:text-8xl">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-500 sm:text-5xl">Page not found</h1>
					<p className="mt-6 text-base leading-7 text-gray-500">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<button
							onClick={() => navigate("/")}
							className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
						>
							Go back home
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
