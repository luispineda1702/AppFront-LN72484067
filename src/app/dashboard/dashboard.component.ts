import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute, 
  ){
  }
  irOpcionPost(){
    this.router.navigate(["post"], {relativeTo: this.route})
  }

  irOpcionUser(){
    this.router.navigate(["user"], {relativeTo: this.route})
  }

}
