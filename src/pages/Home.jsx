import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row row-gap-3">
        {products.map((value, index) => {
          const { id, title, price, image } = value;

          return (
            <div className="col-md-3" key={index}>
              <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />

                <div className="card-body">
                  <h5 className="card-title">{title}</h5>

                  <p className="card-text">
                    <strong>${price}</strong>
                  </p>

                  <Link to={`./view-product/${id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
