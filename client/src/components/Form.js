import React from 'react';
import PropTypes from 'prop-types';

const FormComponent = (props) => {
    const {
        url,
        slug,
        setUrl,
        setSlug,
        createUrl
    } = props;

    return(
        <form>
            <label htmlFor="url">URL</label>
            <input
                name="url"
                id="url"
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
            />

            <label htmlFor="slug">Slug</label>
            <input
                name="slug"
                id="slug"
                type="text"
                value={slug}
                onChange={e => setSlug(e.target.value)}
            />

            <button type="submit" onClick={e => createUrl(e)}>Create URL</button>
        </form>
    );
};

FormComponent.propTypes = {
    url: PropTypes.string,
    slug: PropTypes.string,
    setUrl: PropTypes.func.isRequired,
    setSlug: PropTypes.func.isRequired,
    createUrl: PropTypes.func.isRequired
};

FormComponent.defaultProps = {
    url: '',
    slug: ''
};

export default FormComponent;