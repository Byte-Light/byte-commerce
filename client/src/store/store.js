import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import AdminProductsSlice from './admin/products-slice/index';
import adminOrderSlice from './admin/order-slice/index';

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: AdminProductsSlice,
        adminOrder: adminOrderSlice,
    }

})

export default store;