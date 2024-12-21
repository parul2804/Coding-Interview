import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete';
import { updateWidget, removeWidget } from '../../lib/apiConnect';
import { useDispatch } from 'react-redux';
import { deleteWidget, updateAWidget } from '../../services/Actions/actions';

const DisplayWidget = ({ widget}) => {
  const { description: initialDescription, name, price: initialPrice } = widget;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const dispatch = useDispatch()

  // Open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Placeholder functions for "Update" and "Delete"
  const handleUpdate = () => {
    console.log('Update clicked');
    setIsEditing(true);
    handleClose();
  };

  const handleDelete = () => {
    removeWidget(name).then((res)=> {
      dispatch(deleteWidget(widget))
    }).catch((error)=>{
      console.error('Error occured in deleting', error);
    })
    handleClose();
  };

  const handleSave =  () => {
    console.log('Updated price:', price);
    console.log('Updated description:', description);
    const updatedWidget = {
      name: name,
      description: description,
      price: price,
  };
    updateWidget(name, updatedWidget).then((res)=>{
      dispatch(updateAWidget(res.data))
    }).catch((err)=>{
      console.error('Error occured in updating widget');
    })
    setIsEditing(false); // Disable edit mode after saving
  };

  return (
    <Grid item xs={6}>
      <Card style={{ position: 'relative' }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography component="div" gutterBottom variant="h4">
              {name}
            </Typography>
            {isEditing ? (
              <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
              />
            ) : (
              <Typography component="div" gutterBottom variant="h5">
                ${price}
              </Typography>
            )}
            {isEditing ? (
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                multiline
                rows={4}
              />
            ) : (
              <Typography color="text.secondary" variant="body2">
                {description}
              </Typography>
            )}
            <IconButton
              aria-label="options"
              onClick={handleClick}
              style={{ position: 'absolute', top: 10, right: 10 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleUpdate}>
                <EditIcon sx={{ marginRight: 1 }} /> Update
              </MenuItem>
              <MenuItem onClick={handleDelete}>
                <DeleteIcon sx={{ marginRight: 1 }} /> Delete
              </MenuItem>
            </Menu>
            {isEditing && (
              <button onClick={handleSave}>Save</button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DisplayWidget;
