import * as React from "react";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Inbox as InboxIcon,
    Mail as MailIcon,
    ChevronRight as ChevronRightIcon,
    ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";
import clsx from "clsx";
import menuItems from "../../store/sidebar/menuItems";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
    }),
);

interface Props {
    isShown: boolean;
    onClose: () => void;
}

export const SidebarMenu: React.FC<Props> = (
    {
        isShown,
        onClose,
    }
) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isShown,
                [classes.drawerClose]: !isShown,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isShown,
                    [classes.drawerClose]: !isShown,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={onClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.title}>
                        <ListItemIcon>
                            <item.icon/>
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SidebarMenu;
