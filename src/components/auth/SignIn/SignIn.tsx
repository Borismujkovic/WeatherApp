import { Row, Col } from "antd";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { SignInFormValues } from "./SignIn.types";
import { NavLink } from "react-router-dom";
import { AuthContainer } from "./style";

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
    <AuthContainer>
      <div className="loginContent">
        <h1>Login</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row>
              <Col span={24}>
                <div className="input">
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
                <div className="input">
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
            <div className="loginBtn">
              <button className='submit'>Login</button>
            </div>
          </form>
        </FormProvider>
        <div className='account'>
          <p>
            Don't have an account, please <br />{" "}
            <NavLink to="/register">Sign Up</NavLink>
            <br />
            or <br />
            <NavLink to="/">
            <button className='submit'>Back to Home</button>
            </NavLink>
          </p>
        </div>
      </div>
      </AuthContainer>
  );
};

export default SignIn;
