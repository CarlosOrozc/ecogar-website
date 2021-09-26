import React from 'react';

const Home = props => {
    return (
        <div className="home-full-width">
            <div className="home-container">
                <div className="home-box-shadow-banner"/>
                <img className="home-image-banner" src="https://cdn.shopify.com/s/files/1/0454/2477/1240/files/slider-3-bg.jpg?v=1597230985" alt=""/>
                <div className="container mx-auto p-8 flex h-full items-start justify-center flex-col">
                    <h4 className="text-white text-3xl z-30 mb-6">
                        Dónde puedo conseguirlo?
                    </h4>
                    <p className="w-4/12 text-white	font-medium z-30">Note that unlike containers you might have used in other frameworks, Tailwind’s
                        container does not center itself automatically and does not have any built-in horizontal padding.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;