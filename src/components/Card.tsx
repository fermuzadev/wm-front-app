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

export default function RecipeReviewCard({
  avatarUrl = "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Bob",
  userName = "Jose",
}) {
  return (
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
        image={avatarUrl}
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
          <IconButton aria-label="close">
            <Close />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
