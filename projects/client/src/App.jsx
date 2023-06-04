import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="register" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
