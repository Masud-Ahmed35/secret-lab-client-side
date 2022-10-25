import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, img, title, view, ratings, badge } = course;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/courses/${id}`)
    }

    return (
        <div className='ml-5 mb-10 shadow-xl border-4 border-stone-500 rounded-xl hover:border-orange-700'>
            <div className="rounded-md shadow-md bg-gray-100 text-gray-900">
                <img src={img} alt="" className="object-cover object-center w-full shadow-xl rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-wide relative">{title}<span className="absolute top-1 badge badge-secondary badge-sm">{badge}</span></h2>
                        <p className="dark:text-gray-100">{ }</p>
                        <div className='flex justify-between'>
                            <p>Ratings: {ratings} star</p>
                            <p>Views: {view}</p>
                        </div>
                    </div>
                    <button onClick={handleNavigate} className="w-full normal-case text-lg font-semibold rounded-md btn btn-outline btn-info">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Course;