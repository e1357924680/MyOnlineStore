import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../services/productService";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const ManageProducts = () => {
	const [products, setProducts] = useState([]);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		getAllProducts()
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.error("Failed to fetch items", err);
			});
	}, []);

	const handleDelete = async (itemId) => {
		console.log("Deleting item with ID:", itemId);
		deleteProduct(itemId, token)
			.then(() => {
				setProducts(products.filter((item) => item._id !== itemId));
				toast.success("Item deleted successfully");
				window.location.reload();
			})
			.catch((error) => {
				console.error("Failed to delete item", error);
			});
	};

	return (
		<div className="container mt-5">
			<h2 className="text-primary">Manage Items</h2>
			<div className="row">
				{products.map((item) => (
					<div className="col-md-4 mb-4" key={item._id}>
						<div className="card">
							{item.image ? (
								<img
									src={`${process.env.REACT_APP_API_URL}images/${item.image}`}
									alt={item.name}
									className="img-fluid mb-3"
								/>
							) : (
								<img
									src={`/images/default_placeholder.png`}
									alt={item.name}
									className="img-fluid mb-3"
								/>
							)}
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.description}</p>
								<p className="card-text">Price: {item.price}</p>
								<div className="d-flex justify-content-between">
									<button
										className="btn btn-danger me-2"
										onClick={() => handleDelete(item._id)}
									>
										Delete
									</button>
									<Link
										to={`/edit_product/${item._id}`}
										className="btn btn-primary"
									>
										Edit
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="d-flex justify-content-center mt-4">
				<Link
					to="/create_product"
					className="btn btn-success"
				>
					Add New Item
				</Link>
			</div>
		</div>
	);
};

export default ManageProducts;
