$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.modal').modal();
  getDoctors();
  $(document).on("click", "button.delete", handlePostDelete);
});


var leadValue = 0;
$("#save").on("click",validate);

function validate(event)
{
    event.preventDefault();
    if($("#firstname").val() && $("#lastname").val())
    {
        insertDoctor(event)
        $("#firstnamered").css("visibility","hidden");
        $("#lastnamered").css("visibility","hidden");
    }

    else if($("#firstname").val() && !$("#lastname").val()){
        $("#firstnamered").css("visibility","hidden");
        $("#lastnamered").css("visibility","visible");
    }

    else if(!$("#firstname").val() && $("#lastname").val()){
        $("#firstnamered").css("visibility","visible");
        $("#lastnamered").css("visibility","hidden");
    }

    else{
        $("#firstnamered").css("visibility","visible");
        $("#lastnamered").css("visibility","visible");
    }
}

function insertDoctor(event) {
    
  event.preventDefault();
  if ($("#leadCheck").prop( "checked" )) {
    leadValue = 1;
  } else {
    leadValue = 0;
   // console.log(leadValue)
  }
//   console.log(leadValue);
  var doctor = {
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    lead: leadValue,
    licenceno: "MD-"+$("#licenceno").val()
  };
  $.post("/api/adddoctor", doctor, function() {
    getDoctors();
  //  $("#firstname").val() = "";
   // $("#lastname").val() = "";
  }).then(function () {
    console.log("Ok")
})
.catch(function (e) {
    console.log(e.message)
});
}

function getDoctors() {
    $('#doctorList').empty();
  $.get("/api/doctors", function(data) {
    // console.log(data);
    //alert('The new doctor has been added')
    for (i = 0; i < data.length; i++){
  //  console.log(data[i].lead)
       if(data[i].lead === false)
            {data[i].lead ='No'} 
            else{data[i].lead = 'Yes'}
      $("#doctorList").append(`<tr>
                                        <!--    <td>${data[i].id}</td>-->
                                        <td>${data[i].firstname}</td>
                                        <td>${data[i].lastname}</td>
                                        <td>${data[i].lead}</td>
                                        <td><div><button class = "delete btn-floating btn-large waves-effect waves-light red"><i class="material-icons" id=${data[i].id}>
                                        delete
                                        </i></button></td>
                                    </tr>`);}
  });
  
}


 function deleteDoctor(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/doctors/" + id
    })
      .then(function() {
        getDoctors();
      });
  }

  function handlePostDelete(event) {
      event.preventDefault();
console.log(event.target.id)
    deleteDoctor(event.target.id);
  }
