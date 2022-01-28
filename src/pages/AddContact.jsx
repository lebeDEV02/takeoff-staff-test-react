import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import { addContact } from '../store/contactsSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineUserAdd } from 'react-icons/ai';
import '../styles/edit.scss';
import '../styles/global.scss';
export default function AddContact() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const goBack = () => navigate(-1);
	const { id } = useParams();
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
		dispatch(addContact({ username, email, phone }));
		goBack();
	};
	return (
		<div>
			<h1>Добавить нового пользователя</h1>
			<button onClick={goBack}>Назад</button>
			<form onSubmit={handleSubmit(onSubmit)} className="edit-form">
				<label className="edit-form__username edit-form__label">
					Имя пользователя:
					<Controller
						{...register('username', { required: 'true' })}
						name="username"
						control={control}
						ref={null}
						sx={{ marginTop: '10px' }}
						render={({ field }) => <TextField sx={{ margin: '10px 0' }} {...field} />}
					/>
					{errors.username?.type === 'required' && (
						<p className="edit-form__error-alert error-alert">
							Поле username обязательно для заполнения
						</p>
					)}
				</label>
				<label className="edit-form__email edit-form__label">
					Email пользователя:
					<Controller
						{...register('email', { required: 'true', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
						name="email"
						control={control}
						ref={null}
						render={({ field }) => <TextField sx={{ margin: '10px 0' }} {...field} />}
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
					Телефон пользователя:
					<Controller
						{...register('phone', {
							required: 'true',
							pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
						})}
						name="phone"
						control={control}
						ref={null}
						render={({ field }) => <TextField sx={{ margin: '10px 0' }} {...field} />}
					/>
					{errors.phone?.type === 'pattern' && (
						<p className="edit-form__error-alert error-alert">Введите корректный номер телефона</p>
					)}
					{errors.phone?.type === 'required' && (
						<p className="edit-form__error-alert error-alert">
							Поле phone обязательно для заполнения
						</p>
					)}
				</label>
				<input
					type="submit"
					value="Добавить контакт"
					disabled={!isValid}
					className="edit-form__submit submit-button"
				/>
			</form>
		</div>
	);
}
