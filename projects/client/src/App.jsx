import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/Register/RegisterPage.jsx";
import GreetingPage from "./pages/Greeting/GreetingPage";
import HomePage from "./pages/Home/HomePage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/greeting" element={<GreetingPage />} />
			</Routes>
		</div>
	);
}

export default App;
