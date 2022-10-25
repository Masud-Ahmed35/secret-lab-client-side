import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { title, img, description, ratings, view, comments } = data;

    return (
        <div className='mt-10'>
            <div className="max-w-lg mx-auto p-4 shadow-md bg-gray-200 text-gray-900">
                <div className="flex justify-between pb-2 border-b-2 rounded-lg border-red-600">
                    <div className="flex items-center">
                        <Link className="text-2xl font-bold text-gray-900">{title}</Link>
                    </div>
                    <button className="btn btn-outline normal-case">Download pdf</button>
                </div>
                <div className="space-y-4 mt-4 mb-5">
                    <div className="space-y-2">
                        <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800">{description}</p>
                    </div>
                    <div className='text-lg font-medium font flex justify-around'>
                        <p>Ratings: {ratings}</p>
                        <p>Views: {view}</p>
                        <p>Comments: {comments}</p>
                    </div>
                </div>
                <button onClick={() => navigate('/courses')} className="btn btn-outline btn-success w-full normal-case text-lg">Go Back To Previous Page</button>
            </div>
        </div>
    );
};

export default CourseDetails;