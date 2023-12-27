import { useState } from "react";

function PetItem({ pet }) {
  const [imageChange, setimageChange] = useState(pet.image);

  const change = () => {
    if (imageChange === pet.image) setimageChange(pet.image2);
    else {
      setimageChange(pet.image);
    }
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={imageChange} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={change} type="button" className="btn btn-info">
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
