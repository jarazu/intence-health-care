
import { useLocation, useParams } from 'react-router';

const ServiceDetails = () => {
    const {handle} = useParams()
   const location = useLocation() 
   const {id, name, price, description, img} = location.state.detail

console.log(handle)
console.log(name)

    return (
        <div className="container details-service my-5">
            <img src={img} alt="" className="img-fluid"/>
            <h2 className="m-5">{name}</h2>
            <h4>Price: ${price}</h4>
            <p className="fw-bold pb-4">{description}</p>
        </div>
    );
};

export default ServiceDetails;