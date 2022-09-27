// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    var sector=document.getElementById('formGroupSector').value;
    var agency=document.getElementById('formGroupAgency').value;
    var organization=document.getElementById('reportOrg').value;
    var affiliation=document.getElementById('yesOrNo').value;
    var upload=document.getElementById('upload').value;
    var report=document.getElementById('reportInfo').value;

    var checkbox=document.getElementById('Affirm').checked?document.getElementById('Affirm').value:'';

    console.log(sector, agency, organization, affiliation, upload, report, checkbox)
   
    let anonymousReport={
      sector:sector,
      agency:agency,
      organization:organization,
      affiliation:affiliation,
      upload:upload,
      report:report,
      checkbox:checkbox,
    }

    console.log(anonymousReport);
    localStorage.setItem('anonymousReport_data',JSON.stringify(anonymousReport))

    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// retnHome.onclick = function(){
//   window.location.href = 'https://www.figma.com/file/w44lgvHGdF2YveGTUyyq5o/SayIt-Platform?node-id=4%3A4';
// }


// LOCAL STORAGE STARTS HERE 
function submit()
  {
    
  }
  


