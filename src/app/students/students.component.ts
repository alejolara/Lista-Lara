import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title_alumnos = "Listado de Alumnos"

  no_se_presento = "No se Presento"
  no_presente = "No se Presento"
  no_apto_rendir_final = "No apto para rendir el final"

  usuarios = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "dni": "12345678",
      "carrera": "Ingeniería",
      "parcial_1": 8,
      "parcial_2": 7,
      "nota_final": 9
    },
    {
      "nombre": "María",
      "apellido": "González",
      "dni": "87654321",
      "carrera": "Arquitectura",
      "parcial_1": 6,
      "parcial_2": 2,
      "nota_final": 0
    },
    {
      "nombre": "Carlos",
      "apellido": "López",
      "dni": "56789012",
      "carrera": "Medicina",
      "parcial_1": 9,
      "parcial_2": 8,
      "nota_final": 10
    },
    {
      "nombre": "Ana",
      "apellido": "Rodríguez",
      "dni": "65432109",
      "carrera": "Derecho",
      "parcial_1": 7,
      "parcial_2": 6,
      "nota_final": 8
    },
    {
      "nombre": "Pedro",
      "apellido": "Martínez",
      "dni": "43210987",
      "carrera": "Economía",
      "parcial_1": 5,
      "parcial_2": 5,
      "nota_final": 6
    },
    {
      "nombre": "Laura",
      "apellido": "López",
      "dni": "98765432",
      "carrera": "Ingeniería",
      "parcial_1": 9,
      "parcial_2": 7,
      "nota_final": 2
    },
    {
      "nombre": "Miguel",
      "apellido": "Gómez",
      "dni": "21098765",
      "carrera": "Medicina",
      "parcial_1": 8,
      "parcial_2": 9,
      "nota_final": 3
    },
    {
      "nombre": "Sofía",
      "apellido": "Fernández",
      "dni": "89012345",
      "carrera": "Derecho",
      "parcial_1": 7,
      "parcial_2": 6,
      "nota_final": 8
    },
    {
      "nombre": "Diego",
      "apellido": "Torres",
      "dni": "32109876",
      "carrera": "Arquitectura",
      "parcial_1": 9,
      "parcial_2": 8,
      "nota_final": 1
    },
    {
      "nombre": "Carolina",
      "apellido": "Silva",
      "dni": "45678901",
      "carrera": "Economía",
      "parcial_1": 6,
      "parcial_2": 7,
      "nota_final": 8
    }
  ]
}
