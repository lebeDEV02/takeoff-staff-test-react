import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Singlepage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState(null);

	const goBack = () => navigate(-1);

	// useEffect(() => {
	// 	setContact(contacts.filter((item) => item.id == id)[0]);
	// }, [id]);

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
