import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from 'react-hook-form';
import Input from '@mui/material/Input';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../store/contactsSlice';
import '../styles/edit.scss';
import '../styles/global.scss';
const Editpost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState(null);
	const [contacts, setcontacts] = useState(useSelector((state) => state.contacts.contacts));
	const dispatch = useDispatch();
	const goBack = () => navigate(-1);

	useEffect(() => {
		setContact(contacts.filter((item) => item.id == id)[0]);
	}, [id]);

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
		<div>
			<h1>Изменить параметры пользователя</h1>
			<button onClick={goBack}>Назад</button>
			{contact && (
				<>
					<form onSubmit={handleSubmit(onSubmit)} className="edit-form">
						<label className="edit-form__username edit-form__label">
							Изменить имя пользователя:
							<Controller
								{...register('username', { required: 'true' })}
								name="username"
								control={control}
								ref={null}
								sx={{ marginTop: '10px' }}
								render={({ field }) => (
									<TextField
										sx={{ margin: '10px 0' }}
										{...field}
										label={`старое значение: ${contact.username}`}
									/>
								)}
							/>
							{errors.username?.type === 'required' && (
								<p className="edit-form__error-alert error-alert">
									Поле username обязательно для заполнения
								</p>
							)}
						</label>
						<label className="edit-form__email edit-form__label">
							Изменить email пользователя:
							<Controller
								{...register('email', { required: 'true', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
								name="email"
								control={control}
								ref={null}
								render={({ field }) => (
									<TextField
										sx={{ margin: '10px 0' }}
										{...field}
										label={`старое значение: ${contact.email}`}
									/>
								)}
							/>
							{errors.email?.type === 'pattern' && (
								<p className="edit-form__error-alert error-alert">
									Введите корректую электронную почту
								</p>
							)}
							{errors.email?.type === 'required' && (
								<p className="edit-form__error-alert error-alert">
									Поле email обязательно для заполнения
								</p>
							)}
						</label>
						<label className="edit-form__phone edit-form__label">
							Изменить телефон пользователя:
							<Controller
								{...register('phone', {
									required: 'true',
									pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
								})}
								name="phone"
								control={control}
								ref={null}
								render={({ field }) => (
									<TextField
										sx={{ margin: '10px 0' }}
										{...field}
										label={`старое значение: ${contact.phone}`}
									/>
								)}
							/>
							{errors.phone?.type === 'pattern' && (
								<p className="edit-form__error-alert error-alert">
									Введите корректный номер телефона
								</p>
							)}
							{errors.phone?.type === 'required' && (
								<p className="edit-form__error-alert error-alert">
									Поле phone обязательно для заполнения
								</p>
							)}
						</label>
						<input
							type="submit"
							value="Изменить данные"
							disabled={!isValid}
							className="edit-form__submit submit-button"
						/>
					</form>
				</>
			)}
		</div>
	);
};

export { Editpost };
