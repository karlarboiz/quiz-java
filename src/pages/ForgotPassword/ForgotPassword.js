import React, { useState } from "react";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Simulate API call to request password reset
    try {
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage("If the email is registered, you'll receive a reset link shortly.");
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;