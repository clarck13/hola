document.getElementById("loginBtn").addEventListener("click", function () {
    const documento = document.getElementById("documento").value;
    const password = document.getElementById("password").value;
    const pin = document.getElementById("pin").value;
    const errorMsg = document.getElementById("errorMsg");

    if (documento === "" || password === "" || pin === "") {
        errorMsg.textContent = "Todos los campos son obligatorios";
        return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
        errorMsg.textContent = "El PIN debe ser un número de 4 dígitos";
        return;
    }

    // Enviar datos al servidor
    fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `documento=${documento}&password=${password}&pin=${pin}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            window.location.href = "dashboard.html"; // Redirigir si es correcto
        } else {
            errorMsg.textContent = "Credenciales incorrectas";
        }
    })
    .catch(error => console.error("Error en la petición:", error));
});
