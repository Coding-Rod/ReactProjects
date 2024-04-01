import React from "react";
import { Grid, Button } from "@mui/material";

export default function App({ handleCharacter, handleResult}) {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            *
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            .
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="contained"
            fullWidth
            onClick={() => handleResult()}
          >
            =
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button 
            variant="outlined"
            fullWidth
            onClick={(e) => {handleCharacter(e.target.innerText)}}
          >
            /
          </Button>
        </Grid>
      </Grid>
    </>
  );
}