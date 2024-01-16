const UserData = [
  {
    firstName: "admin",
    lastName: "user",
    email: "example@gmail.com",
    phone_number: "12345",
    username: "admin",
    password: "admin",
    get id() {
      return this.email;
    },
  },
];

export default UserData;
