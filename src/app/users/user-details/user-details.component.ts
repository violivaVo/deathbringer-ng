import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { UserContract } from 'src/app/models/user-contract';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    //con sta roba abbiam la possibilità di legge le cose  che parton all'inizio


    public userName: string = null;
    public email: string = null;
    public name: string = null;
    public surname: string = null;


  constructor(
      private activatedRoute: ActivatedRoute,
      private usersService: UsersService) {
          //recupero il valore
          activatedRoute.params
          .forEach(p => this.userName = p.id ); // nota bene il singolo uguale, questa è un'assegnazione

       }



  ngOnInit() {
    this.getUser();
  }

  public getUser() {
      this.usersService.getUserByUsername(this.userName).subscribe(

        (data: UserContract) => {
            this.email = data.email;
            this.name = data.name;
            this.surname = data.surname;
        },

        (error: any) => {

        }
      )
  }
}
