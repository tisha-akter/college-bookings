import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import pic from '../../assets/login/Wavy_Gen-01_Single-07.jpg'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { login } = useContext(AuthContext);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (data) => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 md:mr-12 mr-0">
                        <img src={pic} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center font-bold text-indigo-600 my-6">Login now!</h1>
                        <div className="card-bod px-6 py-6">

                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control">
                                    <label className="label  border-indigo-600">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-indigo-600" />

                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label  border-indigo-600">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative w-full'>
                                        <input type={showPassword ? 'text' : 'password'}
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })} placeholder="password" className="input input-bordered w-full border-indigo-600" />

                                        <span className="absolute top-3 right-0 pr-3">
                                            {showPassword ? (
                                                <FaEyeSlash className="h-6 text-gray-700 cursor-pointer" onClick={handleTogglePassword} />
                                            ) : (
                                                <FaEye className="h-6 text-gray-700 cursor-pointer" onClick={handleTogglePassword} />
                                            )}
                                        </span>
                                    </div>

                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="login" className="btn bg-indigo-600" />
                                </div>
                            </form>

                            <p><small>Do not have any account?
                                <Link to="/sign-up">Sign Up</Link>
                            </small></p>
                            
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;