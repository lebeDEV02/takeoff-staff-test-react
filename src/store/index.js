import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import contactsSlice from './contactsSlice';
export default configureStore({
	reducer: {
		user: userSlice,
		contacts: contactsSlice,
	},
});
