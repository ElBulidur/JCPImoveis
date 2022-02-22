import { Component, OnInit } from '@angular/core';
import { IProperty, IAddress } from './../../models/iproperty';
import { GetPropertyHandler } from './../../business-rules/get-property.handler';
import { UpdatePropertyHandler } from './../../business-rules/update-property.handler';
import { CreatePropertyHandler } from './../../business-rules/create-property.handler';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-form-page',
  templateUrl: './property-form-page.component.html',
  styleUrls: ['./property-form-page.component.css']
})

export class PropertyFormPageComponent implements OnInit {
  pageTitle = 'Nova Propriedade';
  email = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  form = this.formBuild.group({
    createdAt:'',
    type: '',
    value: '',
    area: 0,
    bedRooms: 0,
    bathRooms:0,
    vacancies:0,
    modality:'',
    furnished:false,
    condominium:'',
    address:{},
    announcementAt:'',
    idOwner:0
  });

  get createdAt(): FormControl {
    return this.form.get('createdAt') as FormControl;
  }
  get type(): FormControl {
    return this.form.get('type') as FormControl;
  }
  get value(): FormControl {
    return this.form.get('value') as FormControl;
  }
  get area(): FormControl {
    return this.form.get('area') as FormControl;
  }
  get bedRooms(): FormControl {
    return this.form.get('bedRooms') as FormControl;
  }
  get bathRooms(): FormControl {
    return this.form.get('bathRooms') as FormControl;
  }
  get vacancies(): FormControl {
    return this.form.get('vacancies') as FormControl;
  }
  get modality(): FormControl {
    return this.form.get('modality') as FormControl;
  }
  get furnished(): FormControl {
    return this.form.get('furnished') as FormControl;
  }
  get condominium(): FormControl {
    return this.form.get('condominium') as FormControl;
  }
  get address(): FormControl {
    return this.form.get('address') as FormControl;
  }
  get announcementAt(): FormControl {
    return this.form.get('announcementAt') as FormControl;
  }
  get idOwner(): FormControl {
    return this.form.get('idOwner') as FormControl;
  }

  propertyId: number | undefined = undefined;
  addressForm: IAddress | any;

  constructor(
    private formBuild: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private createPropertyHandler: CreatePropertyHandler,
    private updatePropertyHandler: UpdatePropertyHandler,
    private getPropertyHandler: GetPropertyHandler,
    private httpClient: HttpClient,
  ) {}

  async ngOnInit(): Promise<void> {
    const paramId:any = this.activatedRouter.snapshot.paramMap.get('id');
    if (paramId) {
      this.propertyId = paramId;
      await this.loadProperty();
    }
  }

  async loadProperty(): Promise<void> {
    const response = await this.getPropertyHandler.execute(this.propertyId || 0);
    if (response) {
      this.pageTitle = 'Editando Propriedade';
      // atualizando o formulário com os valores retornados pela api
      this.form.patchValue({
        createdAt: response.createdAt,
        type: response.type,
        value: response.value,
      });
    }
  }

  async onSubmit(): Promise<void> {
    const propertyToSave: IProperty = {
      ...this.form.value, // pegando todos os valores do formulário
      id: this.propertyId, // atualizando o id caso exista
      createdAt: Date(),
      idOwner:1
    };

    let response: IProperty | undefined;

    if (propertyToSave.id) {
      //response = await this.updatePropertyHandler.execute(propertyToSave);
      console.log('tem id:',propertyToSave)
    } else {
      console.log(propertyToSave)
      //response = await this.createPropertyHandler.execute(propertyToSave);
    }

    if (response) {
      this.propertyId = response.id;
    }
  }

  getAddress(id: number){
      const response =  this.httpClient
        .get<IAddress>(`${environment.apiAddress}/${id}/json`)
        .toPromise();

      if (response){
        this.addressForm = response
      }
  }
}
