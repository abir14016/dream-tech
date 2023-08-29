import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProduct = ({ featuredProduct }) => {
    const { _id, image, name, category, status, price, individualRating } = featuredProduct;
    const filledStars = Math.floor(individualRating);
    return (
        <div className="p-4">
            <Link href={`/featured-product/${_id}`}
                className="c-card block bg-base-200 shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    <Image
                        // style={{ width: "auto", height: "auto" }}
                        className="absolute inset-0 h-full w-full object-cover"
                        src={image}
                        alt="product-image"
                        layout="fill"
                        sizes="100vw"
                    />
                </div>
                <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-warning text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{category}</span>
                    <h2 className="mt-2 mb-2  font-bold">{name}</h2>
                    <div className="mt-3 flex items-center">
                        <span className="text-sm font-semibold"></span>&nbsp;<span className="font-bold text-xl">{price}</span>&nbsp;<span className="text-xl font-semibold">$</span>
                    </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-500">
                    {
                        status === 'In Stock' ? <p className='text-success'>{status}</p> : <p className='text-error'>{status}</p>
                    }

                </div>
                <div className="p-4 flex items-center text-sm text-gray-600">
                    {Array.from({ length: 5 }, (_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            className={`text-${index < filledStars ? 'secondary' : ''}`}
                            icon={faStar}
                        />
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default FeaturedProduct;