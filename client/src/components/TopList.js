import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar
} from "@material-ui/core";
import { Link } from "@material-ui/icons";
import { ListStyles } from "../utils/styles";


const TopListComponent = (props) => {
    const { links, goto } = props;

    const styles = ListStyles();

    return(
        <Card variant="outlined" className={styles.root}>
            <Typography
                component="h2"
                variant="h5"
                align="center"
                className={styles.h2}
            >
                Most Visited Links
            </Typography>
            <Divider />
            <CardContent>
                <List dense>
                    {links.map((link) => {
                        return(
                            <ListItem
                                key={link._id}
                                button
                                onClick={() => goto(link.slug)}
                            >
                                <ListItemAvatar>
                                    <Avatar className={styles.avatar}>
                                        <Link />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`/${link.slug}  ->  ${link.url}`}
                                    secondary={`${link.clicks} clicks`}
                                    className={styles.listItemText}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    );
};

export default TopListComponent;