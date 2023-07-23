import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string = '';
  idService: number;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Task(this.title, this.idService);
    this.taskService.new(skill).subscribe(data => {
        alert("Microservicio añadido");
        this.router.navigate(['/dashboard']);
      }, err => {
        alert("Falló");
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
