import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';

import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';

import {Button, Divider, ListItemIcon, ListItemText} from "@mui/material";
import {styled} from "@mui/material/styles";

export type TemplateMenuProps = {
  name?: string;
}

const CustomButton = styled(Button)`
    text-transform: none;
`;

const CustomLink = styled(Link)`
    color: aliceblue;
`;

export default function TemplateMenu({name}: TemplateMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name || "Products"}
      </CustomButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCut fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Screeners</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentCopy fontSize="small"/>
          </ListItemIcon>
          <ListItemText>Calendar</ListItemText>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ContentPaste fontSize="small"/>
          </ListItemIcon>
          <ListItemText>
            <CustomLink href={"/portfolios"}>Portfolios</CustomLink>
          </ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}