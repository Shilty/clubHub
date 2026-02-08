import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerPhoto from '../images/loginPhoto.jpg';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // fake registration logic
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Registered successfully!');
        // Here could redirect or set a logged-in user
    };

    return (
        <div className="flex min-h-screen">
            {/* Left photo */}
            <div className="w-1/2 hidden md:block">
                <img
                    src={registerPhoto}
                    alt="Register"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-bg-primary p-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="text-3xl font-bold text-text-primary">Welcome to ClubHub</h2>
                    <p className="text-text-secondary">
                        Create your account to join the community
                    </p>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 rounded border border-input-border focus:border-input-focus"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded border border-input-border focus:border-input-focus"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 rounded border border-input-border focus:border-input-focus"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-button-orange text-text-inverse p-3 rounded hover:bg-button-orangeHover"
                        >
                            Register
                        </button>
                    </form>

                    {/* Have an account link */}
                    <p className="text-text-secondary text-center mt-6">
                        Have an account?{' '}
                        <Link
                            to="/login"
                            className="text-button-orange hover:underline font-semibold"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
