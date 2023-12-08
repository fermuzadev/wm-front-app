import Card from "@mui/material/Card";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { Favorite, Close, MoreVert } from "@mui/icons-material";
import { useState } from "react";

export default function UserCard({
  userName,
  imageUrl,
  setCardCounter,
  cardCounter,
}) {
  const [noMatches, setNoMatches] = useState(false);
  const handleUnmatch = () => {
    cardCounter < 9 ? setCardCounter(cardCounter + 1) : setNoMatches(true);
  };

  return !noMatches ? (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={userName}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="avatar picture"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore
          deleniti aut? Voluptatem error odio molestiae aliquam, veritatis
          laborum dolorum, iusto ratione earum autem porro, reprehenderit ullam
          nam eligendi.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="close" onClick={handleUnmatch}>
            <Close />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  ) : (
    <Typography color="red" variant="h4">
      No hay más personas de momento
    </Typography>
  );
}
