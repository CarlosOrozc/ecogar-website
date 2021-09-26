import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client'
import ProductQuery from 'services/query/ProductQuery';

const ProductItem = ({ record }) => {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-90 cursor-pointer m-auto">
            <a className="w-full block h-full" href={`/product#${record._id}`}>
                <img src={record.url} className="max-h-40 w-full object-cover" alt={record.name} />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">
                        {`$${record.price}`}
                    </p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {record.name}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        {record.description}
                    </p>
                </div>
            </a>
        </div>
    )
}

const Product = () => {
    const [record, setRecord] = useState([]);
    const { loading, data } = useQuery(ProductQuery.PRODUCT_LIST, { variables: { offset: 0, limit: 100 } });

    useEffect(() => {
        if (data?.productList) {
            const { productList } = data;

            if (productList?.products) {
                setRecord(productList.products)
            }
        }
    }, [data, loading]);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="container">
                <div className="header flex items-end justify-between mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                            Lastest articles
                        </p>
                        <p className="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p>
                    </div>
                    <div className="text-end" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {record.map((item, index) => <ProductItem key={index} record={item} />)}
                </div>
            </div>
        </div>
    );
};

export default Product;