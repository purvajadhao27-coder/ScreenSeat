
import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const registerUser = async (e) => {
        e.preventDefault();

        
        if (password !== confirmpassword) {
            alert('Password and Confirm Password do not match!');
            return;
        }

        setLoading(true);

        try {
            // Connect to backend API
            const response = await fetch(
                'http://localhost:1234/Register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (response.status===200){
                alert ("thank you for registartion");
                sessionStorage.setItem("email",email);
                navigate("/OTPverify");
       }

            else {
                alert ("unable , please try");
            }

            if (!response.ok) {
                alert(data.msg || 'Registration failed!');
                return;
            }

            alert(data.msg || 'Registration successful!');

            
            setEmail('');
            setPassword('');
            setConfirmpassword('');

        } 
        catch (error) {
            console.error('Registration error:', error);

            alert(
                 'Please check whether the backend server is running on port 1234.'
            );
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        setEmail('');
        setPassword('');
        setConfirmpassword('');
    };

    return (
        <div className="signup-page">
            <div className="signup-card">

                <h2>Create Account</h2>

                <p className="signup-subtitle">
                    Register to get started
                </p>

                <form onSubmit={registerUser}>

                    <label htmlFor="email">
                        Email Address:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />

                    <label htmlFor="password">
                        Password:
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        minLength={4}
                        required
                    />

                    <label htmlFor="confirmPassword">
                        Confirm Password:
                    </label>

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmpassword}
                        onChange={(e) => {
                            setConfirmpassword(e.target.value);
                        }}
                        minLength={4}
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>

                    <button
                        type="button"
                        onClick={clearForm}
                        disabled={loading}
                    >
                        Clear Form
                    </button>

                </form>

                <hr />

                <p className="signup-footer">
                    Already have an account?{' '}
                    <a href="/login">
                        Login Here
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Signup;
