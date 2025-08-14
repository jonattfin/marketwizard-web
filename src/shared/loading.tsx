import {Skeleton} from "@mui/material";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
     <Box sx={{ width: 640 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={"pulse"} />
    </Box>
  )
}