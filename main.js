// var personalInformation = []
// var q1 = []
// var q2 = []
// var q3 = [] 
// var q4 = [] 
// var q5 = [] 
// var q6 = [] 
// var q7 = [] 
// var q8 = [] 
// var q9 = [] 
var q5 = []
var q9 = []
// var q11 = [] 
// var q12 = [] 
var responses = []
function getValues(){
  prePersonalInformation = Array.from(document.getElementsByName("personalInformation"))
  for(i = 0; i <= prePersonalInformation.length - 1; i++){
    responses.push(prePersonalInformation[i].value)
  }
  preQ1 = Array.from(document.getElementsByName("q1"))
  for(i = 0; i <= preQ1.length - 1; i++){
    responses.push(preQ1[i].value)
  }
  // preQ2 = Array.from(document.getElementsByName("q2"))
  // for(i = 0; i <= preQ2.length - 1; i++){
  //   responses.push(preQ2[i].value)
  // }
  preQ2 = Array.from(document.getElementsByName("q2"))
  for(i = 0; i <= preQ2.length - 1; i++){
    if(preQ2[i].checked == true){
      responses.push(preQ2[i].value)
    }
  }
  preQ3 = Array.from(document.getElementsByName("q3"))
  for(i = 0; i <= preQ3.length - 1; i++){
    if(preQ3[i].checked == true){
      responses.push(preQ3[i].value)
    }
  }
  preQ4 = Array.from(document.getElementsByName("q4"))
  for(i = 0; i <= preQ4.length - 1; i++){
    responses.push(preQ4[i].value)
  }
  preQ5 = Array.from(document.getElementsByName("q5"))
  for(i = 0; i <= preQ5.length - 1; i++){
    if(preQ5[i].checked == true){
      q5.push(preQ5[i].value)
    }
  }
  responses.push(q5)
  preQ6 = Array.from(document.getElementsByName("q6"))
  for(i = 0; i <= preQ6.length - 1; i++){
    if(preQ6[i].checked == true){
      responses.push(preQ6[i].value)
    }
  }
  preQ7 = Array.from(document.getElementsByName("q7"))
  for(i = 0; i <= preQ7.length - 1; i++){
    if(preQ7[i].checked == true){
      responses.push(preQ7[i].value)
    }
  }
  preQ8 = Array.from(document.getElementsByName("q8"))
  for(i = 0; i <= preQ8.length - 1; i++){
    if(preQ8[i].checked == true){
      responses.push(preQ8[i].value)
    }
  }
  preQ9 = Array.from(document.getElementsByName("q9"))
  for(i = 0; i <= preQ9.length - 1; i++){
    if(preQ9[i].checked == true){
      q9.push(preQ9[i].value)
    }
  }
  responses.push(q9)
  preQ10 = Array.from(document.getElementsByName("q10"))
  for(i = 0; i <= preQ10.length - 1; i++){
    if(preQ10[i].checked == true){
      responses.push(preQ10[i].value)
    }
  }
  preQ11 = Array.from(document.getElementsByName("q11"))
  for(i = 0; i <= preQ11.length - 1; i++){
    if(preQ11[i].checked == true){
      responses.push(preQ11[i].value)
    }
  }
  preQ12 = Array.from(document.getElementsByName("q12"))
  for(i = 0; i <= preQ12.length - 1; i++){
    if(preQ12[i].checked == true){
      responses.push(preQ12[i].value)
    }
  }
  validateInformation(responses)
  }
