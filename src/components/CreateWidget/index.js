import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useDispatch} from 'react-redux';
import { createWidget } from '../../services/Actions/actions';
import { createNewWidget } from '../../lib/apiConnect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateWidgetDialog = ({ open, onClose }) => {
  // State to handle input fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'price') setPrice(value);
    if (name === 'description') setDescription(value);
  };

  // Handle form submission (Create)
  const handleCreate = async () => {
    if (!name || !price || !description) {
      alert('Please fill in all fields!');
      return;
    }
    
    const newWidget = {
        name: name,
        description: description,
        price: price,
    };
    var res1 = createNewWidget(newWidget);
    console.log('parul  create res1', res1)
    res1.then((value)=> {
        dispatch(createWidget(value.data));
        resetForm();
        onClose();
    }).catch((error)=> {
        console.error(' parul Error during widget creation:', error.response.data.message);
        toast.error(error.response.data.message);
        resetForm();
        onClose();
    })
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Widget</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Widget Name"
          fullWidth
          value={name}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          value={description}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </DialogActions>
      <ToastContainer />
    </Dialog>
  );
};

export default CreateWidgetDialog;
