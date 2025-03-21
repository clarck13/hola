<?php
// Ruta del archivo JSON donde se guardarán los datos
$jsonFile = "usuarios.json";

// Verificar si la solicitud es POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $documento = $_POST["documento"];
    $password = $_POST["password"];
    $pin = $_POST["pin"];

    // Crear un nuevo usuario
    $nuevoUsuario = [
        "documento" => $documento,
        "password" => $password,
        "pin" => $pin,
        "fecha_registro" => date("Y-m-d H:i:s") // Guardar fecha y hora de registro
    ];

    // Leer los datos actuales del archivo JSON
    if (file_exists($jsonFile)) {
        $usuarios = json_decode(file_get_contents($jsonFile), true);
    } else {
        $usuarios = [];
    }

    // Agregar el nuevo usuario al array de usuarios
    $usuarios[] = $nuevoUsuario;

    // Guardar los datos en el archivo JSON
    file_put_contents($jsonFile, json_encode($usuarios, JSON_PRETTY_PRINT));

    // Redirigir a la página de bienvenida
    header("Location: bienvenido.html");
    exit();
}
?>
