import {
  Card,
  Button,
  FormGroup,
  Typography,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import { truncate } from "lodash";

import { currentUserSelector, signIn, logOut } from "../../store/currentUser";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TruncationSizes } from "../../constants/common";
import { UserFieldNames } from "../../constants/user";
import { Messages } from "../../utils/messages";

export interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(currentUserSelector);
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (formValues: LoginFormValues) => {
    try {
      dispatch(signIn(formValues));
    } catch (err) {
      alert(err);
    }
  };

  if (data.access_token)
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom>
            {Messages.users.alreadyLoggedIn()}
          </Typography>

          <Typography gutterBottom>
            {truncate(data.access_token, {
              length: TruncationSizes.ExtraSmall,
            })}
          </Typography>

          <Button
            onClick={() =>
              window.confirm(Messages.prompts.logOut()) && dispatch(logOut())
            }
          >
            {Messages.users.actions.logOut()}
          </Button>
        </CardContent>
      </Card>
    );

  return (
    <Card>
      <CardContent>
        {error && (
          <Typography gutterBottom>
            {Messages.errors.somethingWrong()}
          </Typography>
        )}

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formik) => (
            <Form>
              <FormGroup>
                <Field
                  name={UserFieldNames.Username}
                  label={Messages.users.form.name()}
                  sx={{ marginBottom: 1.5 }}
                  component={TextField}
                />

                <Field
                  name={UserFieldNames.Password}
                  label={Messages.users.form.password()}
                  sx={{ marginBottom: 1.5 }}
                  component={TextField}
                  type="password"
                />
              </FormGroup>

              <Button type="submit" disabled={formik.isSubmitting || pending}>
                {Messages.users.actions.logIn()}
                {(formik.isSubmitting || pending) && (
                  <CircularProgress size={10} sx={{ marginLeft: 1 }} />
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default Login;
