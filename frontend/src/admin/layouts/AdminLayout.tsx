import * as React from "react";
import {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {Header} from "../components/Layout/Header/Header";
import SidebarMenu from "../components/Layout/SidebarMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export const AdminLayout: React.FC = (props) => {
    const classes = useStyles();
    const [showSidebarMenu, setShowSidebarMenu] = useState<boolean>(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                isShowSidebarMenu={showSidebarMenu}
                onShowSidebarMenu={() => setShowSidebarMenu(true)}
            />
            <SidebarMenu
                isShown={showSidebarMenu}
                onClose={() => setShowSidebarMenu(false)}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}
