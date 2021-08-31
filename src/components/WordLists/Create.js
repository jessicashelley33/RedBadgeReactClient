import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    minWidth: 40,
    minHeight: 40,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10, 10, 5, 10),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deleteWord = () =>{
    props.wordList.pop()
  }

  const saveWordList = () =>{
      let obj = { userId: 1, wordList: props.wordList}
      localStorage.setItem("wordList", JSON.stringify(obj))
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography id="simple-modal-title"
      variant="h3"
      align="center">
        Word List
      </Typography>
      <Typography id="simple-modal-description"
      variant="h6"
      align="center"
      className="mt-2">
      <span className="text-success">Add</span> and <span className="text-danger">Delete</span> Words and Phrases
      </Typography>
      <div className='mt-3'
       style={{
        color:'#313133',
        margin: '3rem',
       }}>
      {props.wordList.map((x) =>{
        return <p className="text-dark">{x}</p>
      } )}
      </div>
      
      {/*<h2 id="simple-modal-title">Word List</h2>
      <p id="simple-modal-description">
      </p>*/}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-outline-success me-md-2 btn-lg" type="button" onClick={saveWordList}>Save</button>
      <button className="btn btn-outline-danger btn-lg" type="button" onClick={deleteWord}>Delete</button>
    </div>
      
    </div>
  );

  return (
    <div>
      <Button type="button"
      variant="outlined" 
      color="secondary"
      size="large"
      onClick={handleOpen}>
        Create List
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
       
      </Modal>
    </div>
  );
}
