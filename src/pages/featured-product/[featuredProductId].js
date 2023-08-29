import React from 'react';

const ProductDetailPage = ({ product }) => {
    if (!product) {
        return <p>Loading....</p>
    }
    console.log(product);
    return (
        <div>
            <h2>Product detail page</h2>
        </div>
    );
};

export default ProductDetailPage;


export const getServerSideProps = async (context) => {
    const { params } = context
    console.log(params.featuredProductId)
    const res = await fetch(`http://localhost:5000/product/${params.featuredProductId}`)
    const data = await res.json()

    return {
        props: {
            product: data
        }
    }
}