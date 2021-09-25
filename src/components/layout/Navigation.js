import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const router = [
    {
        title: "Inicio",
        route: '/'
    },
    {
        title: "Nosotros",
        route: '/about'
    },
    {
        title: "Productos",
        route: '/product'
    },
    {
        title: "Contáctanos",
        route: '/contact'
    }
];

const Navigation = ({ route }) => {
    const result = useLocation();

    return (
        <>
            {router.map((item, index) => {
                console.log(result?.pathname)
                const selected = item.route === result?.pathname ? 'text-gray-800' : '';
                return (<NavLink
                        key={index}
                        to={item.route}
                        className={`text-gray-300 ${selected} hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                    >
                    {item.title}</NavLink>
                )
            })}
        </>
    )
};

export default Navigation;