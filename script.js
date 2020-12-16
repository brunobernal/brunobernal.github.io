

let buttonExperience = document.getElementById('buttonExperience');
let buttonAcademic = document.getElementById('buttonAcademic');
let buttonEspec = document.getElementById('buttonSpecializations');
var experienceItems = document.getElementsByClassName('experienceItem');
var academicItems = document.getElementsByClassName('academicItem');
var especItems = document.getElementsByClassName('especializationItem');

buttonExperience.style.border = '1px solid black';



buttonExperience.onclick = function (){

    buttonExperience.style.border = '1px solid black';
    buttonAcademic.style.border = 'none';
    buttonEspec.style.border = 'none';  
    
    for(var i=0; i< experienceItems.length; i++){
        experienceItems[i].style.zIndex = '1';  
}

    for(var i=0; i< academicItems.length; i++){
        academicItems[i].style.zIndex = '-1';  
}

for(var i=0; i< especItems.length; i++){
    especItems[i].style.zIndex = '-1';  
}



}


buttonAcademic.onclick = function (){

    buttonAcademic.style.border = '1px solid black';
    buttonExperience.style.border = 'none';
    buttonEspec.style.border = 'none';

    for(var i=0; i< experienceItems.length; i++){
        experienceItems[i].style.zIndex = '-1';  
}

    for(var i=0; i< academicItems.length; i++){
        academicItems[i].style.zIndex = '1';  
}

for(var i=0; i< especItems.length; i++){
    especItems[i].style.zIndex = '-1';  
}

     
}


buttonEspec.onclick = function (){

    buttonEspec.style.border = '1px solid black';
    buttonAcademic.style.border = 'none';
    buttonExperience.style.border = 'none';

    for(var i=0; i< experienceItems.length; i++){
        experienceItems[i].style.zIndex = '-1';  
}

    for(var i=0; i< academicItems.length; i++){
        academicItems[i].style.zIndex = '-1';  
}

for(var i=0; i< especItems.length; i++){
    especItems[i].style.zIndex = '1';  
}

     
}
