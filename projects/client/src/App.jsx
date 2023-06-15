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
import CreateCategoryPage from "./pages/CreateCategory/CreateCategoryPage";
import UserLoginPage from "./pages/UserLogin/UserLoginPage";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageStock from "./pages/ManageStock/ManageStock";
import UpdateCategoryPage from "./pages/UpdateCategory/UpdateCategoryPage";
import AdminAuthGuard from "./pages/AdminAuthGuard";
import ChangePasswordPage from "./pages/ChangePassword/ChangePasswordPage";

function App() {
	return (
		<div className="App">
			<Routes>
				{/* //Unauth Page */}
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<UserLoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/greeting" element={<GreetingPage />} />
				<Route path="/verify/:token" element={<VerifyPage />} />
				<Route path="/admin/login" element={<AdminLoginPage />} />
				<Route path="/account/change-password" element={<ChangePasswordPage />} />

				{/* //Admin Auth Page */}
				<Route path="/admin/promo" element={<AdminAuthGuard component={<ProductPromotion />} />} />
				<Route path="/admin/promo/create" element={<AdminAuthGuard component={<CreatePromotion />} />} />
				<Route path="/admin/stock" element={<AdminAuthGuard component={<ManageStock />} />} />
				<Route path="/admin/dashboard" element={<AdminAuthGuard component={<DashboardPage />} />} />
				<Route
					path="/admin/create-branch-admin"
					element={<AdminAuthGuard component={<CreateBranchAdminPage />} />}
				/>
				<Route path="/admin/category" element={<AdminAuthGuard component={<ManageCategory />} />} />
				<Route path="/admin/category/create" element={<AdminAuthGuard component={<CreateCategoryPage />} />} />
				<Route path="/admin/category/update" element={<AdminAuthGuard component={<UpdateCategoryPage />} />} />
			</Routes>
		</div>
	);
}

export default App;
