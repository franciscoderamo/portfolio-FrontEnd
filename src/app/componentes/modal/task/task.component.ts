import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-modal-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.cargarTask();
  }

  cargarTask():void{
    this.taskService.all().subscribe(data => {
      this.task = data;
    })
  }

  deleteTask(id?: number){
    if(id != undefined){
      this.taskService.delete(id).subscribe(data => {
        this.cargarTask();
      }, error => {
        alert ("No se pudo borrar la tarea.");
      })
    }
  }

}
