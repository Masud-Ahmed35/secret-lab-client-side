import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='divide-x-2 w-[90%] mx-auto mt-10 grid grid-cols-5 '>
            {/* ---------------left side bar-------------*/}
            <div className='col-span-1 mr-5'>
                {
                    courses.map(course => <p key={course.id}><button onClick={() => navigate(`/courses/${course.id}`)} className="btn btn-outline btn-success w-full my-1">{course.title}</button></p>)
                }
            </div>

            {/* -------------Courses Card Section----------- */}
            <div className='col-span-4 grid grid-cols-3'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;