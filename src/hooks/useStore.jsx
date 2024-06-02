import { useState } from 'react';

const initialState = {
    email: '',
    login: '',
    password: '',
    repeatPassword: '',
};

export const useStore = () => {
    const [state, setState] = useState(initialState);

    return {
        getState: () => state,
        updateState: (fieldName, newValue) => {
            setState({ ...state, [fieldName]: newValue });
        },
    };
};