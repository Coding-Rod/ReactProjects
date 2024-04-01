import React from 'react';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';

const Screen = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    color: 'black',
});

const ScreenComponent = ({ text }) => {
    return (
        <Screen>
            {text}
        </Screen>
    );
};

export default ScreenComponent;
