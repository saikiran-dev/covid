import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        COVID-19 
                    </Typography>
                </Toolbar>
            </AppBar>
         </div>
    )
}

export default Header;