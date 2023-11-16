import React from "react";
import styles from "./Signup.module.css";
import { Row, Col } from "antd";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { SignUpFormValues } from "./Signup.types";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const methods = useForm<SignUpFormValues>();
  const { handleSubmit, control, formState, watch } = methods;
  const { errors } = formState;

  const watchPassword = watch("password");

  const onSubmit = async ({ name, email, password }: SignUpFormValues) => {
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("error", errors);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signupContent}>
        <h1>SignUp</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
              <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="name">Full Name</label>
                  <Controller
                    control={control}
                    name="name"
                    rules={{ required: "Please enter your name" }}
                    render={({ field }) => (
                      <input placeholder="Name" {...field} />
                    )}
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="email">Email</label>
                  <Controller
                    control={control}
                    name="email"
                    rules={{ required: "Please enter your email" }}
                    render={({ field }) => (
                      <input placeholder="Email" {...field} />
                    )}
                  />
                </div>
              </Col>
              <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="password">Password</label>
                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: "Please enter your password" }}
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
              {/* <Col span={24}>
                <div className={styles.input}>
                  <label htmlFor="confirmPass">Confirm Password</label>
                  <Controller
                    control={control}
                    name="confirmPass"
                    rules={{
                      required: "Please confirm your password",
                      validate: (value: string) =>
                        value === watchPassword || "Password do not match",
                    }}
                    render={({ field }) => <input type="password" {...field} />}
                  />
                </div>
              </Col> */}
            </Row>
            <div className={styles.signupBtn}>
              <button type="submit" className={styles.submit}>
                Sign Up
              </button>
            </div>
          </form>
        </FormProvider>
        <div className={styles.account}>
          <p>
            Already have an account, please <br />{" "}
            <NavLink to="/login">Sign In</NavLink>
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

export default Signup;
