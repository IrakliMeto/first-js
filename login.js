//objects
///////////////

let user1 = {
  username: "meto55",
  password: "123",
};

let user2 = {
  username: "meto11",
  password: "1234",
};

let user3 = {
  username: "meto54",
  password: "1334",
};

let user4 = {
  username: "meto77",
  password: "1234567",
};

let user5 = {
  username: "meto52",
  password: "1567",
};

let users = [user1, user2, user3, user4, user5];

function login(username, password) {
  let possibleUser = getFoundUser(username);
  if (!possibleUser) {
    console.log("მომხმარებელი ამ სახელით არ მოიძებნა");
    alert("მომხმარებელი ამ უსერით არ მოიძებნა");
  } else {
    let isPasswordValid = checkPassword(possibleUser, password);
    if (isPasswordValid) {
      console.log("წარმატებით შეხვედით სისტემაში .");
      alert("წარმატებით შეხვედით სისტემაში .");
      window.location = "index.html";
      if (password.length < 8) {
        console.log(
          "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
        );
      }
    } else {
      console.log("პაროლი არასწორია");
      alert("პაროლი არასწორია");
    }
  }
}
//////////////////////////////////////////////

function getFoundUser(possibleUsername) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === possibleUsername) {
      return users[i];
    }
  }
}

/////////////////////////////////////////////

function checkPassword(user, possiblePassword) {
  let isSame = user.password === possiblePassword;
  return isSame;
}

/////////////////////////////

///////////////////////////

function tryLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  login(username, password);
}
