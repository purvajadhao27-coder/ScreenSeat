
import { useState } from "react";
import "./Signin.css";
import { useNavigate, Link } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        if (!email.trim() || !password) {
            window.alert("Please enter your email and password.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("http://localhost:1234/Login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
                window.alert(data.msg || data.message || "Login failed. Please try again.");
                return;
            }
            window.alert(data.msg || data.message || "Login successful!");
            sessionStorage.setItem("email", email);
            if (data.token) sessionStorage.setItem("token", data.token);
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            window.alert("Unable to connect to the backend. Check whether the server is running on port 1234.");
        } finally {
            setLoading(false);
        }
    };

    const clearForm = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <div className="signin-page">
            <div className="signin-card">
                <h2>Sign In</h2>
                <p className="signin-subtitle">Welcome back! Please log in to continue.</p>
                <form onSubmit={loginUser}>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" className="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" className="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? "Hide Password" : "Show Password"}</button>
                    <button type="submit" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
                    <button type="button" onClick={clearForm} disabled={loading}>Clear Form</button>
                </form>
                <hr />
                <p className="signin-footer">Don't have an account? <Link to="/signup">Register Here</Link></p>
            </div>
        </div>
    );
}
export default Signin;
