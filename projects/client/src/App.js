import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/greetings`
			);
			setMessage(data?.message || "");
		})();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{message}
				<h1 className="text-3xl font-bold font-inter text-emerald-200 underline">
					Hello world!
				</h1>
			</header>
		</div>
	);
}

export default App;
