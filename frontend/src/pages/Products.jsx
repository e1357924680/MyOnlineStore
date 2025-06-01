import { Link } from "react-router-dom";

function Products() {
	return (
		<div className="container py-4">
			<div className="row gy-4 py-4">
				{/* Product cards will be dynamically inserted here in the future */}
				<div className="col-md-4">
					<div className="card text-center p-4 shadow-sm">
						<div className="placeholder-glow mb-3 rounded-5 bg-light" style={{height: "200px"}}></div>
						<h5 className="text-primary">[Product Name]</h5>
						<p className="text-secondary">[Price]</p>
						<Link to="#" className="btn btn-primary disabled">
							View Details
						</Link>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card text-center p-4 shadow-sm">
						<div className="placeholder-glow mb-3 rounded-5 bg-light" style={{height: "200px"}}></div>
						<h5 className="text-primary">[Product Name]</h5>
						<p className="text-secondary">[Price]</p>
						<Link to="#" className="btn btn-primary disabled">
							View Details
						</Link>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card text-center p-4 shadow-sm">
						<div className="placeholder-glow mb-3 rounded-5 bg-light" style={{height: "200px"}}></div>
						<h5 className="text-primary">[Product Name]</h5>
						<p className="text-secondary">[Price]</p>
						<Link to="#" className="btn btn-primary disabled">
							View Details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Products;
