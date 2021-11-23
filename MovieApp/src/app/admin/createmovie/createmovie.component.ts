import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent implements OnInit {

  constructor(private service: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.router.navigateByUrl('/Admin');
    
  }

  insertRecord(form: NgForm) {
    this.service.postMovie(form.value).subscribe(res => {
      console.log(res);
    });
  }
}
