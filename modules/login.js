import { getFoundUser, getFoundEmail, checkPassword } from "./users";

export function login(username, password, email) {
  const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isEmailValid = emailRegexPattern.test(email);

  const passwordRegexPattern = /^.*(?=.*[A-Z]{1,})(?=.*[^\w]{1,})(?=.*[0-9]{1,})(?=.*[\w]).{6,20}$/;
  let isPasswordStrong = passwordRegexPattern.test(password);

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
          "მაგრამ თქვენ გაქვთ მარტივი პაროლი , უსაფრთხოების მიზნით ,  გთხოვთ შეცვალოთ პაროლი"
        );
        alert(
          "მაგრამ თქვენ გაქვთ მარტივი პაროლი , უსაფრთხოების მიზნით , გთხოვთ შეცვალოთ პაროლი"
        );
      }
    } else {
      console.log("პაროლი არასწორია");
      alert("პაროლი არასწორია");
    }
  }
}

///////////////////////////
