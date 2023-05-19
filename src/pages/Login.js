import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Typography,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
     validationSchema : Yup.object({
      email:  Yup
      .string("")
        .required("Invalid Credentials - Username/Password is Incorrect. Try again!"),
        password: Yup
        .string('')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          'Invalid Credentials - Username/Password is Incorrect. Try again!')
        .required('Invalid Credentials - Username/Password is Incorrect. Try again!'),
    
    }),
    onSubmit: async (values, helpers) => {
      const headers = {
        "X-localisation": "en",
        "Content-Type": "application/json",
      };
      try {
        const resp = await axios.post("http://localhost:4000/api/v1/login", values, {
          headers,
        });
        if (resp?.data) {
          localStorage.setItem("token", resp?.data?.data?.token);
          navigate("/dashboard");
          toast.success("Logged in successfully");
        } else {
          if (resp.response.data.status === 400) {
            console.log(resp?.response?.data?.errors?.msg, 'respresponse')
            toast.error(resp?.response?.data?.errors?.msg)
            
          }
        }
      } catch ({ err }) {
        toast.error(err.response.data.errors.msg)
      }
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h5" color="#484545" gutterBottom>
          Client Login
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            error={!!(formik.touched.email && formik.errors.email)}
            required
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            variant="standard"
            InputProps={{
              startAdornment: <EmailIcon sx={{ pr: 1 }} />,
            }}
          />
          <TextField
            error={!!(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
            variant="standard"
            required
            fullWidth
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            InputProps={{
              startAdornment: <LockIcon sx={{ pr: 1 }} />,
            }}
          />
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    onChange={() => setRememberMe(!rememberMe)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              <Link href="#" variant="body2" color="#aeabab">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
          {formik.errors.submit && (
            <Typography color="error" sx={{ mt: 3 }} variant="body2">
              {formik.errors.submit}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3bb9ea" }}>
            Login
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
}