function validateInformation(array){
  // Error
  if(array.length < 27){
    Swal.fire({
      icon: "error",
      title: "Faltan preguntas por responder",
      confirmButtonColor: "#3085d6",
      footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
    })
    q5 = []
    q9 = []
    responses = []
  }
  else if(array.length == 27){
    console.log(array)
    // Error
    if (array[1] == ""){
      Swal.fire({
        icon: "error",
        title: "Falta el nombre de la empresa",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q9 = []
      responses = []
    }
    else if(array[4] == "" || array[6] == "" || array[8] == "" || array[10] == "" || array[12] == "" ){
      Swal.fire({
        icon: "error",
        title: "Faltan datos en pregunta 1",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q9 = []
      responses = []
    }
    else if(array[16] == "" || array[17] == "" || array[18] == ""){
      Swal.fire({
        icon: "error",
        title: "Faltan datos en pregunta 4",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q9 = []
      responses = []
    }
    else if(array[19] == "" || array[19] == []){
      Swal.fire({
        icon: "error",
        title: "Faltan contestar la pregunta 5",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q9 = []
      responses = []
    }
    else if(array[23] == "" || array[23] == []){
      Swal.fire({
        icon: "error",
        title: "Faltan contestar la pregunta 9",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q9 = []
      responses = []
    }
    // Todo en orden
    else {
      console.log(array)
      Swal.showLoading();
      sendData(array)
    }
  }
}
function sendData(array) {
    var data = JSON.stringify({
      nombre: `${array[0]}`,
      empresa: `${array[1]}`,
      correo: `${array[2]}`,
      telefono: `${array[3]}`,
      q1o1Nacional: `${array[4]}`,
      q1o1Internacional: `${array[5]}`,
      q1o2Nacional: `${array[6]}`,
      q1o2Internacional: `${array[7]}`,
      q1o3Nacional: `${array[8]}`,
      q1o3Internacional: `${array[9]}`,
      q1o4Nacional: `${array[10]}`,
      q1o4Internacional: `${array[11]}`,
      q1o5Nacional: `${array[12]}`,
      q1o5Internacional: `${array[13]}`,
      q2: `${array[14]}`,
      q3: `${array[15]}`,
      q4Local: `${array[16]}`,
      q4Nacional: `${array[17]}`,
      q4Exportacion: `${array[18]}`,
      q5: `${array[19]}`,
      q6: `${array[20]}`,
      q7: `${array[21]}`,
      q8: `${array[22]}`,
      q9: `${array[23]}`,
      q10: `${array[24]}`,
      q11: `${array[25]}`,
      q12: `${array[26]}`
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/industria-cervecera",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // restdb.io
    // var config = {
    //   method: "post",
    //   url: "https://responses-5389.restdb.io/rest/responses",
    //   // mode: "cors",
    //   headers: {
    //     "x-apikey": "63ea9066478852088da681dd",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };
  
    axios(config)
      .then((res) => {
        q5 = []
        q9 = []
        responses = []
        // console.log(res)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Información enviada, ya puede cerrar esta ventana",
          showConfirmButton: false,
          confirmButtonColor: "#3085d6",
        });
        document.getElementById("deleteDiv").remove();
        let divToInsertHTMLTags = document.getElementById("divToInsertHTMLTags");
        let notification = document.createElement("div");
        notification.innerHTML = `<h4 class="text-center">Gracias por contestar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
        q5 = []
        q9 = []
        responses = []
        console.log(err)
        // const { value: accept} =
        // await Swal.fire({
        //   icon: "error",
        //   title: "¡Algo salió mal!",
        //   text: "Recuerda que tu nombre es obligatorio",
        //   confirmButtonColor: "#3085d6",
        // })
        // if(accept){
        //   location.reload()
        // };
        Swal.fire({
          icon: "error",
          title: "Error",
          confirmButtonColor: "#3085d6",
          footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
        })
      });
}
function to100(input){
  if(input.value > 100){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡No puede ser mayor a 100!",
    });
    input.value = ""
  }
  else if(input.value < 0){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡No puede ser menor a 0!",
    });
    input.value = ""
  }
}
function a100Malta(input){
  to100(input)
  total = 100 - input.value
  if(input.id == "q1o1"){
    document.getElementById("q1o1Internacional").value = total.toFixed(2)
  }
  else if(input.id == "q2o1"){
    document.getElementById("q2o1Importada").value = total.toFixed(2)
  }
}
function a100Cebada(input){
  to100(input)
  total = 100 - input.value
  if(input.id == "q1o2"){
    document.getElementById("q1o2Internacional").value = total.toFixed(2)
  }
  else if(input.id == "q2o2"){
    document.getElementById("q2o2Importada").value = total.toFixed(2)
  }
}
function a100FeculasAlmidonesDerivados(input){
  to100(input)
  total = 100 - input.value
  if(input.id == "q1o3"){
    document.getElementById("q1o3Internacional").value = total.toFixed(2)
  }
  else if(input.id == "q2o3"){
    document.getElementById("q2o3Importada").value = total.toFixed(2)
  }
}
function a100MaquinariaEquipo(input){
  to100(input)
  total = 100 - input.value
  if(input.id == "q1o4"){
    document.getElementById("q1o4Internacional").value = total.toFixed(2)
  }
  else if(input.id == "q2o4"){
    document.getElementById("q2o4Importada").value = total.toFixed(2)
  }
}
function a100EnvasesAmpolletas(input){
  to100(input)
  total = 100 - input.value
  if(input.id == "q1o5"){
    document.getElementById("q1o5Internacional").value = total.toFixed(2)
  }
  else if(input.id == "q2o5"){
    document.getElementById("q2o5Importada").value = total.toFixed(2)
  }
}
// function disabledInputsQ2(x){
//   if(x.checked == true){
//     document.getElementById("q2o1").value = 0
//     document.getElementById("q2o1Importada").value = 0
//     document.getElementById("q2o2").value = 0
//     document.getElementById("q2o2Importada").value = 0
//     document.getElementById("q2o3").value = 0
//     document.getElementById("q2o3Importada").value = 0
//     document.getElementById("q2o4").value = 0
//     document.getElementById("q2o4Importada").value = 0
//     document.getElementById("q2o5").value = 0
//     document.getElementById("q2o5Importada").value = 0
//     document.getElementById("q2o1").disabled = true
//     document.getElementById("q2o2").disabled = true
//     document.getElementById("q2o3").disabled = true
//     document.getElementById("q2o4").disabled = true
//     document.getElementById("q2o5").disabled = true

//   }
//   else{
//     document.getElementById("q2o1").value = ""
//     document.getElementById("q2o1Importada").value = 100
//     document.getElementById("q2o2").value = ""
//     document.getElementById("q2o2Importada").value = 100
//     document.getElementById("q2o3").value = ""
//     document.getElementById("q2o3Importada").value = 100
//     document.getElementById("q2o4").value = ""
//     document.getElementById("q2o4Importada").value = 100
//     document.getElementById("q2o5").value = ""
//     document.getElementById("q2o5Importada").value = 100
//     document.getElementById("q2o1").disabled = false
//     document.getElementById("q2o2").disabled = false
//     document.getElementById("q2o3").disabled = false
//     document.getElementById("q2o4").disabled = false
//     document.getElementById("q2o5").disabled = false
//   }
// }
// function calcularConsumoNacional(input){
//   q5o2 = document.getElementById("q5o2")
//   q5o3 = document.getElementById("q5o3")
//   if(input.value > 100){
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "¡No puede ser mayor a 100!",
//     });
//     input.value = ""
//     q5o2.value = ""
//     q5o3.value = ""
//   }
//   if(input.value == 100){
//     q5o2.value = 0
//     q5o2.disabled = true
//     q5o3.value = 0
//   }
//   else if(input.value < 0){
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "¡No puede ser menor a 0!",
//     });
//     input.value = ""
//     q5o2.value = ""
//     q5o3.value = ""
//   }
//   else if(input.value > 0 && input.value < 100){
//     total = 100.00
//     if(parseInt(input.value) == total){
//       q5o2.value = ""
//       q5o3.value = "" 
//       q5o2.disabled = true
//     }
//     else{
//       q5o3.value = 0
//       restante = total - parseFloat(input.value)
//       q5o2.value = restante.toFixed(2)
//       q5o2.disabled = false
//     }
//   }
// }
// function calcularConsumoImportado(input){
//   q5o1 = document.getElementById("q5o1")
//   q5o3 = document.getElementById("q5o3")
//   if(parseFloat(input.value) + parseFloat(q5o1.value) == 100){
//     q5o3.value = ""
//   }
//   else{
//     q5o3.value = ""
//     restante = 100.00 - (parseFloat(q5o1.value) + parseFloat(input.value))
//     if (restante > 100.00){
//       input.value = ""
//       q5o3.value = ""
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "¡El total no puede ser mayor a 100!",
//       });
//       input.value = ""
//       q5o1.value = ""
//       q5o3.value = ""
//     }
//     else if(restante < 0){
//       q5o3.value = ""
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "¡El total no puede ser mayor a 100!",
//       });
//       input.value = ""
//       q5o1.value = ""
//       q5o3.value = ""
//     }
//     else if(restante > 0 && restante < 100){
//       q5o3.value = restante.toFixed(2)
//     }
//   }
// }
// function agregarAlArregloQ10(){
//   q10o1 = document.getElementById("q10o1")
//   q10o2 = document.getElementById("q10o2")
//   q10o3 = document.getElementById("q10o3")
//   q10o4 = document.getElementById("q10o4")
//   let arrayQ10 =[]
//   for(let i = 0; i<=3; i++){
//     if(i == 0){
//       if(q10o1.checked == true && i == 0){
//         arrayQ10.push(q10o1.value)
//       }
//     }
//     else if(i == 1){
//       if(q10o2.checked == true && i == 1){
//         arrayQ10.push(q10o2.value)
//       }
//     }
//     else if(i == 2){
//       if(q10o3.checked == true && i == 2){
//         arrayQ10.push(q10o3.value)
//       }
//     }
//     else if(i == 3){
//       if(q10o4.checked == true && i == 3){
//         arrayQ10.push(q10o4.value)
//       }
//     }
//   }
//   q10 = arrayQ10.toString()
// }