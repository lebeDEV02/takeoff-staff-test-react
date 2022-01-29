import ReturnBack from '../components/ReturnBack';
import ContactsHandler from '../components/ContactsHandler';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';

import '../styles/global.scss';

export default function AddContactpage() {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const {
		control,
		handleSubmit,
		formState: { isValid, errors },
		register,
		reset,
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
		dispatch(addContact({ username, email, phone }));
		reset();
		goBack();
	};

	const dispatch = useDispatch();

	return (
		<div className="add-contact">
			<h1 className="add-contacts__title">Добавить нового пользователя</h1>
			<ReturnBack classNames={'add-contact__return-button return-button'}></ReturnBack>
			<ContactsHandler
				control={control}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				isValid={isValid}
				register={register}
				errors={errors}
				className="add-contact"
				inputValue="Добавить контакт"></ContactsHandler>
		</div>
	);
}
export { AddContactpage };
