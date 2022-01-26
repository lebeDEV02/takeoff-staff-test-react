import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import contacts from '../mock-data/contacts';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
const Editpost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState(null);

	const goBack = () => navigate(-1);

	useEffect(() => {
		setContact(contacts.filter((item) => item.id == id)[0]);
	}, [id]);
	return (
		<div>
			<h1>Edit post {id}</h1>
			<button onClick={goBack}>Go back</button>
			{contact && (
				<>
					<FormControl>
						<label>
							Изменить username пользователя:
							<TextField
								id="outlined-basic"
								label={`старое значение: ${contact.username}`}
								variant="outlined"
							/>
						</label>
						<label>
							Изменить email пользователя:
							<TextField
								id="outlined-basic"
								label={`старое значение: ${contact.email}`}
								variant="outlined"
							/>
						</label>
						<label>
							Изменить phone пользователя:
							<TextField
								id="outlined-basic"
								label={`старое значение: ${contact.phone}`}
								variant="outlined"
							/>
						</label>
						<button onClick={() => alert('aboba')}></button>
					</FormControl>
				</>
			)}
		</div>
	);
};

export { Editpost };
