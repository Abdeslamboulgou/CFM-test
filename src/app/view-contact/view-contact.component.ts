import { Component, OnInit } from '@angular/core';
import { TransferidService } from '../api/transferid.service';
import data from 'db.json';

interface Post {
  id: number;
  name: string;
  surname: string;
  birthday: any;
  address: any;
}

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  id= this.transferid.id;
  myPost: any;
  posts : Post[] = data.posts;


  constructor(private transferid: TransferidService) { }

  displayPost(id){
    return this.posts.find(c => c.id === id);
  }

  ngOnInit(): void {
    this.myPost = this.displayPost(this.id)
  }

}
