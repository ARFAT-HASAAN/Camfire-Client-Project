import React from 'react';

const Feature = () => {
    return (
        <div className='p-5 my-2 md:my-5 backround'>

            <h2 className='text-2xl md:text-4xl font-bold text-center my-2 md:my-6'>Why Choose Us?</h2>
            <p className='font-bold text-center text-2xl text-gray-500 my-2 md:my-4'>We have the best qualityful camera for you</p>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='flex items-center shadow-2xl p-4 my-2'>
                    <div>
                        <i className="fas fa-truck text-6xl font-bold"></i>
                    </div>
                    <div className='px-2'>
                        <h4 className='text-2xl font-bold my-2' >Free home delivery</h4>
                        <p>Provide free home delivery for the all product over $100</p>
                    </div>
                </div>

                <div className='flex items-center shadow-2xl p-4 my-2'>

                    <div>
                        <i className="fas fa-ribbon text-6xl font-bold"></i>
                    </div>
                    <div className='px-2'>
                        <h4 className='text-2xl font-bold my-2'>Quality Products</h4>
                        <p>We ensure the product quality that is our main goal</p>
                    </div>

                </div>


                <div className='flex items-center shadow-2xl p-4 my-2'>

                    <div>
                        <i className="fas fa-exchange-alt text-6xl font-bold"></i>
                    </div>
                    <div className='px-2'>
                        <h4 className='text-2xl font-bold my-2'>3 Days Return</h4>
                        <p>Our Return Policy is very simple and easy for all</p>
                    </div>

                </div>


                <div className='flex items-center shadow-2xl p-4
                my-2'>

                    <div>
                        <i className="fas fa-headset text-6xl font-bold"></i>
                    </div>
                    <div className='px-2'>
                        <h4 className='text-2xl font-bold my-2'>Online Support</h4>
                        <p>Provide 24/7 online support for any information</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Feature;