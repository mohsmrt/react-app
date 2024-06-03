import { useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/Button";

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

	const [cart, setCart] = useState([

		{
			id: 1,
			qty: 1,
		}
	]);

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
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default ProductPage;