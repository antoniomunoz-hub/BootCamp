<?php 
$link = 'mysql:host=localhost;dbname=tareas';
$usuario = 'root';
$pass = 'root';

try{
    $pdo = new PDO($link, $usuario, $pass);
    echo 'Conectado';
}catch(PDOException $e){
    print "Error!" .$e->getMessage() . "<br/>";
    die();
};

?>