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
var q6 = []
var q7 = []
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
    if(preQ5[i].checked == true || preQ5[i].type == "text"){
      q5.push(preQ5[i].value)
    }
  }
  responses.push(q5)
  preQ6 = Array.from(document.getElementsByName("q6"))
  for(i = 0; i <= preQ6.length - 1; i++){
    if(preQ6[i].checked == true){
      q6.push(preQ6[i].value)
    }
  }
  responses.push(q6)
  preQ7 = Array.from(document.getElementsByName("q7"))
  for(i = 0; i <= preQ7.length - 1; i++){
    if(preQ7[i].checked == true || preQ7[i].type == "text"){
      q7.push(preQ7[i].value)
    }
  }
  responses.push(q7)
  preQ8 = Array.from(document.getElementsByName("q8"))
  for(i = 0; i <= preQ8.length - 1; i++){
    if(preQ8[i].checked == true){
      responses.push(preQ8[i].value)
    }
  }
  preQ9 = Array.from(document.getElementsByName("q9"))
  for(i = 0; i <= preQ9.length - 1; i++){
    if(preQ9[i].checked == true || preQ9[i].type == "text"){
      q9.push(preQ9[i].value)
    }
  }
  responses.push(q9)
  responses.push(document.getElementById("q10o1").value)
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
  preQ13 = Array.from(document.getElementsByName("q13"))
  for(i = 0; i <= preQ13.length - 1; i++){
    if(preQ13[i].checked == true){
      responses.push(preQ13[i].value)
      break
    }
    else if(preQ13[i].type == "text"){
      if(preQ13[i].value != ""){
        responses.push(preQ13[i].value)
        break
      }
    } 
  }
  preQ14 = Array.from(document.getElementsByName("q14"))
  for(i = 0; i <= preQ14.length - 1; i++){
    if(preQ14[i].checked == true){
      responses.push(preQ14[i].value)
    }
  }
  preQ15 = Array.from(document.getElementsByName("q15"))
  for(i = 0; i <= preQ15.length - 1; i++){
    if(preQ15[i].checked == true){
      responses.push(preQ15[i].value)
    }
  }
  validateInformation(responses)
  }
function validateInformation(array){
  // Error
  if(array.length < 30){
    Swal.fire({
      icon: "error",
      title: "Faltan preguntas por responder",
      confirmButtonColor: "#3085d6",
      footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
    })
    q5 = []
    q6 = []
    q7 = [] 
    q9 = []
    responses = []
  }
  else if(array.length == 30){
    // Error
    if (array[1] == ""){
      Swal.fire({
        icon: "error",
        title: "Falta el nombre de la empresa",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q6 = []
      q7 = []
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
      q6 = []
      q7 = []
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
      q6 = []
      q7 = []
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
      q6 = []
      q7 = []
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
      q6 = []
      q7 = []
      q9 = []
      responses = []
    }
    else if(array[24] == "" || array[24] == []){
      Swal.fire({
        icon: "error",
        title: "Faltan contestar la pregunta 10",
        confirmButtonColor: "#3085d6",
        footer: '<a>¿Problemas al contestar la encuesta?, llama al +526646863952</a>'
      })
      q5 = []
      q6 = []
      q7 = []
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
      q12: `${array[26]}`,
      q13: `${array[27]}`,
      q14: `${array[28]}`,
      q15: `${array[29]}`
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
    axios(config)
      .then((res) => {
        q5 = []
        q6 = []
        q7 = [] 
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
        q6 = []
        q7 = []
        q9 = []
        responses = []
        console.log(err)
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
function cleanInputTextQ13(){
  document.getElementById("q13o4").value = ""
}
function uncheckOptionQ13(){
  let preQ13 = Array.from(document.getElementsByName("q13"))
  for(i = 0; i <= preQ13.length - 1 ; i++){
    if(preQ13[i].type == "radio"){
      preQ13[i].checked = false
    }
  }
}