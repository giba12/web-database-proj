import { useState } from "react";

import LoginForm from "../components/LoginForm";


const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div
			className='css'>
			<div className='css'>
				<h2 className='text-css>
					{isLogin ? "text1" : "text2"}
				</h2>

				<div className='css'>
					{isLogin ? <LoginForm /> }

					<div className=' text-css'>
						<p className='text-css'>
							{isLogin ? "text1?" : "text2?"}
						</p>

						<button
							onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
							className='css'
						>
							{isLogin ? "text1" : "text2"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthPage;