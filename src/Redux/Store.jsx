import { configureStore } from '@reduxjs/toolkit';
import Slices from './Slices';
const store = configureStore({
    reducer: Slices,
});

export default store;

