import React from "react";
import PropTypes from "prop-types";

const NewUrlComponent = (props) => {
    const {
        newUrl
    } = props;

    return(
        <div>
            {newUrl ? newUrl.url : ''}
        </div>
    );
};

NewUrlComponent.propTypes = {
    newUrl: PropTypes.object
};

NewUrlComponent.defaultProps = {
    newUrl: null
};

export default NewUrlComponent;