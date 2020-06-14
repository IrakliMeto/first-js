let user1 = {
  username: "meto55",
  email: "metometo@gmail.com",
  password: "123",
};

let user2 = {
  username: "meto11",
  email: "metometo11@gmail.com",
  password: "1234",
};

let user3 = {
  username: "meto54",
  email: "metoika@gmail.com",
  password: "1334",
};

let user4 = {
  username: "meto77",
  email: "ika.meto@gmail.com",
  password: "1234567",
};

let user5 = {
  username: "meto52",
  email: "metometo44@gmail.com",
  password: "1567",
};

let users = [user1, user2, user3, user4, user5];

export function getFoundUser(possibleUsername) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === possibleUsername) {
      return users[i];
    }
  }
}

/////////////////////////////////////////////

export function getFoundEmail(possibleEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === possibleEmail) {
      return users[i].email;
    }
  }
}

export function checkPassword(user, possiblePassword) {
  let isSame = user.password === possiblePassword;
  return isSame;
}

//////////////////////////////////////////////
