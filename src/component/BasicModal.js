import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './BasicModal.css';
import { Typography } from 'antd';


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
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit Card Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="ModalForm" sx={style}>
          <div>
            <TextField className="textField"
              required
              id="outlined-required"
              label="FullName"
            />
            <br/>
            <br/>
            <TextField className="textField"
              required
              id="outlined-password-input"
              label="Password"
              type="password"

            />
            <br/>
            <br/>
           
            <TextField className="textField"
              required
              id="outlined-required"
              label="Email"
            />
            <br/>
            <br/>
          

            <TextField className="textField"
              required
              id="outlined-required"
              label="Address"
            />
            <br />
            <br />
            <TextField className="textField"
              id="outlined-helperText"
              label="Card number"
              defaultValue="1234 1234 1234 1234"
              helperText="(Cridet or Depit)"
            />
            <br/>
            <br/>
            <TextField className="textField"
              id="outlined-helperText"
              label="Experiation Date"
              defaultValue="MM/YY"

            />
            <br/>
            <br/>
            <TextField className="textField"
              id="outlined-helperText"
              label="CVV/CVN"
              defaultValue="CVC"

            />
          </div>
          <div style={{justifyContent: 'space-evenly'}}>
          <Button  style={{marginTop: "4%"}} variant="contained" color="secondary" onClick={handleClose}>Close</Button>
          <Button  style={{marginTop: "4%", marginLeft: "3%"}} variant="contained" color="secondary" onClick={handleSave}>Save changes</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}