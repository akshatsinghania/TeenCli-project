import { createContext, useState, useEffect } from 'react';
import { app } from '../api/db';

export const Context = createContext();

const ContextProvider = ({ children }) => {
	const [auth, setAuth] = useState({ logged: false, email: '' });

	useEffect(() => {
		app.auth().onAuthStateChanged((authData) => {
			if (authData) {
				setAuth({ ...auth, logged: true, email: authData.email });
			} else {
				setAuth({ logged: false });
			}
		});
		return () => {
			setAuth(auth);
		};
	}, [app.auth]);
	return (
		<Context.Provider value={{ auth, setAuth }}>{children}</Context.Provider>
	);
};
export default ContextProvider;
