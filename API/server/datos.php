<?php 

if ($_GET['var'] == "tareas"){
    include_once 'conexion.php';

    $sql = 'SELECT * 
            FROM tareas';
}else{
    echo 'Solicitud Fallida';
};

?>