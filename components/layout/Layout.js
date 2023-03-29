import { Box, Link, Button, AppBar, Toolbar, Typography } from "@mui/material";

function Layout({ children }) {
    return (
        <>
            <header>
                <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }}>
                    <AppBar
                        position='static'
                        sx={{ flexGrow: 1, backgroundColor: "primary.main" }}
                    >
                        <Toolbar>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{ flexGrow: 1 }}
                            >
                                <Link color='#fff' underline='none' href='/'>
                                    CRM
                                </Link>
                            </Typography>
                            <Button href='/add-customer' color='inherit'>
                                Add Customer
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <Box>{children}</Box>
        </>
    );
}

export default Layout;
