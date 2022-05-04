import TestComponent from '@components/TestComponent';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {

	return (
		<BrowserRouter>
			<div className="app">
				<Routes>
					<Route path="/" element={
						<>
							<div className="text-4xl pb-5">
								create-react-app sample with tailwindcss, sass
							</div>
							<TestComponent />
						</>
					} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
