import React, {
    useState
} from 'react';
import axios from 'axios';

import FormComponent from './Form';
import NewUrlComponent from "./NewUrl";
import TopListComponent from "./TopList";

const MainComponent = () => {
    const [url, setUrl] = useState('');
    const [slug, setSlug] = useState('');
    const [created, setCreated] = useState(null);

    const createUrl = async (e) => {
        e.preventDefault();

        const newUrl = {
            url,
            slug
        };

        await axios.post('http://localhost:4000/url', newUrl).then(response => {
            console.log(response);
            setCreated(response.data);
        });
    };

    return(
        <main>
            <FormComponent
                url={url}
                slug={slug}
                setUrl={setUrl}
                setSlug={setSlug}
                createUrl={createUrl}
            />
            <NewUrlComponent newUrl={created} />
            <TopListComponent />
        </main>
    );
};

export default MainComponent;