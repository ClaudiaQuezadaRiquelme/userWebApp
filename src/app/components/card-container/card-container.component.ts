import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  usersData = [];

  constructor(
    private service: RandomUserService
  ) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.usersData = data.results;
      console.log(this.usersData);
      this.usersData.forEach(element => {
        console.log(element);
      });
    });
  }

}
