import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@blazemart.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ayush",
    email: "ayush@blazemart.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sonal",
    email: "sonal@blazemart.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;