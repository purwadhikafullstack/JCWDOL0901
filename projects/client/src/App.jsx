import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/Register/RegisterPage.jsx";
import CreateBranchAdminPage from "./pages/CreateBranchAdmin/CreateBranchAdminPage";
import GreetingPage from "./pages/Greeting/GreetingPage";
import VerifyPage from "./pages/Verify/VerifyPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="register" element={<RegisterPage />} />
				<Route
					path="admin/create-branch-admin"
					element={<CreateBranchAdminPage />}
				/>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/greeting" element={<GreetingPage />} />
				<Route path="/verify/:token" element={<VerifyPage />} />
			</Routes>
		</div>
	);
}

export default App;
