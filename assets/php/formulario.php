<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreApellido = $_POST["nombreApellido"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    $destinatario = "priscilla4224@yahoo.com";
    $asunto = "Mensaje de Contacto desde el Sitio Web";

    $contenido = "Nombre y Apellido: $nombreApellido\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo Electrónico: $correo\n";
    $contenido .= "Mensaje:\n$mensaje";

    $headers = "From: $correo";
    
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["success" => false]);
}
?>
