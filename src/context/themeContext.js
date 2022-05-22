import React from 'react';

const Context = React.createContext();

const ThemeProvider = ({ children }) => {
	const [state, setState] = React.useState(
		// JSON.parse(window.localStorage.getItem('token')) || false,
        false
	);

	// React.useEffect(() => {
	// 	if (state) {
	// 		window.localStorage.setItem('token', JSON.stringify(state));
	// 	} else {
	// 		window.localStorage.removeItem('token');
	// 	}
	// }, [state]);

	return (
		<Context.Provider value={{ state, setState }}>{children}</Context.Provider>
	);
};

export {Context, ThemeProvider}