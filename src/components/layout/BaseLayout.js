import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/layout/Navigation';

const BaseLayout = ({ children }) => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full justify-between flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <img className="h-12 w-12" src="data:image/jpeg;base64,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" alt="Workflow" />
                            </a>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Navigation />
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
};

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BaseLayout;