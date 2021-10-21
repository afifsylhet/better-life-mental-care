import './Login.css'
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading, signInWithEmail, getNameValue, getEmailValue, getPasswordValue, passwordSignIn, checkbox, check, setError, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';



    const googleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirectUrl)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    };

    const signInbyPassword = () => {
        passwordSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const loginByEmail = () => {
        signInWithEmail()
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }





    return (
        <div>
            <br />
            {(error) && <h4 className="text-center text muted mb-3">{error}
                <h4>Please try again. Thank you</h4>
                <form className="m-2">
                    <button type="submit" className="btn btn-success px-2" href="">Reload Page</button>
                </form>
            </h4>}

            <div className="width border border-success p-2">
                <div>
                    {(check === false) ? (< p className="fs-4" > Sign in with Email</p>) : (<p className="fs-4">Create account with Email</p>)}



                    <from>
                        {(check === true) ?
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Your full name</label>
                                <input type="text" className="form-control" onBlur={getNameValue} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div></div> :
                            <span></span>
                        }

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={getEmailValue} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onBlur={getPasswordValue} />
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={checkbox} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" htmlFor="exampleCheck1">Please check out this for create account</label>
                        </div>
                        {
                            (check === true) ? <button onClick={loginByEmail} className="btn btn-success me-4">Create Account</button> : <button onClick={signInbyPassword} className="btn btn-success">Sign In</button>
                        }
                    </from>

                </div>
                <br />
                <hr />


                <button className="btn w-100 btn-outline-success fs-3 my-3" onClick={googleSignIn}> <span><i class="fab fa-google"></i></span> Sign-in with Google</button>
            </div>
        </div >
    );
};

export default Login;