import { useState, useEffect } from 'react';
import { BlogFilter } from '../components/BlogFilter';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Blogpage = () => {
	const [inputValue, setInputValue] = useState('');
	const { id } = useParams();
	const [filteredArray, setFilteredArray] = useState(
		useSelector((state) => state.contacts.contacts),
	);
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
	}, [inputValue]);
	return (
		<div>
			<h1>Our news</h1>
			<input
				placheholder="Поиск..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}></input>
			<Link to="/contacts/add" style={{ margin: '1rem 0', display: 'inline-block' }}>
				Add new contact
			</Link>
			{filteredArray.map((user) => (
				<ul key={user.id}>
					<li>Username: {user.username}</li>
					<li>Email: {user.email}</li>
					<li>Phone: {user.phone}</li>
					<Link to={`/contacts/${user.id}/edit`}>Edit this contact</Link>
				</ul>
			))}
		</div>
	);
};

export { Blogpage };
