function jugar() { 
    // Para tener un numero aleatorio
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Para tener un numero ya definido
    // const numeroSecreto = 15;

    // Almacenamos los numeros intentados en un array
    const intentos = [];
    let adivinado = false;
    
    while (!adivinado) {   
        let inputUsuario = prompt("Adivina el numero secreto entre 1 y 100: (0 para salir del programa)");
        // El 0 para parar el programa
        if (inputUsuario === "0") {
            alert("Gracias por jugar!");
            break;
        }
        if (isNaN(inputUsuario) || inputUsuario === null || inputUsuario.trim() === "" || inputUsuario < 1 || inputUsuario > 100) {
            alert("Error: ingresa un número válido.");
            continue;
        }

        inputUsuario = Number(inputUsuario); // Convertimos el numero a un number
        intentos.push(inputUsuario);

        // Comprobar si el usuario adivinó el número secreto
        if (inputUsuario === numeroSecreto) {
            document.getElementById("resultado").innerHTML = `
                <p class="adivinado">Felicidades, adivinaste el número secreto: ${numeroSecreto}</p>
                <p class="probados">Numeros probados hasta adivinar el numero secreto: ${intentos.join(", ")}</p>
                <p class="intentados">Numeros de intentos: ${intentos.length}</p>
            `;
            adivinado = true;
        } else {
            // Si no adivinado el número secreto, muestra un mensaje de error
            alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    }
}
