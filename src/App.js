import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase'
import Modal from '@material-ui/core/Modal'
import { Button, makeStyles } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function App() {

  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {

    db.collection('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })))
      })

  }, [posts])


  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Text in a modal</h2>
        </div>
      </Modal>


      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://i.pinimg.com/originals/57/6c/dd/576cdd470fdc0b88f4ca0207d2b471d5.png" alt="" />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      {
        posts?.map(({ id, post }) => (
          <Post key={id} username={post?.username} caption={post?.caption} imageUrl={post?.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
