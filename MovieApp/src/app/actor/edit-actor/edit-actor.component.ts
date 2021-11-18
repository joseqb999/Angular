import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { NgForm } from '@angular/forms';
import { ActorService } from "../actor.service"
import { Actor } from '../actor.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  actorDetail: any = [];
  constructor(private service: ActorService) { }

  ngOnInit(): void {
    this.getActorDetails();
  }

  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  getActorDetails() {
    this.service.getActor().subscribe((response) => {
      this.actorDetail = []
      this.actorDetail.push(response)
    });
    console.log(this.actorDetail);
  }

  updateRecord(form: NgForm) {
    this.service.putActor(form.value).subscribe(res => {
    this.resetForm(form);
    this.getActorDetails();
    //this.service.refreshList();
    });

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Name: "",
      Biography: ""
    }
  }
}
