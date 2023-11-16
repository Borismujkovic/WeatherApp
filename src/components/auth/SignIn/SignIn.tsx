import React from "react";
import styles from "./SignIn.module.css";
import { Row, Col } from "antd";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { SignInFormValues } from "./SignIn.types";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const methods = useForm<SignInFormValues>();
  const { handleSubmit, control, formState } = methods;
  const { errors } = formState;

  const onSubmit = async ({ email, password }: SignInFormValues) => {
    console.log("email", email);
    console.log("password", password);
    console.log("error", errors);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContent}>
        <h1>Login</h1>
        <FormProvider {...methods}>
          <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
              <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="">Email</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input placeholder="Email" {...field} />
                    )}
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="">Password</label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    )}
                  />
                </div>
              </Col>
            </Row>
            <div className={styles.loginBtn}>
              <button className={styles.submit}>Login</button>
            </div>
          </form>
        </FormProvider>
        <div className={styles.account}>
          <p>
            Don't have an account, please <br />{" "}
            <NavLink to="/register">Sign Up</NavLink>
            <br />
            or <br />
            <NavLink to="/">
            <button className={styles.submit}>Back to Home</button>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
