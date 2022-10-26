import React from 'react';

const FAQ = () => {
    return (
        <div>
            {/* ----------------------FAQ Section--------------------- */}
            <section className="dark:bg-gray-800 dark:text-gray-100 lg:w-3/4 mx-auto">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-7">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-md font-bold focus:outline-none focus-visible:ring-violet-400">Overview of this project.</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">This is online based quality learning web application. Here, you can choose a course what you want, there are several courses about web programming. You can select a course to explore this and also it will be helpful for your future career in development section. There are also a premium part where you will get some extra feature.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-md font-bold focus:outline-none focus-visible:ring-violet-400">What are the features of this project?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">It is only for web development. You can visit a course for free. It is best for web developer. In premium access you will get some extra feature. Very low charge for premium access. You can edit and update your profile</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-md font-bold focus:outline-none focus-visible:ring-violet-400">How much strong it's authentication system?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Authentication system is pretty much good. For authentication we used firebase.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-md font-bold focus:outline-none focus-visible:ring-violet-400">How many type for login system?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">There are three types for login system. You can use your Google account or Your GitHub account. Besides, You can login with creating an account with an email and password.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 text-md font-bold focus:outline-none focus-visible:ring-violet-400">Is it only for large device?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Nope, it is fully responsive, you can use it for laptop, desktop, tablet or mobile devise.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ----------------Pricing Section---------------- */}
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-4 mx-auto sm:p-10">
                    <div className="mb-12 space-y-4 text-center">
                        <h1 className="text-4xl font-semibold leading-tight">Pricing With Features</h1>
                        <p className="px-4 sm:px-8 lg:px-24">Checkout our pricing and it's features.</p>
                        <div>
                            <button className="px-4 py-1 font-semibold border rounded-l-lg bg-violet-400 border-violet-400 text-gray-900">Monthly</button>
                            <button className="px-4 py-1 border rounded-r-lg border-violet-400">Annually</button>
                        </div>
                    </div>
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
                        <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-700">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-stone-200">
                                <p className="text-lg font-medium">Personal</p>
                                <p className="text-5xl font-bold">3€
                                    <span className="text-xl dark:text-gray-400"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8 bg-stone-100">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>It will provide regular access.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>There are more than 10 courses.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>You will get our support session.</span>
                                    </li>
                                </ul>
                                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-violet-400 text-gray-900">Subscribe Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-violet-400">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-stone-200">
                                <p className="text-lg font-medium">Professional</p>
                                <p className="text-5xl font-bold">8€
                                    <span className="text-xl dark:text-gray-400"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8 bg-stone-100">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>You will get premium access.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>There are more than 20 courses.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>You can join our live class.</span>
                                    </li>
                                </ul>
                                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-violet-400 text-gray-900">Subscribe Now</button>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md dark:border-gray-700">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-stone-200">
                                <p className="text-lg font-medium">Enterprise</p>
                                <p className="text-5xl font-bold">19€
                                    <span className="text-xl dark:text-gray-400"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8 bg-stone-100">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>It will provide platinum access.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>There are more than 30 courses.</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>You can join with us physically.</span>
                                    </li>
                                </ul>
                                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-violet-400 text-gray-900">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;