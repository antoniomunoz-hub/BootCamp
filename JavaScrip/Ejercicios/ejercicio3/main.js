//1 Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000.

let employees = [];

for (let i = 1; i <= 100; i++){
    const newEmployee = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        sueldo: Math.ceil(Math.random() * (4000 - 1250) + 1250)
    };
    employees.push(newEmployee);
}

console.log(employees);

//1 Pero con constructor

// function Employee(cargo, rendimiento, salario) {
//     this.cargo = cargo;
//     this.rendimiento = rendimiento;
//     this.salario = salario;
// }

// employees = [];
// for (let i = 1; i <= 100; i++) {
//     employees.push(new.Employe(
//         `Empleado ${i}`,
//         Number(Math.random().toFixed(2)),
//         Math.ceil(Math.random() * (4000 - 1250) + 1250),

//     ));
// }


//2 Ordenar array por rendimiento e imprimirlo. Usar una funcion anonima como callback

employees.sort(function (empleado1, empleado2) {
    return empleado1.rendimiento - empleado2.rendimiento
});

console.log(employees);

//3 Ordena el array por salaraio e imprimirlo funcion flecha

employees.sort((empleado1, empleado2) => empleado1.sueldo - empleado2.sueldo);

console.log("Ordenar por salario ", employees);

//4 Ordena el array por el numero de empleado de forma decreciente,
// el numero de empleado solo estara dentro del string cargo usa funcion nombrada

employees.sort(ordenarDecreciente)

function ordenarDecreciente (empleado1,empleado2) {
    return (empleado2.cargo.slice(9) - empleado1.cargo.slice(9))
}

console.log("Apartado 4 Ordenado por numero cargo", employees);

//5 Usando filter imprimir cargo y salario de los que cobren mas 2500

console.log();

employees
    .filter(empleado => empleado.salario > 2500)
    .forEach(empleado => console.log(empleado.cargo, empleado.salario));

//6 usando map subir el 25% a los que cobren menos 1500 y filtrar de nuevo

employees = employees.map(employee => {
  if (employee.sueldo < 1500){
      employee.sueldo = employee.sueldo * 1.25
}
    return employee;

});

console.log(employees);

//7 Usando reduce obtener coste total de los sueldos 
//a la empresa le cuesta un 15% del sueldo por impuestos

const totalCost = employees.reduce((salarySum, employee )=>salarySum += employee.sueldo * 1.15, 0);

console.log(totalCost);

//8 utiliza el metodo o metodos que determinemos para imprimir cada apartado
// Despedir a los que tengan un rendimiento menor a 0.3.
// Calcular el sueldo medio de la empresa.
// Subir el sueldo de los que tengan un rendimiento superior a 0.7

employees = employees.filter(employee => employee.rendimiento >= 0.3);

console.log("Despedir a losque tengan menos de un 0.3 de rendimiento", employees);

const salarioMedio = employees.reduce((salarySum, employee )=>salarySum += employee.sueldo, 0) / employees.length;

console.log(salarioMedio.toFixed(2));

employees = employees.map(employee => {
    if (employee.rendimiento > 0.7){
        employee.sueldo = employee.sueldo * 1.15
  }
      return employee;
  
  });

//   employees.forEach(employee =>{
//       if (employee.rendimiento > 0.7) {
//           employee.salario * 1.15;
//       } 
//   })

  console.log("Subir el sueldo de los que tengan un rendimiento superior a 0.7", employees);