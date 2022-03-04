import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultant',
  templateUrl: './resultant.component.html',
  styleUrls: ['./resultant.component.css'],
})
export class ResultantComponent implements OnInit {
  data: any;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.['data'];
    console.log(this.router.getCurrentNavigation())
    console.log("data", this.data)
  }

  ngOnInit(): void {
    
  }
}
