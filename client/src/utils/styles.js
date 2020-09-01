import {
    makeStyles
} from "@material-ui/core/styles";

const background = 'linear-gradient(45deg, #00D2FF, #928DAB)';
const white = '#FFFFFF';
const blue = '#00D2FF';

const h1 = {
    fontWeight: 'bold',
    padding: '1rem',
    color: 'white'
};

const h2 = {
    padding: '2rem',
    fontWeight: 'bold',
    color: '#00D2FF'
};

const textField = {
    margin: '2rem 6rem 1rem 6rem',
    '& label.Mui-focused': {
        color: '#00D2FF'
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#00D2FF',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#00D2FF',
        },
    }
};

const button = {
    background: 'linear-gradient(45deg, #00D2FF, #928DAB)',
    color: 'white',
    fontWeight: 'bold',
    margin: '0.5rem auto'
};

const BarStyles = makeStyles({
    root: {
        background
    },
    h1
});

const MainStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 137px)'
    }
});

const FormStyles = makeStyles({
    root: {
        margin: '2rem'
    },
    h2,
    textField,
    button,
    errorText: {
        textAlign: 'center',
        color: 'red'
    }
});

const ListStyles = makeStyles({
    root: {
        margin: '2rem'
    },
    h2,
    listItemText: {
        color: blue
    },
    avatar: {
        background: background,
        color: white,
    }
});

const NewUrlStyles = makeStyles({
    root: {
        margin: '4rem 2rem 2rem'
    },
    h2,
    p: {
        color: blue
    },
    textField,
    button
});

export {
    BarStyles,
    MainStyles,
    FormStyles,
    ListStyles,
    NewUrlStyles
};