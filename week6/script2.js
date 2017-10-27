let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let country = document.querySelector("#countries");
let city = document.querySelector("#cities");

for (var index = 0; index < countries.length; index++) {
    var b = document.createElement("option");
    b.append(countries[index]);
    country.append(b);    
}

if(country.value == "Kazakhstan"){
    for (var index = 0; index < countries.length; index++) {
        var c =  document.createElement("option");
        c.append(cities_by_country.Kazakhstan[index]);      
        city.appendChild(c);
    }
    console.log(c);
}
let addKZ = true;
let addRus = true;
let addEng = true;
let addFRa = true;

function fun(){
    if (addKZ == false || addRus == false || addEng == false || addFRa == false) {
        for (var index = city.length; index >0 ; index--) {
            city[index] = null;
            addKZ = true;
            addRus = true;
            addEng = true;
            addFRa = true;            
        }
    }
    if(country.value === "Kazakhstan" && addKZ === true){
        for (var index = 0; index < cities_by_country.Kazakhstan.length; index++) {
            var c =  document.createElement("option");
                c.append(cities_by_country.Kazakhstan[index]);  
                city.append(c);
               // console.log(city);
               addKZ = false;              
            }
        }
    if(country.value === "Russia" && addRus === true){
        for (var index = 0; index < cities_by_country.Russia.length; index++) {
            var r = document.createElement("option");
            r.append(cities_by_country.Russia[index]);
            city.append(r);
            addRus = false;
        }
    }
    if(country.value === "England" && addEng === true ){
        for (var index = 0; index < cities_by_country.England.length; index++) {
            var e = document.createElement("option");
            e.append(cities_by_country.England[index]);
            city.append(e);
            addEng = false;
        }
    }
    if(country.value === "France" && addFRa === true){
        for (var index = 0; index < cities_by_country.France.length; index++) {
            var f = document.createElement("option");
            f.append(cities_by_country.France[index]);
            city.append(f);
            addFRa = false;
        }
    }
    
}
document.querySelector('#countries').addEventListener('click',fun);



