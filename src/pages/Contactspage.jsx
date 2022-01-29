import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';

import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { TextField } from '@mui/material';
import '../styles/pages/contacts.scss';

const Contactspage = () => {
	const [inputValue, setInputValue] = useState('');
	const [filteredArray, setFilteredArray] = useState(
		useSelector((state) => state.contacts.contacts),
	);

	const dispatch = useDispatch();
	const deleteSelectedContact = (user) => {
		dispatch(deleteContact(user));
	};
	const contacts = useSelector((state) => state.contacts.contacts);
	useEffect(() => {
		if (inputValue !== '') {
			setFilteredArray(
				[...contacts].filter((item) =>
					item.username.toLowerCase().includes(inputValue.toLowerCase()),
				),
			);
		} else {
			setFilteredArray(contacts);
		}
	}, [inputValue, contacts]);

	return (
		<div className="contacts">
			<h1 className="contacts__title">Ваши контакты</h1>
			<div className="contacts__features">
				<TextField
					className="contacts__search-input search-input"
					id="outlined-basic"
					label="Поиск..."
					variant="outlined"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<Link
					className="contacts__add-user"
					to="/contacts/add"
					style={{ margin: '1rem 0', display: 'inline-block' }}>
					<AiOutlineUserAdd />
				</Link>
			</div>
			<ul className="contacts__users-list users-list">
				{filteredArray.map((user) => (
					<li className="users-list__user user" key={user.id}>
						<div>
							<p>Имя: {user.username}</p>
							<p>Email: {user.email}</p>
							<p>Телефон: {user.phone}</p>
						</div>
						<div className="user__buttons">
							<Link className="user__edit-button" to={`/contacts/${user.id}/edit`}>
								<AiFillEdit />
							</Link>
							<BsFillTrashFill
								onClick={() => deleteSelectedContact(user)}
								className="user__delete-button"></BsFillTrashFill>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export { Contactspage };
