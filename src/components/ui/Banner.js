import React from 'react';
import bannerImage from "../../assets/images/banner-image.svg"
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="md:grid grid-cols-2 bg-base-300 py-5 md:py-8 lg:py-10">
            <div className='flex justify-center items-center px-3'>
                <div>
                    <div className=' text-3xl md:text-4xl font-bold text-secondary'>
                        <p className='text-white text-3xl md:text-5xl'>Build Your - </p>
                        <Typewriter
                            options={{
                                strings: [
                                    'Dream Pc',
                                    'Powerful Computer',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <h3 className='text-lg'>Empowering Your Tech Dreams: Discover, Build, and Excel with Dream Tech!</h3>
                    <p className='text-sm font-semibold text-white font-sans'> -stay with <span className='text-lg text-secondary font-bold'>dream tech</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Image src={bannerImage} height={300} width={500} alt='banner-image' />
            </div>
        </div>
    );
};

export default Banner;