async function fetchData(){
    try {
        
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const data = await response.json();
        console.log(data);
        //Actualizar el estado de los datos


    }catch(error) {
        console.log("Hubo el siguiente error",error);
    }
}

fetchData();