import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { createUser, addNameAndPhoto, verifyEmail, googleLogin, gitHubLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    // -------------------Google Login-----------------------
    const handleGoogleLogin = (event) => {
        event.preventDefault();
        googleLogin(googleProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful with Google')
                navigate(from, { replace: true });
            })
            .catch(error => toast.error(error.message))
    }

    // ---------------------GitHub Login-----------------------------
    const handleGitHubLogin = (event) => {
        event.preventDefault();
        gitHubLogin(gitHubProvider)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful with GitHub')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    // ------------------------Registration Form----------------------------
    const handleName = e => {
        setName(e.target.value);
    }
    const handlePhoto = e => {
        setPhoto(e.target.value);
    }
    const handleEmail = e => {
        const test = /\S+@\S+\.\S+/.test(e.target.value);

        if (!test) {
            toast.error('Please Provide a Valid Email Address');
            return;
        }
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        if (!/(?=.{8,})/.test(e.target.value)) {
            toast.error('Password Must be 8 Characters');
            return;
        }
        if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
            toast.error('Password should have at least 1 Capital latter.');
            return;
        }
        if (!/(?=.*\d)/.test(e.target.value)) {
            toast.error('Password should have at least 1 digit.');
            return;
        }
        if (!/(?=.*[!#@$%&? "])/.test(e.target.value)) {
            toast.error('Password should have at least 1 Special Character');
            return;
        }
        setPassword(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Create Your Account')
                navigate(from, { replace: true });

                addNameAndPhoto(name, photo)
                    .then(() => {
                        verifyEmail()
                            .then(() => toast.success('A Verification Email is Sent to Your Email'))
                            .catch(error => toast.error(error.message))
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <div className="mb-5 mt-10 flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-gray-800 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                    <p className="text-sm dark:text-gray-400">Sign up to create your account</p>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="Name" className="block mb-2 text-sm">Full Name</label>
                            <input onBlur={handleName} type="text" name="name" id="Name" placeholder="Type Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900" required />
                        </div>
                        <div>
                            <label htmlFor="PhotoUrl" className="block mb-2 text-sm">Photo URL</label>
                            <input onBlur={handlePhoto} type="text" name="photoURL" id="PhotoUrl" placeholder="Enter Your Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onBlur={handleEmail} type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900" required />
                        </div>
                        <div>
                            <div className="mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input onBlur={handlePassword} type="password" name="password" id="password" placeholder="********" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">
                                Sign up
                            </button>
                        </div>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-500"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            <button onClick={handleGitHubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
                            <Link to='/login' className="hover:underline text-violet-400 ml-1">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;