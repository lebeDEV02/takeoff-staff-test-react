import { Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { Blogpage } from './pages/Blogpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Singlepage } from './pages/Singlepage';
import { Notfoundpage } from './pages/Notfoundpage';
import { LoginPage } from './pages/Loginpage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route
						path="contacts"
						element={
							<RequireAuth>
								<Blogpage />
							</RequireAuth>
						}
					/>
					<Route
						path="contacts/:id"
						element={
							<RequireAuth>
								<Singlepage />
							</RequireAuth>
						}
					/>
					<Route
						path="contacts/:id/edit"
						element={
							<RequireAuth>
								<Editpost />
							</RequireAuth>
						}
					/>
					<Route
						path="contacts/new"
						element={
							<RequireAuth>
								<Createpost />
							</RequireAuth>
						}
					/>
					<Route path="login" element={<LoginPage />} />
					<Route path="*" element={<Notfoundpage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
