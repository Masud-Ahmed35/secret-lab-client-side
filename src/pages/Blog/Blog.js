import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='mb-10'>
            <div className="mt-10 dark:bg-gray-800 dark:text-gray-100">
                <div className="container border-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">October 25, 2022</span>
                        <Link rel="noopener noreferrer" to='/courses' className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJs</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold">What is 'CORS' in Nodejs?</p>
                        <p className="mt-2">CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 dark:bg-gray-800 dark:text-gray-100">
                <div className="container border-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">October 25, 2022</span>
                        <Link rel="noopener noreferrer" to='/courses' className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold">Why are you using "firebase"? What other options do you have to implement authentication?</p>
                        <ul className="mt-2">Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts. <br /><br />
                            Alternative of firebase
                            <ul className='ml-10'>
                                <li className='list-disc'>Auth0</li>
                                <li className='list-disc'>Okta</li>
                                <li className='list-disc'>Keycloak</li>
                                <li className='list-disc'>Passport</li>
                                <li className='list-disc'>Amazon Cognito</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 dark:bg-gray-800 dark:text-gray-100">
                <div className="container border-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">October 25, 2022</span>
                        <Link rel="noopener noreferrer" to='/courses' className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">ReactJs</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold">How does the private route work?</p>
                        <p className="mt-2">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 dark:bg-gray-800 dark:text-gray-100">
                <div className="container border-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">October 25, 2022</span>
                        <Link rel="noopener noreferrer" to='/courses' className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">NodeJs</Link>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-bold">What is Node? How does Node work?</p>
                        <p className="mt-2">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br /><br />
                            Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. How does Nodejs works internally?
                            Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
                        <div>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;