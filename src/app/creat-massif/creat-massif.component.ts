import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {MassifService} from "../services/massif.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creat-massif',
  templateUrl: './creat-massif.component.html',
  styleUrls: ['./creat-massif.component.css']
})
export class CreatMassifComponent implements OnInit {
  form=Array<{id:number,nom:string,region:string}>();
  massifs:any;
  constructor(private service:MassifService,private route:Router) { }

  ngOnInit(): void {
    this.getMassif();
  }
  getMassif(){
    this.service.getMassif().subscribe(data => {
      this.massifs=data;
    });
  }
  ajouter(form:NgForm){
    this.form.splice(0,this.form?.length);
    this.form.push({id: this.massifs?.length + 1, nom: form.value['nom'], region: form.value['region']});
    this.service.create(this.form).subscribe(data=>{
     this.route.navigate(['/']);
    });
  }

}
