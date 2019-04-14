$(document).ready(function() {
    $('.sidenav').sidenav();
  getDoctors();
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
    lead: leadValue
  };
  $.post("/api/adddoctor", doctor, function(dbdoctor) {
    alert("The new doctor has been added");
    getDoctors();
  });
}

function getDoctors() {
    $('#doctorList').empty();
  $.get("/api/doctors", function(data) {
    // console.log(data);
    //alert('The new doctor has been added')
    for (i = 0; i < data.length; i++)
      // if(data[i].lead === 0){data[i].lead ='Yes'} else{data[i.lead = 'No']}
      $("#doctorList").append(`<tr>
                                        <td>${data[i].id}</td>
                                        <td>${data[i].firstname}</td>
                                        <td>${data[i].lastname}</td>
                                        <td>${data[i].lead}</td>
                                    </tr>`);
  });
}
