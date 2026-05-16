import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../features/product/productSlice";

const ViewProduct = () => {
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product?.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
