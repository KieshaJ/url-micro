import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Divider,
    FormGroup,
    TextField
} from "@material-ui/core";
import {
    FileCopy
} from "@material-ui/icons";
import { NewUrlStyles } from "../utils/styles";

const NewUrlComponent = (props) => {
    const {
        newUrl,
        newUrlRef,
        copySuccess,
        copyToClipboard
    } = props;

    const styles = NewUrlStyles();

    return(
        <Card variant="outlined" className={styles.root}>
            <Typography component="h2" variant="h5" align="center" className={styles.h2}>
                New URL
            </Typography>
            <Divider />
            <CardContent>
                <FormGroup>
                    <TextField
                        id="newUrl"
                        variant="outlined"
                        inputRef={newUrlRef}
                        value={newUrl ? `http://localhost:4000/url/${newUrl.slug}` : ''}
                        className={styles.textField}
                    />
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="large"
                    onClick={copyToClipboard}
                    startIcon={<FileCopy />}
                    disabled={!newUrl}
                    className={styles.button}
                >
                    {copySuccess !== '' ? copySuccess : 'Copy To Clipboard'}
                </Button>
            </CardActions>
        </Card>
    );
};

NewUrlComponent.propTypes = {
    newUrl: PropTypes.object,
    newUrlRef: PropTypes.object.isRequired,
    copySuccess: PropTypes.string,
    copyToClipboard: PropTypes.func.isRequired
};

NewUrlComponent.defaultProps = {
    newUrl: null,
    copySuccess: ''
};

export default NewUrlComponent;