import { Component, OnInit } from '@angular/core';
import {MassifService} from "../services/massif.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-massif',
  templateUrl: './massif.component.html',
  styleUrls: ['./massif.component.css']
})
export class MassifComponent implements OnInit {
  massifs:any;
  massifsData:any;
  massifSelectionnes=Array<{id:number,nom:string,region:string}>();
  nombreMassifSelectionnes:number=0;
  constructor(private massifService:MassifService){ }
  ngOnInit(): void {
    this.getMassif();
  }
  getMassif(){
    this.massifService.getMassif().subscribe(data => {
      this.massifs=data;
    });
  }
  getMassifRegion(f:NgForm){
    this.massifService.getMassifRegion(f.value).subscribe(data => {
      //this.massifs=data;
      this.massifsData=data;
      console.log(data);
    });
  }
  rechercheMassifRegion(form:NgForm){
    let i=0;
    if(this.massifs.length==0)
      this.massifs=this.massifsData;
    this.massifSelectionnes?.splice(0,this.massifSelectionnes?.length);
    this.nombreMassifSelectionnes=0;
    for(i=0;i<this.massifs?.length;i++){
      if(this.massifs[i]?.region==form.value['region']){
        this.nombreMassifSelectionnes++;
        this.massifSelectionnes?.push(this.massifs[i]);
      }
    }
  }

}
