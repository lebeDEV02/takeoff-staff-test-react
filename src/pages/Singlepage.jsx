import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Singlepage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState(null);

	const goBack = () => navigate(-1);
	const [contacts, setcontacts] = useState(useSelector((state) => state.contacts.contacts));
	useEffect(() => {
		setContact(contacts.filter((item) => item.id == id)[0]);
	}, [id]);

	return (
		<div>
			<button onClick={goBack}>Назад</button>
			{contact && (
				<>
					<h1>{contact.username}</h1>
					<p>{contact.email}</p>
					<p>{contact.phone}</p>
					<Link to={`/contacts/${id}/edit`}>Edit this contact</Link>
				</>
			)}
		</div>
	);
};

export { Singlepage };
