import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "../theme/Theme.ts";

export const ContextProviders: FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
};
