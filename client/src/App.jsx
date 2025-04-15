import { Navigate, Route, Routes } from "react-router-dom";

//import HomePage from "./pages/HomePage";
import authpage from "./page/authpage"; 

import { authStore } from "./store/authStore";

import { useEffect } from "react";

function App() {
	//links to login
    //links to auth
    //links to where to go if auth passes/fails
    const { checkAuth, authUser, checkingAuth } = authStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (checkingAuth) return null;
    return(
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <Routes>
                <Route path = '/' element={authUser? <homePage /> : <Navigate to={"/auth"}/>} />
                <Route path = '/auth' element={!authUser? <authpage /> : <Navigate to={"/"} />} />
            </Routes>
        </div>
    );
}
export default App;