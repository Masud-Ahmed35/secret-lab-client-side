import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, description } = data;

    return (
        <div>
            {
                user && (user?.emailVerified || user?.providerData[0]?.providerId === "github.com") ?
                    <>
                        <div className="max-w-xs mx-auto mt-10 p-6 rounded-md shadow-md bg-gray-200 text-gray-900">
                            <div className="flex space-x-4">
                                <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <p className="text-md font-semibold">{user?.displayName}</p>
                                    <span className="text-xs dark:text-gray-400">{user?.email}</span>
                                </div>
                            </div>
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase text-stone-600">Selected Course:</span>
                                <h2 className="text-xl font-semibold text-amber-700 tracking-wide">{title}</h2>
                            </div>
                            <p className="dark:text-gray-100">{description}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='mt-10'>
                            <h2 className='text-5xl font-semibold text-center'>Please Verify Your Email</h2>
                            <p className='text-center text-2xl mt-3'>Verification Link is Sent to Your Email</p>
                        </div>
                    </>
            }
        </div>
    );
};

export default CheckOut;