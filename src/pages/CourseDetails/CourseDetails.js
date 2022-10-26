import React, { createRef } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { id, title, img, description, ratings, view, comments } = data;

    const handleNavigate = () => {
        navigate(`/checkout/${id}`)
    }

    return (
        <div className='mt-10 ml-10 mb-10 lg:ml-24' ref={ref}>
            <div className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-900">
                <div className="flex justify-between pb-2 border-b-2 rounded-lg border-red-600">
                    <div className="flex items-center">
                        <Link className="text-2xl font-bold text-gray-900">{title}</Link>
                    </div>
                    <Pdf targetRef={ref} filename={`Course-${id}.pdf`}>
                        {
                            ({ toPdf }) => <button onClick={toPdf} className="btn btn-outline normal-case">Download pdf</button>
                        }
                    </Pdf>
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
                <div className='flex justify-between'>
                    <button onClick={() => navigate('/courses')} className="btn btn-outline w-[45%] normal-case text-lg">Previous Page</button>
                    <button onClick={handleNavigate} className="btn btn-outline btn-success w-[45%] normal-case text-lg">Premium Access</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;