import { useState, useEffect } from 'react';
import { BlogFilter } from '../components/BlogFilter';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { deleteContact } from '../store/contactsSlice';
import { AiOutlineUserAdd } from 'react-icons/ai';
import '../styles/blogpage.scss';
import { TextField } from '@mui/material';

const Blogpage = () => {
	const [inputValue, setInputValue] = useState('');
	const { id } = useParams();
	const [filteredArray, setFilteredArray] = useState(
		useSelector((state) => state.contacts.contacts),
	);
	const dispatch = useDispatch();
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

	const deleteSelectedContact = (user) => {
		dispatch(deleteContact(user));
	};
	return (
		<div>
			<h1>Ваши контакты</h1>
			<div className="contacts__features">
				<TextField
					id="outlined-basic"
					label="Поиск..."
					variant="outlined"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<Link to="/contacts/add" style={{ margin: '1rem 0', display: 'inline-block' }}>
					<AiOutlineUserAdd />
				</Link>
			</div>
			<ul className="users-list">
				{filteredArray.map((user) => (
					<li className="users-list__user user" key={user.id}>
						<div>
							<p>Имя: {user.username}</p>
							<p>Email: {user.email}</p>
							<p>Телефон: {user.phone}</p>
						</div>
						<div className="user__buttons">
							<Link to={`/contacts/${user.id}/edit`}>
								<AiFillEdit />
							</Link>
							<BsFillTrashFill onClick={() => deleteSelectedContact(user)}></BsFillTrashFill>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export { Blogpage };
