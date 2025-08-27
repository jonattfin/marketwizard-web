'use client';

import {Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTextField = styled(TextField)`
    padding-bottom: 30px;
`;

export type CreatePortfolioProps = {
  onSubmit: (name: string, description: string, image: string) => void;
}

export default function CreatePortfolio({onSubmit}: CreatePortfolioProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    onSubmit(name, description, image);
    setIsOpen(false);
  }

  return (
    <>
      <Button color={"secondary"} variant="outlined" onClick={() => setIsOpen(true)}>Create portfolio</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Create portfolio</h3>
          <StyledTextField fullWidth
                     id="portfolio-name"
                     label="Name"
                     value={name}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setName(event.target.value);
                     }}
          />
          <StyledTextField fullWidth
                     id="portfolio-description"
                     label="Description"
                     value={description}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setDescription(event.target.value);
                     }}
          />

          <StyledTextField fullWidth
                     id="portfolio-image"
                     label="Image"
                     value={image}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                       setImage(event.target.value);
                     }}
          />
          <div>
            <Button color={"info"} variant="outlined" onClick={handleSubmit}>Create</Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}