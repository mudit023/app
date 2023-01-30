import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://odd-lime-anemone-kit.cyclic.app/posts"
      );
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Main />
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={5}>
          {posts &&
            posts.map((item) => {
              return (
                <Grid key={item.id} item md={3} sx={{ height: "650px" }}>
                  <Card item={item} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
