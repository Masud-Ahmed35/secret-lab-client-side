import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, addNameAndPhoto } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [photo, setPhoto] = useState(user?.photoURL);
    const navigate = useNavigate();

    const handleName = e => {
        setName(e.target.value);
    }
    const handlePhoto = e => {
        setPhoto(e.target.value);
    }
    const handleUpdate = (event) => {
        event.preventDefault();

        addNameAndPhoto(name, photo)
            .then(() => {
                toast.success('Update Your Name & Photo')

                // Refresh page for instant rendaring
                window.location.reload(false);
                navigate('/profile');

            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='mt-10 mb-12'>
            <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
                <form className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Email" className="block dark:text-gray-400">Email Address</label>
                        <input readOnly defaultValue={user?.email} type="email" name="email" id="Email" placeholder="" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Name" className="block dark:text-gray-400">Full Name</label>
                        <input onBlur={handleName} defaultValue={name} type="text" name="name" id="Name" placeholder="Type Your Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="PhotoURL" className="block dark:text-gray-400">Photo URL</label>
                        <input onBlur={handlePhoto} defaultValue={photo} type="text" name="photo" id="PhotoURL" placeholder="Give Your Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-900 focus:dark:border-violet-400" />
                    </div>
                    <button onClick={handleUpdate} className="block w-full py-2 text-center text-xl font-bold rounded-sm text-gray-900 bg-violet-400 hover:border-2">Update</button>
                </form>
            </div>
        </div >
    );
};

export default Profile;