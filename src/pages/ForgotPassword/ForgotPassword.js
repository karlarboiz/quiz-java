import React, { useState } from "react";
import styles from "./ForgotPassword.module.css";
import { Form, useActionData, useNavigation } from "react-router-dom";

const ForgotPassword = () => {
 
  const [loading, setLoading] = useState(false);
    const data = useActionData();
    const submit = useNavigation();
    const state = submit.state;

    console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Forgot Password</h2>
        <Form method="post">
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
          
          </button>
        </Form>
       
      </div>
    </div>
  );
};

export default ForgotPassword;