'use client';

import {useState} from "react";
import {Button} from "@chakra-ui/react";


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
    <Button colorPalette={"orange"} variant={"outline"}>Create new portfolio</Button>
  )
}