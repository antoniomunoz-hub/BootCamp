let workers = [];

for ( i=0 ; i<= 100 ; i++){
    const newWorker = {
    cargo = `Empleado ${i}`,
    rendimiento: Number(Math.random().toFixed(2)),
    sueldo: Math.ceil(Math.random() * (4000 - 1250) + 1250)
};
    workers.push(newWorker);
}

console.log(workers);

workers.sort(function (empleado1, empleado2) {
    return empleado1.suedlo - empleado2.sueldo

});

workers.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);

console.log(workers);

workers.filter(empleado => empleado.salario > 2500)
