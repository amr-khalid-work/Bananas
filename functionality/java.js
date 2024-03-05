var field1 = document.getElementById('field1');
var field2 = document.getElementById('field2');
var result = document.getElementById('result');
var pcForm = document.getElementById('pcForm');


pcForm.addEventListener('submit', function(refreshNot){
    
    if(!field1.value || !field2.value){
        alert("Enter values in the fields!");
        refreshNot.preventDefault();
        } else{
            var x = parseFloat(field1.value);
            var y = parseFloat(field2.value);
            
            var res = x / y * 100;
            
            result.innerText = "Result: " + res + "%";
            refreshNot.preventDefault();
        }
}
                        );
  
                           