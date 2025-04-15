import { useState } from "react";
import { authStore } from "../store/authStore";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, loading } = useAuthStore();

	return (
		<form
			className='space-y-6'
			onSubmit={(e) => {
				e.preventDefault();
				login({ email, password });
			}}
		>
			<div>
				<label htmlFor='email' className='text-css'>
					Email address
				</label>
				<div className='css'>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='-css'
					/>
				</div>
			</div>

			<div>
				<label htmlFor='password' className='text css'>
					Password
				</label>
				<div className='mt-1'>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='css'
					/>
				</div>
			</div>

			<button
				type='submit'
				className={`css ${
						loading
							? "css"
							: "css"
					}`}
				disabled={loading}
			>
				{loading ? "Signing in..." : "Sign in"}
			</button>
		</form>
	);
};
export default LoginForm;