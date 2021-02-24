Algoritmo ejemplo_para_anidado
	
	Definir contador_uno, contador_dos Como Entero;
	
	para contador_uno = 1 hasta 5 con paso 1 Hacer
		escribir  " iteraccion " contador_uno, " del bucle externo ";
		
		Para contador_dos = 1 hasta 2 con paso 1 Hacer
			escribir " contador_uno " , contador_uno , " contador_dos " , contador_dos;
		FinPara
		
		Escribir "";
	FinPara
	
	
FinAlgoritmo
