var name="";
var id="";
var genre = "";
var total = 0;
var s = "";
// This function is used to search for the series by the name of the series

function getseries() {

let x=document.getElementById('seriesname').value;
if(window.XMLHttpRequest)
{
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        myObj = JSON.parse(this.responseText);
        name =myObj.Title;
        id = myObj.imdbID;
        genre = myObj.Genre;
        s = myObj.Poster;
        console.log(myObj);
        // This is used to display the image and name of the tv show searched by the user
        document.getElementById('headSeriesName').innerHTML=myObj.Title+'('+myObj.Year+'):'+'('+myObj.Type+')';
        document.getElementById('seriesimg').src=myObj.Poster;
        if(myObj.Response=="False")
        {
            document.getElementById('headSeriesName').innerHTML="Not Available";
            document.getElementById('seriesimg').src="img/avtar.jpg";    
        }
        if(x=="")
        { 
            document.getElementById('headSeriesName').innerHTML="Series Name";
            document.getElementById('seriesimg').src="img/avtar.jpg";
        }
    }
}

xmlhttp.open('GET','http://www.omdbapi.com/?t='+x+'&apikey=91d69910',true);
xmlhttp.send();
}




function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "demo_post2.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford");
}


//JQUERY
// This function showresult() is used to open the tv show page after inserting in the tv shows added by the user
function showresult()
{
    console.log(s);
    var datastring = 'name='+ name + '&id=' +id+'&genre='+genre+'&s='+s;
    console.log(datastring);

    $.ajax({
                    type: "POST",
                    url: 'name1.php',
                    data: datastring,
                    success: function(data)
                    {
                        console.log(data);
                        window.location = "http://localhost/Tvtracker/tv_show.php?t="+id;
                    }
                });
}


