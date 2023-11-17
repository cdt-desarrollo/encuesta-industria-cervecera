function getValues() {
  var data = [];
  var ele = document.getElementsByTagName("input");
  var companyName = document.getElementById("companyName").value;
  var staffName = document.getElementById("staffName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type == "radio" || "text")) {
      if (ele[i].checked) {
        data.push(ele[i].value);
      }
    }
  }
  data.push(companyName, staffName, email, phone)
  console.log(data)
  if(data.length == 21){
    if(data[18] == "")
    {
      Swal.fire({
        icon: "info",
        title: "Falta que escribas el nombre de tu empresa",
        confirmButtonColor: "#3085d6"
      })
    }
    else if(data[18] != "")
    {
      Swal.fire({
        position: "center",
        title: "Enviando información",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      sendData(data)
    }
  }
  else {
    Swal.fire({
      icon: "error",
      title: "Faltan respuestas por contestar o que agregues el nombre de tu empresa",
      confirmButtonColor: "#3085d6"
    })
  }
}
function sendData(array) {
    var data = JSON.stringify({
      q1: `${array[0]}`,
      q2: `${array[1]}`,
      q3: `${array[2]}`,
      q4: `${array[3]}`,
      q5: `${array[4]}`,
      q6: `${array[5]}`,
      q7: `${array[6]}`,
      q8: `${array[7]}`,
      q9: `${array[8]}`,
      q10: `${array[9]}`,
      q11: `${array[10]}`,
      q12: `${array[11]}`,
      q13: `${array[12]}`,
      q14: `${array[13]}`,
      q15: `${array[14]}`,
      q16: `${array[15]}`,
      q17: `${array[16]}`,
      name: `${array[17]}`,
      company: `${array[18]}`,
      email: `${array[19]}`,
      phone: `${array[20]}`
    });
    // sheet.best
    var config = {
      method: "post",
      url: "https://sheet.best/api/sheets/32aacf91-902e-4e88-8d70-e596b2f41ceb/tabs/trim22023",
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
        notification.innerHTML = `<h4 class="text-center">Gracias por llenar la encuesta, ya puede cerrar esta ventana.</h4>`;
        divToInsertHTMLTags.insertAdjacentElement("beforeend", notification);
      })
      .catch(async(err) => {
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
          title: "Falta escribir el nombre de tu empresa",
          confirmButtonColor: "#3085d6"
        })
      });
}
function a100Malta(quantity){
  to100 = 100 - quantity
  document.getElementById("q1MaltaInternacional").value = to100
}
function a100Cebada(quantity){
  to100 = 100 - quantity
  document.getElementById("q1CebadaInternacional").value = to100
}
function a100FeculasAlmidonesDerivados(quantity){
  to100 = 100 - quantity
  document.getElementById("q1FeculasAlmidonesDerivadosInternacional").value = to100
}
function a100MaquinariaEquipo(quantity){
  to100 = 100 - quantity
  document.getElementById("q1MaquinariaEquipoInternacional").value = to100
}
function a100EnvasesAmpolletas(quantity){
  to100 = 100 - quantity
  document.getElementById("q1EnvasesAmpolletasInternacional").value = to100
}
function disabledInputsQ2(x){
  if(x.checked == true){
    document.getElementById("q2MaltaProducto").value = 0
    document.getElementById("q2MaltaNacional").value = 0
    document.getElementById("q2MaltaImportada").value = 0
    document.getElementById("q2CebadaProducto").value = 0
    document.getElementById("q2CebadaNacional").value = 0
    document.getElementById("q2CebadaImportada").value = 0
    document.getElementById("q2FeculasAlmidonesDerivadosProducto").value = 0
    document.getElementById("q2FeculasAlmidonesDerivadosNacional").value = 0
    document.getElementById("q2FeculasAlmidonesDerivadosImportada").value = 0
    document.getElementById("q2MaquinariaEquipoProducto").value = 0
    document.getElementById("q2MaquinariaEquipoNacional").value = 0
    document.getElementById("q2MaquinariaEquipoImportada").value = 0
    document.getElementById("q2EnvasesAmpolletasProducto").value = 0
    document.getElementById("q2EnvasesAmpolletasNacional").value = 0
    document.getElementById("q2EnvasesAmpolletasImportada").value = 0
    document.getElementById("q2MaltaProducto").disabled = true
    document.getElementById("q2MaltaNacional").disabled = true
    document.getElementById("q2MaltaImportada").disabled = true
    document.getElementById("q2CebadaProducto").disabled = true
    document.getElementById("q2CebadaNacional").disabled = true
    document.getElementById("q2CebadaImportada").disabled = true
    document.getElementById("q2FeculasAlmidonesDerivadosProducto").disabled = true
    document.getElementById("q2FeculasAlmidonesDerivadosNacional").disabled = true
    document.getElementById("q2FeculasAlmidonesDerivadosImportada").disabled = true
    document.getElementById("q2MaquinariaEquipoProducto").disabled = true
    document.getElementById("q2MaquinariaEquipoNacional").disabled = true
    document.getElementById("q2MaquinariaEquipoImportada").disabled = true
    document.getElementById("q2EnvasesAmpolletasProducto").disabled = true
    document.getElementById("q2EnvasesAmpolletasNacional").disabled = true
    document.getElementById("q2EnvasesAmpolletasImportada").disabled = true

  }
  else{
    document.getElementById("q2MaltaProducto").value = ""
    document.getElementById("q2MaltaNacional").value = ""
    document.getElementById("q2MaltaImportada").value = ""
    document.getElementById("q2CebadaProducto").value = ""
    document.getElementById("q2CebadaNacional").value = ""
    document.getElementById("q2CebadaImportada").value = ""
    document.getElementById("q2FeculasAlmidonesDerivadosProducto").value = ""
    document.getElementById("q2FeculasAlmidonesDerivadosNacional").value = ""
    document.getElementById("q2FeculasAlmidonesDerivadosImportada").value = ""
    document.getElementById("q2MaquinariaEquipoProducto").value = ""
    document.getElementById("q2MaquinariaEquipoNacional").value = ""
    document.getElementById("q2MaquinariaEquipoImportada").value = ""
    document.getElementById("q2EnvasesAmpolletasProducto").value = ""
    document.getElementById("q2EnvasesAmpolletasNacional").value = ""
    document.getElementById("q2EnvasesAmpolletasImportada").value = ""
    document.getElementById("q2MaltaProducto").disabled = false
    document.getElementById("q2MaltaNacional").disabled = false
    document.getElementById("q2MaltaImportada").disabled = false
    document.getElementById("q2CebadaProducto").disabled = false
    document.getElementById("q2CebadaNacional").disabled = false
    document.getElementById("q2CebadaImportada").disabled = false
    document.getElementById("q2FeculasAlmidonesDerivadosProducto").disabled = false
    document.getElementById("q2FeculasAlmidonesDerivadosNacional").disabled = false
    document.getElementById("q2FeculasAlmidonesDerivadosImportada").disabled = false
    document.getElementById("q2MaquinariaEquipoProducto").disabled = false
    document.getElementById("q2MaquinariaEquipoNacional").disabled = false
    document.getElementById("q2MaquinariaEquipoImportada").disabled = false
    document.getElementById("q2EnvasesAmpolletasProducto").disabled = false
    document.getElementById("q2EnvasesAmpolletasNacional").disabled = false
    document.getElementById("q2EnvasesAmpolletasImportada").disabled = false
  }
}
