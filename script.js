let score, flag, cantidadAlumnos, counterAlumnos = 0;
const alumnosIngresados = []; 
const soloLetras = /^[ a-zA-Z ]+$/;

class Alumnos
{
    constructor(nombreApellido, edad, nota)
    {
        this.nombreApellido = nombreApellido;
        this.edad = edad;
        this.nota = nota;
    }
}
function validarIngreso() // => Verifica el ingreso de la palabra "Si" y la palabra "No"
{
    if(flag !="no" && flag !="si")
    {
        alert("Amigo, no pusiste ni si, ni no, escribi de nuevo")
        flag = prompt("iNGRESA SI O NO").toLowerCase()
        if(flag == "si" || flag =="no")
        {
            console.log("Bien amigo pudiste poner que "+flag)
        }else 
        {
            while(flag !== "si" && flag !=="no")
            {
                alert("Amigo, no pusiste ni si, ni no, escribi de nuevo, sos re tonto")
                flag = prompt("iNGRESA SI O NO uwu").toLowerCase()
            }
        }
    }   
}
function validarRangoNota() // => Verifica si la nota ingresada se encuentra dentro del rango válido (1 - 10)
{
    if(nota > 0 && nota <= 10)
            {
                if(nota >= 1 && nota <= 5)
                {
                    console.log("El alumno desaprobó con "+ nota)
                } else if(nota == 6 || nota == 7)
                    {
                        console.log("El alumno aprobó raspando con  "+ nota)
                    } else if(nota == 8 || nota == 9)
                        {
                            console.log("El alumno aprobo con "+ nota)
                        } else 
                            {
                                console.log("El alumno aprobó re zarpado con "+ nota)
                            }
            } else
                {
                    console.log("Amigo pone bien el numero")
                    nota = prompt("Ingrese una nota del 1 al 10")
                    if(nota < 1 || nota > 10)
                        {
                            while (nota < 1 || nota > 10)
                                {
                                    console.log("Amigo pone bien el numero")
                                    nota = prompt("Por favor, ingrese una nota válida (entre 1 y 10)")
                                }
                        }
                }
}
function validarNota() // => Verifica si la nota ingresada es un número
{
    validarRangoNota()
    if(isNaN(nota) == true)
    {
        alert("Man, no pusiste un número, intentá de nuevo")
        nota = parseInt(prompt("Ingrese numero entre 1 y 10"))
        if(isNaN(nota) == false)
        {
            console.log("Pusiste el numero " + nota)
            validarRangoNota();
        }else
            {
                while(isNaN(nota) == true)
                    {
                        alert("Seguis sin poner un número pa, no me hagas enojar")
                        nota = parseInt(prompt("Ingrese numero entre 1 y 10 por favor"))
                        validarRangoNota();
                    }
            }
    }
}
function validarNombre(nombre) // => Verifica si el nombre ingresado contiene números
{
    soloLetras.test(nombre);
    if(soloLetras.test(nombre) == false)
    {
        while(soloLetras.test(nombre) == false)
        {
            alert("Flaco sos tonto no me pongás números");
            nombre = prompt("Usted no ha ingresado un nombre válido. Por favor, ingreselo de nuevo.").toUpperCase();
        }
    }
}
function validarEdad() // =>Verifica que la edad ingresada esté dentro del rango válido (8 - 100)
{
    validarNumeroEdad()
    if(edad < 8 || edad > 100)
    {
        alert("Capo es un colegio secundario, cuantos años querés que tenga???")
        edad = prompt("Ingresar edad (Se consideran válidas desde los 8 hasta los 100 años")
        validarNumeroEdad()
        if(edad < 8 || edad > 100)
        {
            while(edad < 8 || edad > 100)
            {
                alert("No me quieras romper el sistema, no te va a salir")
        edad = prompt("Ingresar edad (Se consideran válidas desde los 8 hasta los 100 años")
        validarNumeroEdad()
            }
        }
    }
}
function validarNumeroEdad() // => Verifica que la edad ingresada sea un número
{
    if(isNaN(edad) == true)
    {
        alert("Man, no pusiste un número, intentá de nuevo")
        edad = parseInt(prompt("Ingrese una edad válida (Entre 8 y 100)"))
        if(isNaN(edad) == false)
        {
            console.log("Pa tu alumno tiene " + edad, "años")
        }else
            {
                while(isNaN(edad) == true)
                    {
                        alert("Seguis sin poner un número pa, no me hagas enojar")
                        edad = parseInt(prompt("Ingrese edad válida, por favor, entre 8 y 100."))
                    }
            }
    }
}
    flag = prompt("Desea agregar alumnos a la base de datos? Ingrese 'si' para continuar, 'no' para salir del programa.").toLowerCase()
    validarIngreso();
    if(flag == "si")
    {
        do
        {
            cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos que desea agregar a la base de datos"))
            console.log(cantidadAlumnos)
            if(cantidadAlumnos > 0)
            {
                for(let i = 0; i < cantidadAlumnos; i++)
                {
                    nombreApellido = prompt("Ingrese nombre y apellido del alumno").toUpperCase();
                    validarNombre(nombreApellido);
                    edad = parseInt(prompt("Ingrese edad del alumno"));
                    validarEdad()
                    nota = parseInt(prompt("Ingrese nota del alumno (del 1 al 10)"));
                    validarNota()
                    alumnosIngresados[counterAlumnos] = new Alumnos (nombreApellido, edad, nota);
                    console.log(alumnosIngresados);
                    counterAlumnos++
                }
            } else
                {
                    alert("La cantidad de alumnos ingresada no es valida")
                }
            flag = prompt("Desea ingresar mas alumnos? Escriba 'si' para volver al ingreso, 'no' para salir del programa").toLowerCase()
                    validarIngreso()
        }while(flag != "no");
        
    }

const alumnosAprobados = (alumnosIngresados.filter(alumnosIngresados => alumnosIngresados.nota > 5))

alumnosAprobados.forEach(Alumnos => {console.log(`${Alumnos.nombreApellido} ha aprobado con ${Alumnos.nota}!`)});
