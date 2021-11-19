import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Post as PostModel } from ".prisma/client";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import { API_ROOT, ResourceNames } from "../constants/common";

const GET_POSTS_PATH = `${API_ROOT}/${ResourceNames.Posts}`;

const Home = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const { isLoading, data } = useQuery(GET_POSTS_PATH, () =>
    axios.get(GET_POSTS_PATH).then((res) => res.data)
  );

  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);

  if (isLoading) return <LinearProgress />;

  return (
    <>
      {posts.map((post) => {
        return (
          <Card sx={{ marginBottom: 1.5 }} key={post.id}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>

              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Home;
