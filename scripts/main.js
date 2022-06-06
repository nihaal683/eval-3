
  var form=document.querySelector("#form");
  var reports=document.querySelector("#reports");

  function display(data){
    var parent=document.createElement("div");
    parent.style.boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";

    var name=document.createElement("h1");
    name.innerText=data.name;

    var email=document.createElement("p");
    email.innerText=data.email;

    var address=document.createElement("p");
    address.innerText=data.address;

    var wallet=document.createElement("p");
    wallet.innerText=data.wallet;

   

  //   var obtainedMarks1=Number(data.score);

  // var td8 = document.createElement("h3");
  // if(obtainedMarks1<=3){
  //     td8.innerText="Learning";
  //     td8.style.color="red";
  // }else if(obtainedMarks1>=4 && obtainedMarks1<=7 ){
  //     td8.innerText="Achieving";
  //     td8.style.color="orange";
  // }
  // else if(obtainedMarks1>=8 && obtainedMarks1<=10 ){
  //     td8.innerText="Mastery";
  //     td8.style.color="green";
  // }


    var btn=document.createElement("button");
    btn.textContent="DELETE";
    btn.addEventListener("click",function(event){
      event.target.parentNode.remove();
    })

    parent.append(name,email,address,wallet,btn)

    reports.append(parent);
  }


  form.addEventListener("submit",function(event){
    event.preventDefault();

    var data={
      name:form.name.value,
       email:form.email.value,
       address:form.address.value,
       wallet:form.wallet.value,
    }
    display(data);
    console.log(data);
  })
  
