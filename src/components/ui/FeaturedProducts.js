import { useGetRandomProductsQuery } from '@/redux/api/apiSlice';
import React from 'react';
import FeaturedProduct from './FeaturedProduct';

const FeaturedProducts = () => {
    const { data: featuredProducts, isLoading } = useGetRandomProductsQuery();
    return (
        <div className='mt-10 md:mt-16'>
            <h2 className=' uppercase text-xl md:text-3xl text-secondary text-center'>Featured Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-36 my-5 md:my-4 lg:my-6'>
                {
                    featuredProducts?.map((featuredProduct) => <FeaturedProduct
                        key={featuredProduct._id}
                        featuredProduct={featuredProduct}
                    ></FeaturedProduct>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;