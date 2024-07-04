import { Link } from "react-router-dom";
import ThinkingImg from "../assets/images/thinking.jpeg";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="card bg-base-300 w-96 h-auto shadow-xl">
        <figure className="px-8 pt-8 mx-auto">
          <img
            src={ThinkingImg}
            className="object-contain rounded-xl"
            alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">404! Not Found!!</h2>
          <p>But don't worry for that, keep calm and <span className="font-semibold text-secondary">breathe</span> instead</p>
          <div className="card-actions">
            <Link to="/">
              <button className="btn btn-primary btn-link">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage