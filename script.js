if(localStorage.length==0){
    localStorage.setItem("visits","0");
}
else{
    localStorage.setItem("visits",(parseInt(localStorage.getItem("visits"))+1).toString());
    document.getElementById("visits").innerText=`This Website has ${localStorage.getItem("visits")} Visits.`;
}