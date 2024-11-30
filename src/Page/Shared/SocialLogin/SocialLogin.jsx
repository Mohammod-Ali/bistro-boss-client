import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()

    const handleGoogleSignIn =() => {
        googleSignIn()
        .then(result => {
            console.log(result)
        })
    }

  return (
    <div className="p-8">
        <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn  btn-warning">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
