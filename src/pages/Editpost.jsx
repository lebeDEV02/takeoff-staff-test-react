import ContactsHandler from '../components/ContactsHandler';
import ReturnBack from '../components/ReturnBack';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../store/contactsSlice';

import '../styles/global.scss';

const Editpost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const [contact, setContact] = useState(null);
	const [contacts, setcontacts] = useState(useSelector((state) => state.contacts.contacts));

	useEffect(() => {
		setContact(contacts.filter((item) => item.id == id)[0]);
	}, [id]);

	const dispatch = useDispatch();

	const {
		control,
		handleSubmit,
		formState: { isValid },
		register,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			phone: '',
		},
		mode: 'onBlur',
	});
	const onSubmit = (data) => {
		const { username, email, phone } = data;
		dispatch(editContact({ username, email, phone, id }));
		goBack();
	};
	return (
		<div className="edit-contact">
			<h1 className="edit-contact__title">Изменить параметры пользователя</h1>
			<ReturnBack classNames={'edit-contact__return-button return-button'}></ReturnBack>
			<ContactsHandler
				control={control}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				isValid={isValid}
				register={register}
				errors={errors}
				className="edit-contact"
				inputValue="Изменить контакт"></ContactsHandler>
		</div>
	);
};

export { Editpost };
