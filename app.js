
function makeTable() {
    var tableSize = Number(document.getElementById("tableInput").value) + 1;
    console.log(tableSize)
    createTable(tableSize)
    document.getElementById("create").disabled = true;
  }
  
  
  function createTable(x) {
  
      var myTableDiv = document.getElementById("multiplicationTable");
       
      var table = document.createElement('TABLE');
      table.border='1';
      
      var tableBody = document.createElement('TBODY');
      table.appendChild(tableBody);
        
      for (var i=1; i<x; i++){
         var tr = document.createElement('TR');
         tableBody.appendChild(tr);
         
        
        for (var j=1; j<x; j++){
             var td = document.createElement('TD');
             td.width='25';
             td.appendChild(document.createTextNode(i * j));
             tr.appendChild(td);
         }
      }
      myTableDiv.appendChild(table);
      
  }
  
  function clearPage(){
    console.log("clearing")
    location.reload()};
   
  