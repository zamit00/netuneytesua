// הפונקציה fetchdata מחזירה Promise
function fetchdata(x,y) {
    console.log(x+":"+y)
    return fetch('kupotKlali.xml')
    .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
    .then(xmlString => {
        const parser = new DOMParser(); 
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
        const rows = xmlDoc.getElementsByTagName("Row");

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
            
            // אם יש תנאים נוספים שאתה רוצה להחיל על הנתונים
            if (divuach === "דווח" && !shemkupa.includes('ניהול אישי') && !shemkupa.includes('IRA') &&
                ochlosiyayaad !== "עובדי סקטור מסויים" && ochlosiyayaad !== `עובדי מפעל/גוף מסויים`
                && mozar !== 'מטרה אחרת' && mas !== 'מבטיח תשואה' && mozar===x && mas===y) {
            
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
                tesuam60: Number(tesuam60)
            });
        }
        }

        return coll;  // מחזירים את המידע
    })
    .catch(error => {
        console.error('Error:', error);
        return [];  // מחזירים מערך ריק במקרה של שגיאה
    });
}


function processData() {
    var maslul= document.getElementById("maslul-type").value;
    var moz=document.getElementById("product").value;
    const hishtalmot=["אג\"ח ממשלות","אג\"ח סחיר","אשראי ואג\"ח"
        ,"הלכה יהודית","כללי","כספי (שקלי)","מניות","מניות סחיר"
        ,"משולב מניות","משולב סחיר","עוקב מדד s&p 500","עוקב מדדי אג\"ח"
        ,"עוקב מדדי מניות","עוקב מדדים - גמיש"];
    
        for (let i=0; i<= hishtalmot.length-1;i++){
    fetchdata(moz,hishtalmot[i]).then(data => {
    data.sort((a, b) => b.tesuam - a.tesuam);
    
    const table = document.createElement('table');
    
    table.id = 'myTable';
    table.className = 'tbldata';
    document.getElementById('tbldo').appendChild(table);
    table.style.display = 'block';
   
            const headerRow = document.createElement('tr');
            th = document.createElement('th');
            th.textContent = 'מספר מה'  
            headerRow.appendChild(th);
            th = document.createElement('th');
            th.textContent = 'שם המסלול: '+hishtalmot[i];
            headerRow.appendChild(th);
            th = document.createElement('th');
            th.textContent = 'תשואה';
            headerRow.appendChild(th);
            table.appendChild(headerRow);
            
            for (let tb=1; tb<=data.length+1;tb++){
                if (data[tb].tesuam){
                const trm = document.createElement('tr');
                td = document.createElement('td');
                td.textContent = data[tb].mh;
                trm.appendChild(td);
                td = document.createElement('td');
                td.textContent = data[tb].shemkupa;
                trm.appendChild(td);
                td = document.createElement('td');
                td.textContent = data[tb].tesuam;
                trm.appendChild(td);
                table.appendChild(trm);
                }
    }


    /*    console.log(data);  
    data.sort((a, b) => b.tesuam36 - a.tesuam36);
        console.log(data);  
    data.sort((a, b) => b.tesuam60 - a.tesuam60);
        console.log(data);*/      

    })
    .catch(error => {
        console.error('Error:', error);
    });
}
}









    
    
        
    
            
            
            
            
            
      