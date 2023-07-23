import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.taskService.see(id).subscribe(data =>{
      this.task = data;
    }, error => {
      alert("Error al modificar los datos del microservicio.");
    })
  }

  onUpdate(){
    // capture the Portfolio ID that we want to modify
    const id = this.activatedRoute.snapshot.params['id'];
    this.taskService.edit(id, this.task).subscribe( data => {
        this.router.navigate(['/dashboard']);
      }, error => {
        alert("Error al modificar los datos del microservicio.");
      }
    )
  }

}
