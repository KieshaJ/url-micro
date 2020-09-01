import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import {
    Grid
} from "@material-ui/core";
import axios from 'axios';
import { MainStyles } from "../utils/styles";

import FormComponent from './Form';
import NewUrlComponent from "./NewUrl";
import TopListComponent from "./TopList";

const MainComponent = () => {
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [created, setCreated] = useState(null);
    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');
    const [copySuccess, setCopySuccess] = useState('');
    const newUrlRef = useRef(null);

    const styles = MainStyles();

    const createUrl = async (e) => {
        e.preventDefault();

        const newUrl = slug ? {
            url,
            slug
        } : {
            url
        };

        await axios.post('http://localhost:4000/url', newUrl).then(response => {
            setCreated(response.data);
            setUrl('');
            setSlug('');
            setCopySuccess('');
            setError('');
        }).catch(error => {
            if(error.response) {
                setError(error.response.data.message);
            }
        });
    };

    const getLinks = () => {
        axios.get('http://localhost:4000/url').then(response => {
            setLinks(response.data);
        });
    };

    const goToLink = (slug) => {
        window.open('http://localhost:4000/url/' + slug, '_blank');
    }

    const copyToClipboard = () => {
        newUrlRef.current.select();
        document.execCommand('copy');
        setCopySuccess('Copied!');
    };

    useEffect(() => {
        getLinks();
    }, []);

    return(
        <Grid container className={styles.root}>
            <Grid item xs={12} md={7}>
                <FormComponent
                    url={url}
                    slug={slug}
                    setUrl={setUrl}
                    setSlug={setSlug}
                    createUrl={createUrl}
                    error={error}
                />
                <NewUrlComponent
                    newUrl={created}
                    newUrlRef={newUrlRef}
                    copySuccess={copySuccess}
                    copyToClipboard={copyToClipboard}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <TopListComponent
                    links={links}
                    goto={goToLink}
                />
            </Grid>
        </Grid>
    );
};

export default MainComponent;