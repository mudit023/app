import React from "react";

import { Box, Typography, Container, Button } from "@mui/material";
function Main() {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "70vh",
        }}
      >
        <Typography variant="h3">Home layout</Typography>
        <Typography
          variant="subtitle1"
          sx={{
            width: "450px",
            textAlign: "center",
            my: 4,
            fontSize: "1.2rem",
          }}
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Button variant="contained">Contact Me</Button>
      </Container>
    </Box>
  );
}

export default Main;
