import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  actorForm!: FormGroup;

 constructor(
   private formBuilder: FormBuilder,
   private toastr: ToastrService,
  private actorService: ActorService,
  private router: Router
 ) { }


 createActor(actor: Actor){
  actor.birthDate = new Date(actor.birthDate).toISOString();
  console.log(actor)
  this.actorService.createActor(actor).subscribe(actorNew=>{
    console.info("Se ha creado el actor ", actorNew)
    this.toastr.success("Confirmation", "El actor ha sido creado")
    this.actorForm.reset();
    this.router.navigate([`/actors/${actorNew.id}`])
  })
}


cancelCreation(){
  this.actorForm.reset();
}


 ngOnInit() {
  this.actorForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    photo: ['', [Validators.required,Validators.minLength(10)]],
    nationality: ['', [Validators.required,Validators.minLength(3)]],
    birthDate: [new Date().toISOString(), Validators.required],
    biography: ['', [Validators.required, Validators.minLength(50),Validators.maxLength(150)]]
  })
}

}
