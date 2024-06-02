import CardProduct from "../components/fragments/CardProduct";
const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header img="/images/shoes-1.jpg" />
                <CardProduct.Body title="Shoes">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil reiciendis saepe ea rem maxime laboriosam, nostrum, recusandae quasi repellat, ipsam vitae officiis iure dolores laudantium! Hic quam rerum optio nemo.
                </CardProduct.Body>
                <CardProduct.Footer price="$100" />
            </CardProduct>
        </div>
    );
};

export default ProductPage;