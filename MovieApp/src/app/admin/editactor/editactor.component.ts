import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editactor',
  templateUrl: './editactor.component.html',
  styleUrls: ['./editactor.component.css']
})
export class EditactorComponent implements OnInit {
  actor: any = [];
  constructor(public service: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.getActorByActorId();
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
    this.router.navigateByUrl('/Admin');
  }

  getActorByActorId() {
    this.service.getActorByActorId().subscribe((response) => {
      this.actor = []
      this.actor.push(response)
    });
    console.log(this.actor);
  }

  updateRecord(form: NgForm) {
    this.service.putActor(form.value).subscribe(res => {
    });
  }

}
