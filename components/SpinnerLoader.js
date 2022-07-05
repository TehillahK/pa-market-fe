import { useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const SpinnerLoader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
   return(
      <div  className="sweet-loading d-flex flex-column">
          <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
          <p>Thank you for joining , please stay patient as we process your data</p>
      </div>
  )
}

export default SpinnerLoader;
