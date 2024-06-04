import { useState, useEffect, useRef } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/Button";
import Counter from "../components/fragments/Counter";

const products = [
	{
		id: 1,
		name: "Shoes",
		price: 100,
		img: "/images/shoes-1.jpg",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iusto."
	},
	{
		id: 2,
		name: "Shoes 2",
		price: 120,
		img: "/images/shoes-1.jpg",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatum delectus sequi asperiores sint laborum error animi,"
	},
	{
		id: 3,
		name: "Shoes 3",
		price: 130,
		img: "/images/shoes-1.jpg",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatum delectus sequi asperiores sint"
	},
];

const email = localStorage.getItem('email');

const ProductPage = () => {

	const [cart, setCart] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	// useEffect //

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')) || []);
	}, []);

	useEffect(() => {
		if (cart.length > 0) {
			const sum = cart.reduce((acc, item) => {
				const product = products.find((product) => product.id === item.id);
				return acc + product.price * item.qty;
			}, 0);
			setTotalPrice(sum);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		window.location.href = '/login';
	};

	const handleAddToCart = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(
				cart.map((item) => item.id === id
					? { ...item, qty: item.qty + 1 }
					: item)
			);
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};

	// useRef //

	const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

	const handleAddToCartRef = (id) => {
		cartRef.current = [...cartRef.current, { id, qty: 1 }];
		localStorage.setItem('cart', JSON.stringify(cartRef.current));
	};

	const totalPriceRef = useRef(null);

	useEffect(() => {
		if (cart.length > 0) {
			totalPriceRef.current.style.display = 'table-row';
		} else {
			totalPriceRef.current.style.display = 'none';
		}
	}, [cart]);

	return (
		<>
			<div className="flex justify-end h-20 bg-blue-600 text-white items-center px-5">
				{email}
				<Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
			</div>
			<div className="flex justify-center py-5">
				<div className="w-4/6 flex flex-wrap">
					{products.map((product) => (
						<CardProduct key={product.id}>
							<CardProduct.Header img={product.img} />
							<CardProduct.Body name={product.name}>
								{product.desc}
							</CardProduct.Body>
							<CardProduct.Footer
								price={product.price}
								id={product.id}
								handleAddToCart={handleAddToCart}
							/>
						</CardProduct>
					))}
				</div>
				<div className="w-2/6">
					<h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
					<table className="text-left table-auto border-separate border-spacing-x-5">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => {
								const product = products.find((p) => p.id === item.id);
								return (
									<tr key={item.id}>
										<td>{product.name}</td>
										<td>${product.price}</td>
										<td>{item.qty}</td>
										<td>${product.price * item.qty}</td>
									</tr>
								)
							})}
							<tr ref={totalPriceRef}>
								<td colSpan={3}>
									<b>Total price</b>
								</td>
								<td>
									<b>${" "}{totalPrice}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <div className="mt-5 flex justify-center mb-5">
				<Counter></Counter>
			</div> */}
		</>
	);
};

export default ProductPage;