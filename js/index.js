$(document).ready(function(){
  var txt ="";
  var band =0;
  var band2=0;
  
  $("#searchBtn").on("click", function(){
    txt = $("#searchText").val();
 console.log(txt);
  
 $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+txt+"&format=json&callback=?", function(data){
    console.log(data);
    var html="";
  
    for(var i = 0; i <data[1].length; i++){
       if(i===1 && band2===0){
     i=0;
     band2=1;
   }
      if(band===0){
        html+="<h2><span id='result'> Results for: \""+data[0]+"\"</span></br></br></br></h2>"
        band =1;
      }else{
      html+="<li><a href="+data[3][i]+" target='_blank' style='text-decoration: none'><span id='title'>"+data[1][i]+ "</br></a></span><p id ='des' class='paragraph'>"+data[2][i]+"</p></br></br></li>";
      $("#list").html(html);
      }
    }
  });
    
     });
  
  
});