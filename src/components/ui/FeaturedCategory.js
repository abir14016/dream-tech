import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const FeaturedCategory = ({ category }) => {
    const { title, bgColor, icon } = category;
    let categoryClass = "bg-gray-700"; // Default background color class

    // Apply specific background color classes based on bgColor
    if (bgColor === "pink-300") {
        categoryClass = "bg-pink-300";
    } else if (bgColor === "indigo-300") {
        categoryClass = "bg-indigo-300";
    } else if (bgColor === "yellow-300") {
        categoryClass = "bg-yellow-300";
    } else if (bgColor === "blue-300") {
        categoryClass = "bg-blue-300";
    } else if (bgColor === "green-300") {
        categoryClass = "bg-green-300";
    } else if (bgColor === "orange-300") {
        categoryClass = "bg-orange-300";
    }
    return (
        <Link href="/" className='md:px-16 lg-px24'>
            <div className={`${categoryClass} shadow-lg rounded-lg h-36 group hover:opacity-70`}>
                <div className='flex justify-end'>
                    <div className="badge badge-primary">featured</div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon className='text-5xl font-extrabold text-secondary group-hover:text-white group-hover:animate-spin' icon={icon} />
                        </div>
                        <div>
                            <h2 className='text-center text-lg font-semibold text-gray-600'>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedCategory;