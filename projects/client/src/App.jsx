import "./App.css";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/Register/RegisterPage.jsx";
import UserManagementSettingsPage from "./pages/Admin/UserManagementSettingsPage.jsx";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="register" element={<RegisterPage />} />
				<Route
					path="admin/user-management"
					element={<UserManagementSettingsPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
