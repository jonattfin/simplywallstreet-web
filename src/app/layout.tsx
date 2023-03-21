'use client';

import styled from "@emotion/styled";
import React, {useState} from "react";
import {Grid} from "@mui/material";
import {ThemeProvider, createTheme, ThemeOptions} from "@mui/material/styles";
import {HeaderComponent} from "@/shared-components";

const blackColor = "#151B24";
const whiteColor = "grey";

const getTheme = () => {
    const themeObject: ThemeOptions = {
        palette: {
            mode: "dark",
            background: {
                default: blackColor,
                paper: blackColor,
            },
            primary: {
                main: "#1976d2",
            },
        },
    };

    return createTheme(themeObject);
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState("dark");

    const MainContainer = getMainContainer(theme);

    return (
        <html lang="en">
        <body>
        <MainContainer>
            <ThemeProvider theme={getTheme()}>
                <Grid container>
                    <Grid item xl={3}></Grid>
                    <Grid item xl={6}>
                        <nav>
                            <HeaderComponent {...{theme, setTheme}} />
                        </nav>
                        <main>
                            <InnerContainer>
                                {children}
                            </InnerContainer>
                        </main>
                        <footer/>
                    </Grid>
                    <Grid item xl={3}></Grid>
                </Grid>
            </ThemeProvider>
        </MainContainer>

        </body>
        </html>
    )
}


function getMainContainer(theme: string) {
    let backgroundColor = whiteColor;
    let color = blackColor;
    if (theme == "dark") {
        color = whiteColor;
        backgroundColor = blackColor;
    }

    return styled.div`
      background-color: ${backgroundColor};
      color: ${color};
    `;
}

const InnerContainer = styled.div`
  padding: 1% 0;
`;