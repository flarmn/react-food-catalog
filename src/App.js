import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Notfound } from './pages/Notfound';

import { Recipe } from './pages/recipe';

function App() {
	console.log("App started")
	return (
		<>
			<Router basename='/react-food-catalog'>
				<Header />
				<main className='container content'>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path = 'recipe/:id' element = { <Recipe /> } />

						<Route path="about" element={<About />} />
						<Route path="contacts" element={<Contacts />}  />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
