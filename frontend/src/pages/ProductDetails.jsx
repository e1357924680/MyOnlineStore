function ProductDetail() {
	return (
		<div className="container py-4">
			<div className="window">
				<div className="row">
					<div className="col-md-6">
						<div className="bg-light mb-3 rounded-5" style={{ height: "300px" }}></div>
					</div>
					<div className="col-md-6">
						<div className="d-flex align-items-center gap-3 ">
							<h2 className="text-primary">[Product Name]</h2>
							<span className="badge bg-secondary">[Type]</span>
						</div>
						<div className="d-flex gap-5 mb-4">
							<p className="text-secondary">[Product Price]</p>
						</div>
						<p className="mb-4">[Product Description]</p>
						<button className="btn btn-primary disabled">Add to Cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
