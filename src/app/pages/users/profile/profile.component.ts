import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile = 'Perfil de Usuario';
 name = 'Maria';
 lastName = 'Perez';
 email = 'mperez02@gmail.com';
 telephone = '305-458455';
  constructor() { }

  ngOnInit(): void {
  }

}
