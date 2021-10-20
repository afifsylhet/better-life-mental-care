import './Login.css'
import React from 'react';
import useAuth from '../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';


const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    return (
        <div>
            <br />
            <div className="width border border-success p-2">
                <div>
                    <p>Sign-in with Email</p>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your full name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
                <br />
                <hr />


                <button className="btn w-100 btn-outline-success fs-3 my-3" onClick={signInWithGoogle}> <span><i class="fab fa-google"></i></span> Sign-in with Google</button>
            </div>

        </div>
    );
};

export default Login;