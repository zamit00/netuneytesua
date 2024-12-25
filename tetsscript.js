
async function fetchdata(x,y) {
    
    return fetch('kupotKlali.xml')
    .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
    .then(xmlString => {
        const parser = new DOMParser(); 
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        const rows = xmlDoc.getElementsByTagName("Row");
        let colllen;
        let coll = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent ||  '';
            const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
            const yitratnehasim = row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
            const divuach = row.getElementsByTagName("MATZAV_DIVUACH")[0]?.textContent ||  '';
            const ochlosiyayaad = row.getElementsByTagName("UCHLUSIYAT_YAAD")[0]?.textContent ||  '';
            const mhkupa = row.getElementsByTagName("ID")[0]?.textContent ||  '';
            const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent ||  '';
            const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent ||  '';
            const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent ||  '';
            const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent ||  '';
            
           
            if (divuach === "דווח" && !shemkupa.includes('ניהול אישי') && !shemkupa.includes('IRA') &&
                ochlosiyayaad !== "עובדי סקטור מסויים" && ochlosiyayaad !== `עובדי מפעל/גוף מסויים`
                && mozar !== 'מטרה אחרת' && mas !== 'מבטיח תשואה' && mozar===x && mas===y) {
            colllen=coll.length;
            coll.push({
                mh: mhkupa, 
                shemkupa: shemkupa, 
                mozar: mozar, 
                tesuam: Number(tesuam), 
                mas: mas, 
                yitra: yitratnehasim, 
                ochlosiyayaad: ochlosiyayaad, 
                divuach: divuach, 
                tesuam36: Number(tesuam36), 
                tesuam60: Number(tesuam60),
                
            });

           
        }
        
        
        }
        
        

        return coll;  
    })
    .catch(error => {
        console.error('Error:', error);
        return [];  // מחזירים מערך ריק במקרה של שגיאה
    });
}

async function fetchnechasim(x,y){
    return fetch('nechasim.xml')
    .then(response => response.text()) 
    .then(nechsimstring => {
      const parser = new DOMParser(); 
      const xmlNechasim = parser.parseFromString(nechsimstring, "application/xml"); 
      const rows = xmlNechasim.getElementsByTagName("Row");
      let colln = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        
       
        const idkup=row.getElementsByTagName("ID_KUPA")[0]?.textContent ||  '';
        const sugneches = row.getElementsByTagName("ID_SUG_NECHES")[0]?.textContent ||  '';
        const schumsugneches = row.getElementsByTagName("SCHUM_SUG_NECHES")[0]?.textContent ||  '';
        const ahuzsugneches = row.getElementsByTagName("ACHUZ_SUG_NECHES")[0]?.textContent ||  '';
        
        
        if(Number(idkup)===Number(x) && schumsugneches && Number(schumsugneches)>0 && Number(sugneches)===Number(y) ){
            
            
            colln.push({schumsugneches:schumsugneches,ahuzsugneches:ahuzsugneches}) ; 
            return colln;
           }
      
        
    }
    
   
    
      })
    
      .catch(error => console.error('Error:', error));
  
}




