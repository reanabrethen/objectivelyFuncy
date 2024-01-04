// YOUR CODE GOES HERE!!!
/*************************/

function getFirstName(obj){
  return obj.firstName
}


//use clearer parameters --> replace obj w/ 'person'
//--------------------------------------------------

function getLastName(obj){
  return obj.lastName
}

//use clearer parameters --> replace obj w/ 'person'
//--------------------------------------------------


function getFullName(obj){
  return obj.firstName + ' ' + obj.lastName
}

//use clearer parameters --> replace obj w/ 'person'
//--------------------------------------------------


function setFirstName(obj, str){       //(person, newName)
  //access the firstName property of the person,
  //redefine to new name
  obj.firstName = str           //person.firstName = newName
 
 //return person object back
 return obj                     //return person
}

//use clearer parameters --> replace obj w/ 'person' & str w/ 'newName'
//--------------------------------------------------------------------


function setAge(obj, person){    //(person, newAge)
  obj.age = person    //person.age = newAge
  return obj          //return person
}
//use clearer parameters --> replace obj w/ 'person' & person w/ 'newAge'
//--------------------------------------------------


function giveBirthday(obj){             //giveBirthday(person)

  if(obj.age >= 1){
       obj.age +=1
    }else{
      if(!obj.age){
        obj.age = 1
      }
    } return obj
  }

  //REVERSE FUNCTION ABOVE
// function givesBirthday(obj){
//   if(!obj.age){
//     obj.age = 1
//   }else{
//     obj.age +=1
//   }return obj
// }


//KYLE'S SOLUTION
 //function givesBirthday(person){
  //check if there is an age property **
 //if not, create one**
// if(person.age === undefined){
//   person.age = 1
// }else{
// //if so, increment **
//  //return obj to user **
//  person.age ++
// } return person
// }

//use clearer parameters --> replace obj w/ 'person'
//** means PSEUDO CODE W/IN CODE
//--------------------------------------------------



  function marry(person1, person2){
    //target person.married ==> to true
   person1.married = true
   person2.married = true
    //target person1.spouseName = person2Name {combine}
  person1.spouseName = person2.firstName + ' ' + person2.lastName
  person2.spouseName = person1.firstName + ' ' + person1.lastName
  
//person1.spouseName = getFullName(person2)
//person2.spouseName = getFullName(person1)
}


//-----------------------------------------------------


function divorce(person1, person2){
  person1.married = false
  person2.married = false
  
  delete person1.spouseName
  delete person2.spouseName
  
}



/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
