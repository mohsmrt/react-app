import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/Button";

const products = [
    {
        id: 1,
        name: "Shoes",
        price: "$100",
        img: "/images/shoes-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iusto."
    },
    {
        id: 2,
        name: "Shoes 2",
        price: "$120",
        img: "/images/shoes-1.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatum delectus sequi asperiores sint laborum error animi,"
    },
];

const email = localStorage.getItem('email');

const ProductPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-5">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header img={product.img} />
                        <CardProduct.Body name={product.name}>
                            {product.desc}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    );
};

export default ProductPage;