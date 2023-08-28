import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const FeaturedCategory = ({ category }) => {
    const { title, bgColor, icon } = category;
    return (
        <Link href="/" className='md:px-16 lg-px24'>
            <div className={`bg-${bgColor} shadow-lg rounded-lg h-36  group hover:opacity-70`}>
                <div className='flex justify-end'>
                    <div className="badge badge-primary">featured</div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon className='text-5xl font-extrabold text-white group-hover:text-secondary' icon={icon} />
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