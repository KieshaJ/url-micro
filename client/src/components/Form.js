import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardActions,
    FormGroup,
    TextField,
    Button,
    Divider,
    Typography
} from "@material-ui/core";
import {
    Create
} from "@material-ui/icons"
import { FormStyles } from "../utils/styles";

const FormComponent = (props) => {
    const {
        url,
        slug,
        setUrl,
        setSlug,
        createUrl,
        error
    } = props;

    const styles = FormStyles();

    return (
        <Card variant="outlined" className={styles.root}>
            <Typography component="h2" variant="h5" align="center" className={styles.h2}>
                Create a New Shortened URL
            </Typography>
            <Divider />
            <CardContent component="form">
                <FormGroup>
                    <TextField
                        id="url"
                        label="URL"
                        variant="outlined"
                        placeholder="https://www.example.com"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className={styles.textField}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        id="slug"
                        label="Slug"
                        variant="outlined"
                        placeholder="example"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                        className={styles.textField}
                    />
                </FormGroup>
            </CardContent>
            <Typography component="p" variant="p" className={styles.errorText}>
                {error ? error : ''}
            </Typography>
            <CardActions>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        onClick={e => createUrl(e)}
                        className={styles.button}
                        startIcon={<Create />}
                        disabled={!(url && url !== '')}
                    >
                        Create URL
                    </Button>
            </CardActions>
        </Card>
    );
};

FormComponent.propTypes = {
    url: PropTypes.string,
    slug: PropTypes.string,
    setUrl: PropTypes.func.isRequired,
    setSlug: PropTypes.func.isRequired,
    createUrl: PropTypes.func.isRequired,
    error: PropTypes.string
};

FormComponent.defaultProps = {
    url: '',
    slug: '',
    error: ''
};

export default FormComponent;