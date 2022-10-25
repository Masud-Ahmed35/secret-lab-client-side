import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='divide-x-2 w-[90%] mx-auto mt-10 grid grid-cols-5 '>
            {/* ---------------left side bar-------------*/}
            <div className='col-span-1 mr-5'>
                {
                    courses.map(course => <p key={course.id}><button className="btn btn-outline btn-success w-full my-1">{course.title}</button></p>)
                }
            </div>

            {/* -------------Courses Card Section----------- */}
            <div className='col-span-4'>

            </div>
        </div>
    );
};

export default Courses;