import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

import { AuthWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { authState, login } from '../../redux/auth/authSlice';

export const Login = () => {
    const dispacth = useAppDispatch();
    const { isLoading, error, isAuthenticated } = useAppSelector(authState);

    const formik = useFormik({
        initialValues: {
            rut: '',
            password: ''
        },
        validationSchema: Yup.object({
            rut: Yup.string().max(255).required('Rut es requerido'),
            password: Yup.string().max(255).required('Contraseña es requerida')
        }),
        onSubmit: ({ rut, password }) => {
            dispacth(login(rut, password));
        }
    });

    useEffect(() => {
        console.log(isAuthenticated);
    }, [isLoading]);

    return (
        <AuthWrapper>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}>
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ my: 3, pl: 20 }}>
                            <Typography color="textPrimary" variant="h4">
                                <img src="assets/images/agrosuper-logo.png" alt="" />
                            </Typography>
                            <Typography color="textSecondary" gutterBottom variant="body2">
                                Sistema de administración de datos.
                            </Typography>
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.rut && formik.errors.rut)}
                            fullWidth
                            helperText={formik.touched.rut && formik.errors.rut}
                            label="Rut"
                            margin="normal"
                            name="rut"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="rut"
                            value={formik.values.rut}
                            variant="outlined"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            fullWidth
                            helperText={formik.touched.password && formik.errors.password}
                            label="Contraseña"
                            margin="normal"
                            name="password"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.password}
                            variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="secondary"
                                onClick={() => formik.handleSubmit}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained">
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
        </AuthWrapper>
    );
};
