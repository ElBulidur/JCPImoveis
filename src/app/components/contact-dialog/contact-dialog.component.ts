import { IOwner } from 'src/app/owners/models/iowner';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetOwnerHandler } from 'src/app/owners/business-rules/get-owner.handler';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})

export class ContactDialogComponent implements OnInit {


  owner: IOwner[] | any = [];

  constructor(private GetOwnerHandler: GetOwnerHandler, public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,) { }

    async ngOnInit(): Promise<void> {
      await this.getOneOwner(this.data);

    }

  async getOneOwner(id:number): Promise<void> {
    const dataOwner = await this.GetOwnerHandler.execute(id);
    if (dataOwner) {
      this.owner = dataOwner;
    } else {
      this.owner = [];
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
