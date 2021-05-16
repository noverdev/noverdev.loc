import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TextField, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {
    Save as SaveIcon
} from "@material-ui/icons";
import {IRoute} from "../../store/route/types";
import {useState} from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        button: {
            margin: theme.spacing(1),
        },
    }),
);

interface Props {
    onSave: (route: IRoute) => void;
}

export const RouteCreatePage: React.FC<Props> = () => {
    const [routeName, setRouteName] = useState<string>(null);
    const [componentName, setComponentName] = useState<string>(null);
    const classes = useStyles();

    const handleSubmit = () => {
        if (!routeName) {
            alert('Route Name is required!');
        } else if (!componentName) {
            alert('Component Name is required!');
        }
        let url = `/api/routes/new`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({routeName, componentName}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                            Create Route
                        </Typography>
                        <TextField
                            required
                            id="route-name"
                            label="Route name"
                            style={{margin: 8}}
                            placeholder="Example: 'My Tasks'"
                            helperText="URL will be '/my-tasks'"
                            fullWidth
                            margin="normal"
                            onChange={(event) => setRouteName(event.currentTarget.value)}
                        />
                        <TextField
                            required
                            id="react-component"
                            label="Name React Component"
                            style={{margin: 8}}
                            placeholder="Example: 'MyTasksPage'"
                            helperText="Will be used component <MyTasksPage/> if exist"
                            fullWidth
                            margin="normal"
                            onChange={(event) => setComponentName(event.currentTarget.value)}
                        />
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={handleSubmit}
                                className={classes.button}
                                startIcon={<SaveIcon />}
                            >Save Route</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </Container>
    );
}