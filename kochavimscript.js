window.onload = function() {
    
    
    const mozkoch=['קרנות השתלמות','קופת גמל להשקעה']
    const hishtalmot=["כללי"]
    
    lbltbldo.style.display="block";
    
    
    fetchdata(mozkoch[0],hishtalmot[0]).then(data => {
    data.sort((a, b) => b.tesuam - a.tesuam);
         
    
    var table;
     table = document.getElementById('klalikoch0');
    for (let tb=0; tb<=2;tb++){
                
                if (data[tb].tesuam){
                const trm = document.createElement('tr');
                td = document.createElement('td');
                td.style.color='#333';
                td.style.width="50px";
                td.style.backgroundColor='white';
                td.textContent = data[tb].mh;
                trm.appendChild(td);
            
                td = document.createElement('td');
                td.style.color='#333';
                td.style.backgroundColor='white' 
                td.style.width="250px"; 
                td.style.textAlign="right"
                td.style.paddingRight="5px"  
                td.textContent = data[tb].shemkupa;
                trm.appendChild(td);
                    
                td = document.createElement('td');
                td.style.backgroundColor='white'
                td.style.color='#333';
                td.style.width="80px";                 
                td.textContent = data[tb].tesuam + "%";     
                trm.appendChild(td);
                    
                table.appendChild(trm);   
                
                
                }
                
    }
       
       



    })
    .catch(error => {
        console.error('Error:', error);
    });
    fetchdata(mozkoch[1],hishtalmot[0]).then(data => {
        data.sort((a, b) => b.tesuam - a.tesuam);
         
        
        var table;
         table = document.getElementById('klalikoch1');
        for (let tb=0; tb<=2;tb++){
                    
                    if (data[tb].tesuam){
                    const trm = document.createElement('tr');
                    td = document.createElement('td');
                    td.style.color='#333';
                    td.style.backgroundColor='white';
                    td.style.width="50px";
                    td.textContent = data[tb].mh;
                    trm.appendChild(td);
                
                    td = document.createElement('td');
                    td.style.color='#333';
                    td.style.backgroundColor='white'
                    td.style.width="250px"; 
                    td.style.textAlign="right"
                    td.style.paddingRight="5px"  
                    td.textContent = data[tb].shemkupa;
                    trm.appendChild(td);
                        
                    td = document.createElement('td');
                    td.style.backgroundColor='white'
                    td.style.color='#333';
                    td.style.width="80px";                 
                    td.textContent = data[tb].tesuam + "%";     
                    trm.appendChild(td);
                        
                    table.appendChild(trm);   
                    
                    
                    }
                    
        }
           
           
    
    
    
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
