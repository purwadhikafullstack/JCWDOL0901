import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "material-icons/iconfont/material-icons.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@splidejs/react-splide/css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
