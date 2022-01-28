import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		contacts: [
			{
				id: 1,
				username: 'Bret',
				email: 'Sincere@april.biz',
				phone: '1-770-736-8031 x56442',
			},
			{
				id: 2,
				username: 'Antonette',
				email: 'Shanna@melissa.tv',
				phone: '010-692-6593 x09125',
			},
			{
				id: 3,
				username: 'Samantha',
				email: 'Nathan@yesenia.net',
				phone: '1-463-123-4447',
			},
			{
				id: 4,
				username: 'Karianne',
				email: 'Julianne.OConner@kory.org',
				phone: '493-170-9623 x156',
			},
			{
				id: 5,
				username: 'Kamren',
				email: 'Lucio_Hettinger@annie.ca',
				phone: '(254)954-1289',
			},
			{
				id: 6,
				username: 'Leopoldo_Corkery',
				email: 'Karley_Dach@jasper.info',
				phone: '1-477-935-8478 x6430',
			},
			{
				id: 7,
				username: 'Elwyn.Skiles',
				email: 'Telly.Hoeger@billy.biz',
				phone: '210.067.6132',
			},
			{
				id: 8,
				username: 'Maxime_Nienow',
				email: 'Sherwood@rosamond.me',
				phone: '586.493.6943 x140',
			},
			{
				id: 9,
				username: 'Delphine',
				email: 'Chaim_McDermott@dana.io',
				phone: '(775)976-6794 x41206',
			},
			{
				id: 10,
				username: 'Moriah.Stanton',
				email: 'Rey.Padberg@karina.biz',
				phone: '024-648-3804',
			},
		],
	},
	reducers: {
		addContact(state, action) {
			state.contacts.push({
				id: state.contacts.length + 1,
				username: action.payload.username,
				email: action.payload.email,
				phone: action.payload.phone,
			});
		},
		deleteContact(state, action) {
			state.contacts = state.contacts.filter((item) => item.id !== action.payload.id);
			state.contacts = state.contacts.map((item, index) => ({ ...item, id: index + 1 }));
		},
		editContact(state, action) {
			state.contacts[action.payload.id - 1] = {
				id: action.payload.id,
				username: action.payload.username,
				email: action.payload.email,
				phone: action.payload.phone,
			};
		},
	},
});
export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
