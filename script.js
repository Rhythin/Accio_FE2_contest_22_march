

let arr = [
    { name: "john", age: "18", profession: "developer" },
    { name: "jack", age: "20", profession: "developer" },
    { name: "karen", age: "19", profession: "admin" },
  ];


  const filterbutton= document.getElementById(filter)
  const addButton =document.getElementById(add)


  addButton.addEventListener('click', addToArray)

  function addToArray(){
    let namestr=document.getElementById("name").value
    let professionstr=document.getElementById("profession").value
    let agestr=document.getElementById("age").value

    let newemployee={ name:namestr, age:agestr, profession:professionstr }
    arr.push(newemployee)

    console.log(arr)
  }