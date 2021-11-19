import Head from "next/head";
import { ReactChild } from "react";
import { ThemeProvider, Container, CssBaseline } from "@mui/material";
import { Messages } from "../../utils/messages";
import theme from "../../styles/theme";
import HeadContent from "./HeadContent";

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Head>
        <HeadContent />
        <title>{Messages.brand()}</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="md" sx={{ marginTop: "50px" }}>
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
