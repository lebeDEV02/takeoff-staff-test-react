import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';

export default function ContactsHandler({
	control,
	handleSubmit,
	onSubmit,
	isValid,
	register,
	errors,
	className,
	inputValue,
}) {
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={`${className}`}>
				<label className={`${className}__username ${className}__label`}>
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
						<p className={`${className}__error-alert error-alert`}>
							Поле username обязательно для заполнения
						</p>
					)}
				</label>
				<label className={`${className}__email ${className}__label`}>
					Email пользователя:
					<Controller
						{...register('email', { required: 'true', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
						name="email"
						control={control}
						ref={null}
						render={({ field }) => <TextField sx={{ margin: '10px 0' }} {...field} />}
					/>
					{errors.email?.type === 'pattern' && (
						<p className={`${className}__error-alert error-alert`}>
							Введите корректую электронную почту
						</p>
					)}
					{errors.email?.type === 'required' && (
						<p className={`${className}__error-alert error-alert`}>
							Поле email обязательно для заполнения
						</p>
					)}
				</label>
				<label className={`${className}__phone ${className}__label`}>
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
						<p className={`${className}__error-alert error-alert`}>
							Введите корректный номер телефона
						</p>
					)}
					{errors.phone?.type === 'required' && (
						<p className={`${className}__error-alert error-alert`}>
							Поле phone обязательно для заполнения
						</p>
					)}
				</label>
				<input
					type="submit"
					value={inputValue}
					disabled={!isValid}
					className={`${className}__submit-button submit-button`}
				/>
			</form>
		</>
	);
}
