import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

//import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { authStore } from "./store/authStore";

function App() {
	//links to login
    //links to auth
    //links to where to go if auth passes/fails
    const { checkAuth, authUser, checkingAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (checkingAuth) return null;
    return(
        <div className='blah'>

            <Routes>
                <Route path = '/' element={xyz? <HomePage /> : <Navigate to={"/auth"}/>} />
            </Routes>
        </div>
    );
}

export default App;