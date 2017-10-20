import React from 'react'

import App from './App.jsx'

// Enable the hotloader
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';



// Initial render
render( 
	<AppContainer>
		<App/>
	</AppContainer>,
	document.querySelector("#app")
);


if (module && module.hot) {
	
	module.hot.accept('./App.jsx', () => {

		// Re-import the App
		const App = require('./App.jsx').default;

		// Render
		render(
			<AppContainer>
				<App/>
			</AppContainer>,
			document.querySelector("#app")
		);

	});

}