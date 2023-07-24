import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn, singInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleGithubSignIn = () => {
        console.log('github is comming')
        singInWithGithub()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('https://college-bookings-server-tisha-akter.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <div className="">
                    <button onClick={handleGoogleSignIn} className="btn btn-circle text-xl mx-2">
                        <FaGoogle className="text-red-600"></FaGoogle>
                    </button>

                    <button onClick={handleGithubSignIn} className="btn btn-circle text-xl mx-2">
                        <FaGithub className='text-black text-xl mr-1'></FaGithub>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;