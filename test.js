fetch('kupotKlali.xml')
  .then(response => response.text()) // מקבל את תוכן הקובץ כטקסט
  .then(xmlString => {
    const parser = new DOMParser(); // יוצר parser לניתוח XML
    const xmlDoc = parser.parseFromString(xmlString, "application/xml"); // מנתח את הטקסט למבנה XML
    
    const maslul1 = document.getElementById("maslul-type1");
    const maslul2 = document.getElementById("maslul-type2");

    const rows = xmlDoc.getElementsByTagName("Row");
    let optionCollection = [];

    // עבר על כל שורה ב־XML
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      const yitratnehasim = row.getElementsByTagName("YITRAT_NCHASIM_LSOF_TKUFA")[0]?.textContent || '';
      const divuach = row.getElementsByTagName("MATZAV_DIVUACH")[0]?.textContent || '';
      const ochlosiyayaad = row.getElementsByTagName("UCHLUSIYAT_YAAD")[0]?.textContent || '';
      const mozar = row.getElementsByTagName("SUG_KUPA")[0]?.textContent || '';
      const shemkupa = row.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
      const mhkupa = row.getElementsByTagName("ID")[0]?.textContent || '';
      const mas = row.getElementsByTagName("HITMAHUT_MISHNIT")[0]?.textContent || '';
      const tesuam = row.getElementsByTagName("TSUA_MITZTABERET_LETKUFA")[0]?.textContent || '';
      const tesuam36 = row.getElementsByTagName("TSUA_MITZTABERET_36_HODASHIM")[0]?.textContent || '';
      const tesuam60 = row.getElementsByTagName("TSUA_MITZTABERET_60_HODASHIM")[0]?.textContent || '';

      // התנאים לבדוק אם הערכים עומדים בדרישות
      if (
        Number(yitratnehasim) > 0 &&
        divuach === "דווח" &&
        !divuach.includes('מבטיחת תשואה') &&
        ochlosiyayaad !== "עובדי סקטור מסויים" &&
        ochlosiyayaad !== "עובדי מפעל/גוף מסויים" &&
        moz.value &&
        mozar !== 'מטרה אחרת' &&
        !shemkupa.includes('ניהול אישי') &&
        !shemkupa.includes('IRA') 
      ) {
     
        optionCollection.push(row);
      }
    }
    
    for (let i = 0; i < optionCollection.length; i++) {
        const opt = optionCollection[i];
        const shemkupa = opt.getElementsByTagName("SHM_KUPA")[0]?.textContent || '';
        const mhkupa = opt.getElementsByTagName("ID")[0]?.textContent ||  '';
      console.log(mhkupa+":"+shemkupa)
      
    }


   fetch('nechasim.xml')
            .then(response => response.text()) // מקבל את תוכן הקובץ השני
            .then(xmlString => {
                const parser2 = new DOMParser();
                const xmlDoc2 = parser2.parseFromString(xmlString, "application/xml");

                const rows2 = xmlDoc2.getElementsByTagName("Row");
                let optionCollection2 = [];
              
                for (let i = 0; i < rows2.length; i++) {
                    const row2 = rows2[i];

                    
                    const idKupaInSecondFile = row2.getElementsByTagName("ID_KUPA")[0]?.textContent || '';

                   
                    if (optionCollection.includes(`<ID>${idKupaInSecondFile}</ID>`)) {
                           optionCollection2.push(row);      
                        console.log(idKupaInSecondFile);
                    }
                }
            })
            .catch(error => {
                console.error('Error loading nechasim.xml:', error);
            });

    
  })
  .catch(error => {
    console.error('Error loading kupotKlali.xml:', error);
});










