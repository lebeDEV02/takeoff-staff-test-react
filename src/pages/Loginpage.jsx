import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/userSlice';

import TextField from '@mui/material/TextField';
import '../styles/pages/login.scss';

const LoginPage = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user.user);
	const {
		control,
		handleSubmit,
		formState: { isValid },
		register,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			loginData: '',
		},
		mode: 'onBlur',
	});
	const onSubmit = (data) => {
		dispatch(login({ user: data.loginData }));
	};
	return (
		<div className="login">
			{userInfo ? (
				<>
					{' '}
					Вы авторизованы и можете посетить{' '}
					<Link className="login__link" to="/contacts">
						страницу
					</Link>{' '}
					контактов!
				</>
			) : (
				<>
					<h1 className="login__title">Страница авторизации</h1>
					<form onSubmit={handleSubmit(onSubmit)} className="login__form login-form">
						<label className="login-form__label">
							Логин
							<Controller
								{...register('loginData', { required: 'true' })}
								name="loginData"
								control={control}
								ref={null}
								sx={{ marginTop: '10px' }}
								render={({ field }) => <TextField sx={{ margin: '10px 0' }} {...field} />}
							/>
							{errors.loginData?.type === 'required' && (
								<p className="login-form__error-alert error-alert">
									Поле обязательно для заполнения
								</p>
							)}
						</label>
						<button type="submit" className="submit-button" disabled={!isValid}>
							Войти
						</button>
					</form>
				</>
			)}
		</div>
	);
};

export { LoginPage };
