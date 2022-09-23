import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrap,
  Icon,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form>
              <FormTitle>Sign in to your account</FormTitle>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" required id="password" />
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
