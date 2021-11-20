import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { User as UserModel } from ".prisma/client";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import { API_ROOT, ResourceNames } from "../../constants/common";
import { Messages } from "../../utils/messages";
import { useAppSelector } from "../../hooks/redux";
import { currentUserSelector } from "../../store/currentUser";
import { authHeaders } from "../../utils/auth";

const GET_USERS_PATH = `${API_ROOT}/${ResourceNames.Users}`;

const UsersIndex = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const {
    data: { access_token },
    error: currentUserError,
    pending: currentUserLoading,
  } = useAppSelector(currentUserSelector);
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useQuery(GET_USERS_PATH, () =>
    axios.get(GET_USERS_PATH, authHeaders(access_token)).then((res) => res.data)
  );

  useEffect(() => {
    if (usersData) setUsers(usersData);
  }, [usersData]);

  if (usersError || currentUserError)
    return <Typography>{Messages.errors.somethingWrong()}</Typography>;
  if (usersLoading || currentUserLoading) return <LinearProgress />;

  return (
    <>
      {users.map((user) => {
        return (
          <Card sx={{ marginBottom: 1.5 }} key={user.id}>
            <CardContent>
              <Typography>{user.name}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default UsersIndex;
