import { Link } from 'react-router-dom';

import '../styles/pages/not-found.scss';
const Notfoundpage = () => {
	return (
		<div className="not-found">
			Этой страницы не существует &#128533;
			<Link className="not-found__link" to="/">
				На главную
			</Link>
		</div>
	);
};

export { Notfoundpage };
