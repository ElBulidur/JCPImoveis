import { ContactDialogComponent } from './../../../components/contact-dialog/contact-dialog.component';
import { GetPropertiesHandler } from '../../../properties/business-rules/get-properties.handler';
import { IProperty } from '../../../properties/models/iproperty';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-leadpage-home-page',
  templateUrl: './leadpage-home-page.component.html',
  styleUrls: ['./leadpage-home-page.component.css']
})

export class LeadpageHomePageComponent implements OnInit{


  @ViewChild(MatTable) table: MatTable<IProperty> | undefined;

  properties: IProperty[] = [];
  displayedColumns = ['id', 'createdAt', 'name', 'tipo', 'valor','quartos','banheiros','mobilado','area','venda','dataAnuncio', 'endereco','idOwner','condominio'];

  constructor(
    private getPropertiesHandler: GetPropertiesHandler, public dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getAllProperties();

  }

  async getAllProperties(): Promise<void> {
    const properties = await this.getPropertiesHandler.execute();
    if (properties) {
      this.properties = properties;
    } else {
      this.properties = [];
    }
  }
  openContact(idOwner:number): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '500px',
      data: idOwner
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


