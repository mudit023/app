import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
function AddProduct() {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rating: {
      rate: 4,
    },
  });
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    const response = await axios.post(
      "https://odd-lime-anemone-kit.cyclic.app/posts",
      data
    );
    console.log(response);
    setData({
      title: "",
      price: "",
      description: "",
      image: "",
      rating: {
        rate: 4,
      },
    });
    history.push("/");
  };

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 4 }}>
          FORM TO ADD NEW PRODUCT
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="title"
              required
              fullWidth
              id="firstName"
              label="Product Title"
              placeholder="Rings"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Product Description"
              name="description"
              autoComplete="family-name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="rating"
              label="Product Rating"
              id="password"
              autoComplete="new-password"
              onChange={(event) => {
                // setData((prev) => {
                //   return { ...prev, ["rating"]["rate"]: event.target.value };
                // });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="price"
              label="Product Price"
              id="password"
              autoComplete="new-password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Image URL"
              name="image"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ p: 1, mt: 2 }}
              onClick={handleSubmit}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddProduct;