function processData() {
    document.getElementById('tbldo').innerHTML='';
    var maslul= document.getElementById("maslul-type").value;
    var moz=document.getElementById("product").value;
   const layeled=["חיסכון לילד -חוסכים המעדיפים סיכון מועט","חיסכון לילד -חוסכים המעדיפים סיכון בינוני",
    "חיסכון לילד -חוסכים המעדיפים סיכון גבוה","הלכה יהודית"];
    const hishtalmot=["אג\"ח ממשלות","אג\"ח סחיר","אשראי ואג\"ח","הלכה יהודית","כללי","כספי (שקלי)","מניות"
                      ,"מניות סחיר","משולב מניות","משולב סחיר","עוקב מדד s&p 500",
                      "עוקב מדדי אג\"ח","עוקב מדדי מניות","עוקב מדדים - גמיש"];
    const gemel=["50-60","אג\"ח ממשלות","אג\"ח סחיר","אשראי ואג\"ח","הלכה יהודית","50-60","כספי (שקלי)","מניות "
                 ,"מניות סחיר","60 ומעלה","משולב סחיר","עוקב מדד s&p 500","עוקב מדדי אג\"ח","עוקב מדדי מניות","עוקב מדדים - גמיש"];
    const merkazitlepizuyim=["כללי"];
    var mozarchoose;

    if (moz==='קרנות השתלמות'){mozarchoose=hishtalmot;}
    if (moz==='תגמולים ואישית לפיצויים'){mozarchoose=gemel;}
    if (moz==='קופת גמל להשקעה'){mozarchoose=hishtalmot;}
    if (moz==='קופת גמל להשקעה - חסכון לילד'){mozarchoose=layeled;}
    if (moz==='מרכזית לפיצויים'){mozarchoose=merkazitlepizuyim;}
       
    const lbltbldo= document.getElementById('lbltbldo');

     lbltbldo.style.display="block";
    
    for (let i=0; i<= mozarchoose.length-1;i++){
    fetchdata(moz,mozarchoose[i]).then(data => {
        
        
    if(document.getElementById("one").checked){
    data.sort((a, b) => b.tesuam - a.tesuam);
    lbltbldo.innerText="תשואה מצטברת 12 חודשים";
        
    }
    else if(document.getElementById("three").checked){
    data.sort((a, b) => b.tesuam36 - a.tesuam36);
    lbltbldo.innerText="תשואה מצטברת 3 שנים"
    }
    else{
    data.sort((a, b) => b.tesuam60 - a.tesuam60);
    lbltbldo.innerText="תשואה מצטברת 5 שנים"
    }
    
    const table = document.createElement('table');
    
    
    table.id = 'myTable';
    table.className = 'tbldata';
    table.style.borderCollapse='collapse';
    document.getElementById('tbldo').appendChild(table);
    
   
            const headerRow = document.createElement('tr');
            th = document.createElement('th');
            th.style.color='white';
            th.style.backgroundColor='#333';
            th.style.textAlign="center";
            th.textContent = 'מספר מה'  
            headerRow.appendChild(th);
            th = document.createElement('th');
            th.style.color='white';
            th.style.backgroundColor='#333';
            th.style.textAlign="center";
            th.textContent = 'שם המסלול: '+hishtalmot[i];
            headerRow.appendChild(th);
            th = document.createElement('th');
            th.style.color='white';
            th.style.backgroundColor='#333';
            th.style.textAlign="center";
            th.textContent = 'תשואה';
            headerRow.appendChild(th);
            table.appendChild(headerRow);
            table.style.display = 'none';
            
            for (let tb=0; tb<=data.length-1;tb++){
                
                if (data[tb].tesuam){
                const trm = document.createElement('tr');
                td = document.createElement('td');
                td.style.color='#333';
                td.style.backgroundColor='white';
                td.textContent = data[tb].mh;
                trm.appendChild(td);
            
                td = document.createElement('td');
                td.style.color='#333';
                td.style.backgroundColor='white'  
                td.textContent = data[tb].shemkupa;
                trm.appendChild(td);
                    
                td = document.createElement('td');
                td.style.backgroundColor='white'
                td.style.color='#333';
                
                 if(document.getElementById("one").checked){   
                td.textContent = data[tb].tesuam + "%";}
                    
                if(document.getElementById("three").checked){
                    td.textContent = data[tb].tesuam36 + "%";
                    
                }
                if(document.getElementById("five").checked){
                    td.textContent = data[tb].tesuam60 + "%"; 
                }              
                trm.appendChild(td);
                table.appendChild(trm);
                 table.style.display = 'block';     
                if (document.getElementById('rdbutton1').checked){
                  if (data[tb].mas!==maslul){
                      table.style.display = 'none';
                  }
                }
                
                }
                
    }
       
       

    

    })
    .catch(error => {
        console.error('Error:', error);
    });
}
}
