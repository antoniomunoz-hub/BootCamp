const diaHoy = new Date();

moment.locale('es'); // en español

// mes dias años hora:minutos:segundos am/pm 
console.log(moment().format('MMMM do YYYY h:mm:ss a'));

// por ejemplo cuando algo expire en x dias usamos esto para 
//que añada los dias necesarios para mostrar en calendario
console.log(momen().add3(3, 'days').calendar());
