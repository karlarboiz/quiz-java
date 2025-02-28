import React from "react";
import styles from "./ForgotPassword.module.css";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";

const ForgotPassword = () => {
 
  // const [loading, setLoading] = useState(false);
    // const data = useActionData();
    // const submit = useNavigation();
    // const state = submit.state;

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Forgot Password</h2>
        <Form method="post">
          <div className={styles["form-group"]}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input}
            />
          </div>
          <Button
            type="submit"
       
          >
            Send
          </Button>
        </Form>
       
      </div>
    </div>
  );
};

export default ForgotPassword;