"use strict";

/*

const re = /abc/i;

const str = "abcdef";

const result = re.test(str);

console.log(result);

const postCodeCheck = /^[A-Z]{2}-[0-9]{5}$/;
// const postCodeStr = "LT-01012";
// const postCodeStr1 = "LT01012";
const postCodeStr = postCodeCheck.test("LT-01012");
const postCodeStr1 = postCodeCheck.test("LT01012");
console.log(postCodeStr, postCodeStr1);
console.log({ postCodeStr, postCodeStr1 });

*/

// useful functions
//   re.test(str); returns boolean
//   str.match(re); returns null | array with resultsboolean
//   str.matchAll(re); returns iterable object with found values (can be used with for of loop)
//   str.search(re); returns index of found string or -1
//   str.replace(re, (...args) => {
//    const groups = args[args.length - 1];
//
//    return `naujas@${groups.domain}`;
//   });
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//   str.split(re); splits string on pattern (can also use a string for pattern)

// Quantifiers - after char or char set
// + - 1 or more
// * - 0 or more
// ? - 0 or 1
// {0,5} - 0 to 5, {2,} - 2 or more, {5} exactly 5

// modifiers
//   i - case insensitive
//   d - gives extra info in match

// ^ - must begin with (but inside char set means NOT)
// $ - must end with

// character sets
// [ao] - a or o  [a-zA-Z0-9] - any of those characters
// /[ao]/i - galioja ir viduje character sete

// groups
// created by ()
// ?<someName> - name a group - e.g. (?<username>[a-z]+)
// ?: - not capture a group - e.g. (?:[a-z0-9]+)
// ?! - j is not followed by a - e.g. j(?!a)
// ?<! - u is not preceded by j - e.g. (?<!j)u

// or symbol |

// Classes
// \s - space, tab or new line
// \d - digits
// \D - not digits
// \w - digits, letters or underscore
// \W - not digits, letters or underscor

// 3 ways to create a Regular Expression
//   new RegExp(/abc/, 'i');
//   new RegExp('abc', 'i');
//   /abc/i;

// use \ for escaping special characters e.g. \.

// non greedy quantifier - add ?
// const re = /(ao)+?a/g;
// const str = 'aoaoaoaoaoa';
// const result = str.match(re);

// ------------- uzduotis
// Uzduotis. Padaryti registracijos forma su validacija

// Reikalingi 4 laukai:
// - username
// - email
// - password
// - pakartotinis password

// submitinant turi buti validuojami laukai visi, kazkuriai validacijai sufailinus, parodoma ekrane zinute, kas konrkeciai netinkama

// reikalavimai validacijoms

// username - raides, skaiciai, bruksniai galimi, minimum 5 maximum 30 simboliu

// email - atitiktu email formata ir leidziama tik gmail.com ir protonmail.com domenai . Max 256 simboliai.

// passwordas - bent viena didzioji, mazoji raides, skaicius. Minimum 8 max 50 simboliu

// -------------
// const body = document.querySelector("body");
// const container = document.createElement("div");
// const input = document.createElement("input");
// const label = document.createElement("label");

// body.append(container);
// container.append(input);
// input.append(label);

// -------------
const form = document.querySelector("form");

const reUserName = /^[A-Za-z0-9\-\_]{5,30}$/;

const reEmail = /^[A-Za-z0-9]+@(gmail|protonmail)\.com$/;

const rePass1 = /[A-Z]/;
const rePass2 = /[a-z]/;
const rePass3 = /[0-9]/;
const rePass4 = /^.{8,50}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  console.log(username, email, password);
  // console.log({ username, email, password });

  if (!reUserName.test(username)) console.log("Wrong user name");

  if (!reEmail.test(email)) console.log("Wrong email");
  if (email.length <= 256) console.log("Wrong email length");

  if (!rePass1.test(password)) console.log("Wrong password A-Z");
  if (!rePass2.test(password)) console.log("Wrong password a-z");
  if (!rePass3.test(password)) console.log("Wrong password 0-9");
  if (!rePass4.test(password)) console.log("Wrong password Minimum 8 max 50 simboliu");
});
