import { Link } from "react-router-dom";
import { GiShop } from "react-icons/gi";
import { FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { useState, useEffect } from "react";

const Home = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="container py-5 text-dark" style={{ backgroundColor: "#f8f9fa" }}>
			<div className="row align-items-center mb-5">
				<div className="col text-center text-md-start md-6">
					<h1 className="display-4 fw-bold text-dark">Welcome to Our Store</h1>
					<p className="lead text-secondary">
						Explore our collection or manage your own items.
					</p>
					<div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
						<Link
							to={isMobile ? "#" : "/create_product"}
							className={`btn btn-dark btn-lg rounded-pill ${isMobile ? "disabled" : ""}`}
						>
							Create Product
						</Link>
						<Link
							to="/products"
							className="btn btn-outline-dark btn-lg rounded-pill"
						>
							Browse Products
						</Link>
					</div>
				</div>
				<div className="col text-center md-6">
					<div className="bg-white rounded p-5 border border-secondary">
						<GiShop size={150} color="#6c757d" />
					</div>
				</div>
			</div>

			<div className="row text-center">
				<div className="col mb-4">
					<div className="card h-100 border-0 rounded shadow-sm bg-white">
						<div className="p-4">
							<FaBoxOpen size={50} className="mb-3 text-dark" />
							<h2 className="text-dark">Flexible Inventory</h2>
							<p className="text-muted">Add and manage items in your store.</p>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card h-100 border-0 rounded shadow-sm bg-white">
						<div className="p-4">
							<FaClipboardList size={50} className="mb-3 text-dark" />
							<h2 className="text-dark">Organized Catalog</h2>
							<p className="text-muted">Maintain clear product listings for customers.</p>
						</div>
					</div>
				</div>
				<div className="col mb-4">
					<div className="card h-100 border-0 rounded shadow-sm bg-white">
						<div className="p-4">
							<GiShop size={50} className="mb-3 text-dark" />
							<h2 className="text-dark">Ready to Launch</h2>
							<p className="text-muted">A flexible base ready for your business idea.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
