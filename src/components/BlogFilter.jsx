// import { useState } from 'react';

// const BlogFilter = ({ postQuery, setSearchParams }) => {
// 	const [search, setSearch] = useState(postQuery);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const form = e.target;

// 		const query = form.search.value;

// 		const params = {};

// 		if (query.length) params.username = query;

// 		setSearchParams(params);
// 	};

// 	return (
// 		<form autoComplete="off" onSubmit={handleSubmit}>
// 			<input
// 				type="search"
// 				name="search"
// 				value={search}
// 				onChange={(e) => setSearch(e.target.value)}
// 			/>
// 			<input type="submit" value="Search" />
// 		</form>
// 	);
// };

// export { BlogFilter };
