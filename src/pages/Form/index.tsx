import React from 'react';
import {
    CardContent,
    TextField,
    Button,
    CardActions,
    Card,
    CardHeader,
    Typography
} from '@mui/material';

import { InstructionMessage } from '../../components';

export const Formulario = () => {
    return (
        <Card className="py-3 px-4">
            <CardHeader
                title={
                    <Typography variant="h4" gutterBottom>
                        Crear Usuario
                    </Typography>
                }
                subheader={
                    <InstructionMessage
                        subtitle="Lea cuidadosamente este apartado si tiene alguna duda"
                        message="What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                              in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                              including versions of Lorem Ipsum."
                    />
                }
                disableTypography
            />

            <form onSubmit={() => console.log('xd')} autoComplete="off" noValidate>
                <CardContent>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <TextField
                                id="rut"
                                name="rut"
                                label="Rut"
                                margin="normal"
                                fullWidth
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre"
                                margin="normal"
                                fullWidth
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                margin="normal"
                                fullWidth
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <TextField
                                id="phone"
                                name="phone"
                                label="Password"
                                type="number"
                                margin="normal"
                                fullWidth
                                required
                            />
                        </div>
                    </div>
                </CardContent>

                <CardActions
                    style={{
                        paddingRight: '40px'
                    }}>
                    <Button
                        className="ml-auto float-right"
                        variant="contained"
                        color="secondary"
                        type="submit">
                        INGRESAR
                    </Button>
                </CardActions>
            </form>
        </Card>
    );
};
