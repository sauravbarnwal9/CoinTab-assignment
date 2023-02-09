import React from "react";
import { Tr, Td, Image } from "@chakra-ui/react";

const UserTable = ({ user }) => {
  return (
    <Tr>
      <Td>
        <Image  src={user.picture.medium} />
      </Td>
      <Td>{user.name.first}</Td>
      <Td>{user.location.country}</Td>
      <Td>{user.gender}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phone}</Td>
    </Tr>
  );
};

export default UserTable;
