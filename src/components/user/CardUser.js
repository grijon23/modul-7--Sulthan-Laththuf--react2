import React from "react";

export default function CardUser({ user }) {
  return (
    <tr>
      <th scope="col">{user.id}</th>
      <th scope="col">{user.name}</th>
      <th scope="col">{user.email}</th>
    </tr>
  );
}
