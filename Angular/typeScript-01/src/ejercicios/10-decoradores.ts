function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProprety = "new property";
        hello = "override";
    };
  }

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Antonio');
        
    }
}

console.log(MiSuperClase);