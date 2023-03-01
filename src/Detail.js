import React from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { MdDelete} from 'react-icons/md'
import { BsPen } from 'react-icons/bs'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
    const {id} = useParams()
  return (
    <>
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
         
            <tr  className='text-center'>
                <td>{id}</td>
                
                <td></td>
                <td></td>
                <td>
                 
                 
                    <button >
                    
                    <MdDelete/>

                  </button>

                </td>
                
            </tr>
          
          
          
        </tbody>
        <ToastContainer />
      </Table>
    </>
  )
}

export default Detail