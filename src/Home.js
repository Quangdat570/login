import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router";
import { Container} from 'react-bootstrap'

import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { MdDelete} from 'react-icons/md'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles/Home.module.css'





import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



// modal *************************
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:"flex",
  flexDirection:"column",
  gap:"20px"
};



// App ********************************

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [deletePost, setDelete] = useState("");
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    
    


    let jwtToken = localStorage.getItem('token');
    


    useEffect(() => {
        fetchData();
        // Create();
       
    },[])

  
    const fetchData = async () => {
      await fetch('https://test-react.agiletech.vn/posts', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization':"Bearer " + jwtToken
        },
      })
      .then((response) => response.json())
        .then((data) => setPosts(data.posts))
        .catch((err) => {
            console.log(err);
        })
        
    }
    
    
    
    const deleteData = async (id) => {
        await fetch('https://test-react.agiletech.vn/posts/' + id, {
        method: 'DELETE',
        headers: {
          'accept':"*/*",
          'Authorization':"Bearer " + jwtToken
        },
        }).then((response) => response.json())
        .catch((err) => {
          console.log(err);
        })
        toast("xoá thành công")
    }

    const Create = () => {
      const data = {
          title: title,
          description: description,
          tags: tags
      }
      
      var options = {
          method:"POST",
          headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer " + jwtToken,
          },
          body: JSON.stringify(data),
          
      };
      fetch("https://test-react.agiletech.vn/posts",options).then((response) => {
          response.json()
      })
      toast.success("thêm thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const updatePost = async (id) => {
      await fetch('https://test-react.agiletech.vn/posts/' + id, {
        method: 'PATCH',
        headers: {
          'accept':"*/*",
          'Authorization':"Bearer " + jwtToken
        },
        }).then((response) => response.json())
        .catch((err) => {
          console.log(err);
        })
    }

   

    
    


    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };
    
  return (
      <>
      <Container className={styles.header}>
      <Link to='/'>
        <div className={styles.icons}>
                    <div className={styles.icon1}></div>
                    <div className={styles.icon2}></div>
                </div>
        </Link>
      <button onClick={signOut} className={styles.btn_logout}>log out</button>

      </Container>
      <Container className='pb-4'>
      <div>
      <button onClick={handleOpen} className={styles.btn_logout}>Add New</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField fullWidth  label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
        <TextField fullWidth  label="Description" variant="outlined" value={description}  onChange={e => setDescription(e.target.value)}/>
        {/* <TextField  label="Outlined" variant="outlined" value={tags}  onChange={e => setTags(e.target.value)}/> */}
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tags}
          label="Tags"
          onChange={e => setTags(e.target.value)}
        >
          <MenuItem value={`html`}>Html</MenuItem>
          <MenuItem value={`Css`}>Css</MenuItem>
          <MenuItem value={`Javascript`}>Javascript</MenuItem>
          <MenuItem value={`Reactjs`}>Reactjs</MenuItem>
          <MenuItem value={`Vuejs`}>Vuejs</MenuItem>
          <MenuItem value={`Angular`}>Angular</MenuItem>
          <MenuItem value={`Nodejs`}>Nodejs</MenuItem>
          <MenuItem value={`Java`}>Java</MenuItem>
        </Select>
      </FormControl>
        <Button variant="contained" onClick={Create}>Contained</Button>
          
        </Box>
      </Modal>
    </div>
      </Container>
      <Container>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center ">
            <th>Title</th>
           
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id} className='text-center'>
                <td>{item.title}</td>
                
                <td>{item.description}</td>
                <td>{item.tags}</td>
                <td>
                 {/* <Link to={`/products/${item.id}`}>
                    <BsPen/>
                 </Link> */}
                 
                    <button value={deletePost} onClick={() => deleteData(item.id) } className={styles.btn_delete}>
                    
                    <MdDelete/>

                  </button>

                </td>
                
            </tr>
          ))}
          
          
        </tbody>
        <ToastContainer />
      </Table>

      </Container>


    
    </>
  )
}

export default Home