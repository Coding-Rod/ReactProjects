import React from 'react';
import { Paper, Button, Grid} from '@mui/material';
import styled from '@emotion/styled';

const Screen = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    color: 'black',
});

const ScreenComponent = ({ text, handleErase, actionButtonText }) => {
    return (
        <Grid container>
            <Grid item xs={10}>
                <Screen>
                    {text}
                </Screen>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={ handleErase }
                >
                    {actionButtonText}
                </Button>
            </Grid>
        </Grid>
    );
};

export default ScreenComponent;
