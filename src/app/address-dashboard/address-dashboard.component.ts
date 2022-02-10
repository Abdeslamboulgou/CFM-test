import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TransferidService } from '../api/transferid.service';
import { ButtoneditrendererComponent } from '../buttoneditrenderer/buttoneditrenderer/buttoneditrenderer.component';
import { ButtonviewrendererComponent } from '../buttonviewrenderer/buttonviewrenderer/buttonviewrenderer.component';
import { ButtonrendererComponent } from '../buttonrenderer/buttonrenderer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-dashboard',
  templateUrl: './address-dashboard.component.html',
  styleUrls: ['./address-dashboard.component.scss']
})
export class AddressDashboardComponent implements OnInit {
  contactData!: any;
  gridApi: any;
  gridColumnApi: any;
  event: this;
  id= this.transferid.id;

  constructor(private api: ApiService, private http: HttpClient,  private transferid: TransferidService, private router: Router) {
   }
   
  ngOnInit(): void {
    this.api = new ApiService(this.http);
    this.getContactDetails();
  }

  columnDefs=[
    {headerName: "Type d'adresse", field:'id', width: 90 , filter: true},
    {headerName: 'Numéro', field:'numero', width: 75, filter: true},
    {headerName: 'Type de voie', field:'type', width: 120, sortable: true , filter: true},
    {headerName: 'Rue', field:'rue', width: 120, sortable: true, filter: true},
    {headerName: 'Code Postal', field:'code', width: 120, sortable: true, filter: true},
    {headerName: 'Ville', field:'ville', width: 120, sortable: true, filter: true},
    {headerName: 'Pays', field:'pays', width: 120, sortable: true, filter: true},
    {headerName: 'Téléphone', field:'telephone', width: 120, filter: true},
    {headerName: 'Commentaires', field:'commentaire', width: 300, filter: true},
  ]

  getContactDetails(){
    this.api.getContact()
    .subscribe(res=>{
      this.contactData = res;
    })
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.contactData[this.id-1].address);
  }
}
