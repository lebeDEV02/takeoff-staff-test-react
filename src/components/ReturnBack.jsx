import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

export default function ReturnBack({ classNames }) {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<button onClick={goBack} className={classNames}>
			<RiArrowGoBackLine />
		</button>
	);
}
