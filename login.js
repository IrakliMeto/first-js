//objects
///////////////

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

//////////////////////////////////////////////

function getFoundUser(possibleUsername) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === possibleUsername) {
      return users[i];
    }
  }
}

/////////////////////////////////////////////

function getFoundEmail(possibleEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === possibleEmail) {
      console.log("test");
      return users[i].email;
    }
  }
}

//////////////////////////////////////////////

function checkPassword(user, possiblePassword) {
  let isSame = user.password === possiblePassword;
  return isSame;
}

/////////////////////////////

function login(username, password, email) {
  const passwordRegexPattern = /^.*(?=.*[A-Z]{1,})(?=.*[^\w]{1,})(?=.*[0-9]{1,})(?=.*[\w]).{6,20}$/;
  let isPasswordStrong = passwordRegexPattern.test(password);

  const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isEmailValid = emailRegexPattern.test(email);

  let possibleUser = getFoundUser(username);
  let possibleEmail = getFoundEmail(email);

  if (!possibleEmail || !isEmailValid) {
    console.log("მომხმარებელი ამ მაილით არ მოიძებნა, ან არასწორად უთითებთ !");
    alert("მომხმარებელი ამ მაილით არ მოიძებნა, ან არასწორად უთითებთ !");
  } else {
    let isPasswordValid = checkPassword(possibleUser, password);
    if (isPasswordValid) {
      console.log("წარმატებით შეხვედით სისტემაში .");
      alert("წარმატებით შეხვედით სისტემაში .");
      window.location = "index.html";
      if (!isPasswordStrong) {
        console.log(
          "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
        );
        alert("მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი");
      }
    } else {
      console.log("პაროლი არასწორია");
      alert("პაროლი არასწორია");
    }
  }
}

///////////////////////////

function tryLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  login(username, password, email);
}
