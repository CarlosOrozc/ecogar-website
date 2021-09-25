import { gql } from '@apollo/client';

export default class ProductQuery {
    static PRODUCT_LIST = gql`
        query productList($limit: Int!, $offset: Int!, $filter: SearchInProductInput) {
            productList(offset: $offset, limit: $limit, filter: $filter) {
                totalCount
                products {
                    name
                    url
                    _id
                    price
                    description
                }
            }
        }
    `;
}