import './Login.css'
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading, signInWithEmail, getNameValue, getEmailValue, getPasswordValue, passwordSignIn } = useAuth();
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
            .finally(() => setIsLoading(false));
    };

    const signInbyPassword = () => {
        passwordSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .finally(() => setIsLoading(false));
    }

    const loginByEmail = () => {
        signInWithEmail()
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .finally(() => setIsLoading(false));
    }


    return (
        <div>
            <br />
            <div className="width border border-success p-2">
                <div>
                    <p>Sign-in with Email</p>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your full name</label>
                            <input type="text" className="form-control" onBlur={getNameValue} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
                        </div>


                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={getEmailValue} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>


                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onBlur={getPasswordValue} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={loginByEmail} className="btn btn-success me-4">Create Account</button>
                        <button onClick={signInbyPassword} className="btn btn-success">sign In Account</button>
                    </form>

                </div>
                <br />
                <hr />


                <button className="btn w-100 btn-outline-success fs-3 my-3" onClick={googleSignIn}> <span><i class="fab fa-google"></i></span> Sign-in with Google</button>
            </div>

        </div>
    );
};

export default Login;