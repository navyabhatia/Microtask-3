//import "./styles.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Help from "@mui/icons-material/Help";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, makeStyles } from "@material-ui/core";

const useStylesContainer = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function BasicTextFields() {
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");

  const classesContainer = useStylesContainer();

  const handleClickiconQuote = (event) => {
    // console.log(event.target.value);
    Swal.fire(
      "How to add Quote?",
      "Choose 1-2 sentence from Source. It should be present exactly in Source  ",
      "info"
    );
  };
  const handleClickiconSource = (event) => {
    // console.log(event.target.value);
    Swal.fire("How to add Source", "Cite this way ..  ", "info");
  };

  const handleclick = (e) => {
    e.preventDefault();
    // const sourceEntered = source;
    // const quoteEntered = quote;
    if (source !== "" && quote !== "") {
      const sourceEntered = source;
      const quoteEntered = quote;
      const found = sourceEntered.match(quoteEntered);

      if (found !== null) Swal.fire("Yey!", "Sucessfully Submitted", "success");
      else Swal.fire("Oops! ", "Enter Correct Quote", "error");
    } else Swal.fire("Oops!", "Enter all Details ", "error");
  };

  return (
    <Container
      sx={{ marginTop: 15, marginLeft: 15 }}
      className={classesContainer.root}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "65ch", height: "59%" },
          maxWidth: 700,
          maxHeight: 500,
          marginX: "auto",
          boxShadow: 4,
          bgcolor: "#EEF2FF",
        }}
      >
        <br />

        <TextField
          sx={{ paddingX: 2 }}
          required
          // icon={<PhotoCamera />}
          id="outlined-basic"
          //label="Enter Source"
          placeholder="Enter Source"
          variant="outlined"
          value={source}
          required
          onChange={(e) => {
            //console.log(e.target.value);
            setSource(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Tutorial">
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "green",
                        backgroundColor: "grey",
                        cursor: "default",
                        // disableRipple: "true",
                      },
                    }}
                    onClick={handleClickiconSource}
                  >
                    <Help />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          sx={{ paddingX: 2 }}
          required
          id="outlined-basic"
          // label="Enter Quote"
          placeholder="Enter Quote"
          variant="outlined"
          value={quote}
          required
          onChange={(e) => {
            //console.log(e.target.value);
            setQuote(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title=" Refer Tutorial">
                  <IconButton
                    sx={{
                      "&:hover": {
                        color: "green",
                        backgroundColor: "grey",
                        cursor: "default",
                        // disableRipple: "true",
                      },
                    }}
                    onClick={handleClickiconQuote}
                  >
                    <Help />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />

        <br />
        <br />
        <Grid container justify="center">
          <Button
            type="submit"
            variant="contained"
            onClick={handleclick}
            size="large"
            sx={{
              paddingX: 7,
              paddingY: 1,
              marginY: 2,
              maxWidth: 150,
            }}
          >
            Submit
          </Button>
        </Grid>
        <br />
        <br />
      </Box>
    </Container>
  );
}
/*
<Tooltip title="Tutorial">
        <IconButton
          sx={{
            "&:hover": {
              color: "green",
              backgroundColor: "grey",
              cursor: "default",
              // disableRipple: "true",
            },
          }}
          onClick={handleClickicon}
        >
          <PhotoCamera />
        </IconButton>
      </Tooltip>



*/
