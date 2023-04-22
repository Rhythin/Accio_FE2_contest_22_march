

let arr = [
    { name: "john", age: "18", profession: "developer" },
    { name: "jack", age: "20", profession: "developer" },
    { name: "karen", age: "19", profession: "admin" },
  ];


  const filterbutton= document.getElementById("filter")
  const addButton =document.getElementById("add")


  addButton.addEventListener('click', addToArray)

  function addToArray(){
    let name=document.getElementById("name")
    let namestr=name.value
    let profession=document.getElementById("profession")
    let professionstr=profession.value
    let age=document.getElementById("age").value
    let agestr=age.value

    let newemployee={ name:namestr, age:agestr, profession:professionstr }
    arr.push(newemployee)

    console.log(arr)
  }