import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Call backend API
      const resp = await fetch(
        import.meta.env.VITE_SERVER_URL + "/api/admin-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );
      const data = await resp.json();
      if (resp.ok && data?.success) {
        localStorage.setItem("adminAuthenticated", "true");
        // Optionally refresh stored profile username for UI
        try {
          const p = await fetch(
            import.meta.env.VITE_SERVER_URL + "/api/admin/profile"
          );
          const pd = await p.json();
          if (p.ok && pd?.success && pd?.username) {
            localStorage.setItem("admin.username", pd.username);
          }
        } catch {}
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/admin-dashboard"), 800);
      } else {
        setMessage(data?.message || "Invalid username or password");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-domine font-medium text-[#b37556] mb-2">
                Admin Login
              </h1>
              <p className="text-gray-600">Sign in to access the admin panel</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {message && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    message.includes("successful")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#c98963] hover:bg-[#be7f58] text-white py-3 px-4 rounded-md font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-[#c98963] hover:text-[#be7f58] text-sm"
              >
                ← Back to Home
              </Link>
            </div>

            {/* Helper note removed: no demo credentials shown */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
