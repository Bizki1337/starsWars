import { Routes, Route} from "react-router-dom";

import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import PersonPage from 'pages/PersonPage/PersonPage';

import Layout from "components/Layout/Layout";

import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/:id' element={<PersonPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
