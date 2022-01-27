import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';
import { useSelector, useDispatch } from 'react-redux';

const Blogpage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [inputValue, setInputValue] = useState('');
	const userQuery = searchParams.get('user') || '';
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
			<Link to="/contacts/new" style={{ margin: '1rem 0', display: 'inline-block' }}>
				Add new contact
			</Link>
			{filteredArray.map((user) => (
				<ul key={user.id}>
					<li>Username: {user.username}</li>
					<li>Email: {user.email}</li>
					<li>Phone: {user.phone}</li>
					<Link to={`/contacts/${user.id}`}>Подробнее</Link>
				</ul>
			))}
		</div>
	);
};

export { Blogpage };
