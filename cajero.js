
    function navegar() {
        const nameElement = document.getElementById("name").value; 
        const passwElement = document.getElementById("password").value;
    if(nameElement==="Bartolo" && passwElement==="123456789"){
            window.location.href = '././info.html';
        }
       else{ alert("datos incorrectos")}
    }


    const withElement = document.getElementById("with");
    const closeElement = document.getElementById("close");
    const actionsElement = document.getElementById("actions");
    const depositElement = document.getElementById("deposit");


  /*   closeElement.addEventListener('click', function(){
    window.location.href = '././cajero.html';
}); */
    function volver() {
            window.location.href = '././cajero.html';
        }
    