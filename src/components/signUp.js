import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Requetes from '../api/index';

const styles = () => ({
    form: {
        display: 'inline',

    },
    page: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: `url("https://www.unesourisetmoi.info/data/medias/0291/pokemon.jpg")`
    },
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});


const SignUp = (props) => {
    const [form, setValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { get } = Requetes;

    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
        console.log(get("https://api.chucknorris.io/jokes/random").then((e) => console.log(e)));
    };

    const updateField = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const classes = props.classes;

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <form onSubmit={printValues} className={classes.form}>
                    <TextField
                        name="username"
                        label="Nom utilisateur"
                        value={form.username}
                        onChange={updateField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        name="email"
                        label="Adresse mail"
                        value={form.email}
                        onChange={updateField}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        fullWidth
                        required
                    />
                    <TextField
                        name="password"
                        label="Mot de passe"
                        value={form.password}
                        onChange={updateField}
                        margin="normal"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                    />
                    <Button variant="contained" type="submit" fullWidth>
                        Se connecter
                </Button>
                </form>
            </div>
        </div>
    );
}

export default withStyles(styles)(SignUp);