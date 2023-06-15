import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreatePromotion from "./pages/CreatePromotion/CreatePromotion";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import CreateBranchAdminPage from "./pages/CreateBranchAdmin/CreateBranchAdminPage";
import GreetingPage from "./pages/Greeting/GreetingPage";
import HomePage from "./pages/Home/HomePage";
import ProductPromotion from "./pages/ManagePromotion/ManagePromotion";
import VerifyPage from "./pages/Verify/VerifyPage";
import AdminLoginPage from "./pages/Login/AdminLoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import UserLoginPage from "./pages/UserLogin/UserLoginPage";
import ManageStock from "./pages/ManageStock/ManageStock";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<UserLoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/greeting" element={<GreetingPage />} />
				<Route path="/verify/:token" element={<VerifyPage />} />
				<Route path="/admin/login" element={<AdminLoginPage />} />
				<Route path="/admin/promo" element={<ProductPromotion />} />
				<Route path="/admin/promo/create" element={<CreatePromotion />} />
				<Route path="/admin/stock/" element={<ManageStock />} />
				<Route path="/admin/dashboard" element={<DashboardPage />} />
				<Route path="/admin/create-branch-admin" element={<CreateBranchAdminPage />} />
			</Routes>
		</div>
	);
}

export default App;
