//  Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
//  Infine scrivi sulla pagina nomecognomecolorepreferito21

// starting var
let userName, userSurname, favoriteColor, userPassword;

//ask to user name
userName = prompt ("qual'è il tuo nome?");
console.log(userName);

//ask surname
userSurname = prompt ("qual'è il tuo cognome?");
console.log(userSurname);

//Ask preferit color
favoriteColor = prompt ("qual'è il tuo colore preferito?");
console.log(favoriteColor);

//build a random password
userPassword = userName + userSurname + favoriteColor + "35"
console.log(userPassword);

//Stamp on page the password
document.getElementById("myid").innerHTML = "la password generata casualmente è: " + userPassword;