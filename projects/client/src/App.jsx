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
import UserAccountSettingPage from "./pages/UserAccountSetting/UserAccountSettingPage";
import UserAvatarUploadPage from "./pages/UserAvatarUpload/UserAvatarUploadPage";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageStock from "./pages/ManageStock/ManageStock";
import UpdateCategoryPage from "./pages/UpdateCategory/UpdateCategoryPage";
import AdminAuthGuard from "./pages/AdminAuthGuard";
import ChangePasswordPage from "./pages/ChangePassword/ChangePasswordPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import AccountPage from "./pages/Account/AccountPage";
import ManageAddress from "./pages/ManageAddress/ManageAddress";
import CreateNewAddress from "./pages/CreateNewAddress/CreateNewAddress";
import EditAddress from "./pages/EditAddress/EditAddress";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import SwitchAddress from "./components/Checkout/SwitchAddress";
import SwitchVoucher from "./components/Checkout/SwitchVoucher";
import SwitchLogistic from "./components/Checkout/SwitchLogistic";
import ProductPage from "./pages/Product/ProductPage";
import StockHistory from "./pages/StockHistory/StockHistory";
import UploadProof from "./pages/UploadProof/UploadProof";
import ManageProduct from "./pages/ManageProduct/ManageProduct";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import UserAuthGuard from "./pages/UserAuthGuard";
import OrderPage from "./pages/Order/OrderPage";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import CartPage from "./pages/Cart/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import SalesReport from "./pages/SalesReport/SalesReport";
import AdminOrderDetail from "./pages/AdminOrderDetail/AdminOrderDetail";

function App() {
	return (
		<div className="App">
			<Routes>
				{/* //Unauth Page */}
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/register/greeting" element={<GreetingPage />} />
				<Route path="/verify/:token" element={<VerifyPage />} />
				<Route path="/admin/login" element={<AdminLoginPage />} />
				<Route path="/login" element={<UserLoginPage />} />
				<Route path="/products/" element={<ProductPage />} />
				<Route path="/product/detail/:inventory_id" element={<ProductDetail />} />
				<Route path="/account" element={<AccountPage />} />
				<Route path="/password/forgot" element={<ForgotPassword />} />
				<Route path="/reset-password/verify/:token" element={<ResetPassword />} />

				{/* //User Auth Page */}
				<Route
					path="/account/profile-update"
					element={<UserAuthGuard component={<UserAccountSettingPage />} />}
				/>
				<Route path="/account/change-password" element={<UserAuthGuard component={<ChangePasswordPage />} />} />
				<Route path="/account/avatar-update" element={<UserAuthGuard component={<UserAvatarUploadPage />} />} />
				<Route path="/account/manage-address" element={<UserAuthGuard component={<ManageAddress />} />} />
				<Route
					path="/account/create-new-address"
					element={<UserAuthGuard component={<CreateNewAddress />} />}
				/>
				<Route path="/account/edit-address" element={<UserAuthGuard component={<EditAddress />} />} />
				<Route path="/cart" element={<UserAuthGuard component={<CartPage />} />} />
				<Route path="/cart/checkout" element={<UserAuthGuard component={<CheckoutPage />} />} />
				<Route path="/cart/checkout/address/change" element={<UserAuthGuard component={<SwitchAddress />} />} />
				<Route path="/cart/checkout/voucher/change" element={<UserAuthGuard component={<SwitchVoucher />} />} />
				<Route
					path="/cart/checkout/logistic/change"
					element={<UserAuthGuard component={<SwitchLogistic />} />}
				/>
				<Route path="/order" element={<UserAuthGuard component={<OrderPage />} />} />
				<Route path="/order/upload" element={<UserAuthGuard component={<UploadProof />} />} />
				<Route path="/order/detail/:transaction_id" element={<UserAuthGuard component={<OrderDetail />} />} />

				{/* //Admin Auth Page */}
				<Route path="/admin/order" element={<AdminAuthGuard component={<ManageOrder />} />} />
				<Route
					path="/admin/order/detail/:transaction_id"
					element={<AdminAuthGuard component={<AdminOrderDetail />} />}
				/>
				<Route path="/admin/promo" element={<AdminAuthGuard component={<ProductPromotion />} />} />
				<Route path="/admin/promo/create" element={<AdminAuthGuard component={<CreatePromotion />} />} />
				<Route path="/admin/stock" element={<AdminAuthGuard component={<ManageStock />} />} />
				<Route path="/admin/stock/history" element={<AdminAuthGuard component={<StockHistory />} />} />
				<Route path="/admin/dashboard" element={<AdminAuthGuard component={<DashboardPage />} />} />
				<Route
					path="/admin/create-branch-admin"
					element={<AdminAuthGuard component={<CreateBranchAdminPage />} />}
				/>
				<Route path="/admin/category" element={<AdminAuthGuard component={<ManageCategory />} />} />
				<Route path="/admin/category/create" element={<AdminAuthGuard component={<CreateCategoryPage />} />} />
				<Route path="/admin/category/update" element={<AdminAuthGuard component={<UpdateCategoryPage />} />} />
				<Route path="/admin/product" element={<AdminAuthGuard component={<ManageProduct />} />} />
				<Route path="/admin/product/create" element={<AdminAuthGuard component={<CreateProduct />} />} />
				<Route path="/admin/product/update" element={<AdminAuthGuard component={<UpdateProduct />} />} />
				<Route path="/admin/report" element={<AdminAuthGuard component={<SalesReport />} />} />
				{/* //Not Found Page */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
