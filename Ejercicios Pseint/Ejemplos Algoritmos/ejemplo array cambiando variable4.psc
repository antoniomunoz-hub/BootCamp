Algoritmo Ejemplo_array_cambiando_valores
	
	definir my_array, indice, tama�o Como Entero;
	
	tama�o = 5;
	Dimension my_array[tama�o];
	
	my_array[0] = 50;
	my_array[1] = 35;
	my_array[2] = 19;
	my_array[3] = 78; 
	my_array[4] = 9;
	
	
	para  indice = 0 hasta tama�o -1 con paso 1 Hacer
		my_array[indice]=indice;
		Escribir my_array[indice], " " , Sin Saltar;
	FinPara
	
	escribir "";
	
FinAlgoritmo

