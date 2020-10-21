import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Jihene",
    email: "jihene@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Aicha",
    email: "aicha@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
