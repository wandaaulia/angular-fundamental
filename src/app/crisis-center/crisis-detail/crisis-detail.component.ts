import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName : string;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private dialogService : DialogService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {crisis: Crisis}) => {
      this.editName = data.crisis.name
      this.crisis = data.crisis;
      console.log(data)
    })
  }

  save() {
    this.crisis.name = this.editName;
    
    this.router.navigate(['/crisis-center'])
  }

   cancel() {
      this.router.navigate(['/crisis-center'])
   }

   canDeactivate(): Observable<boolean> | boolean {
      if(!this.crisis || this.crisis.name === this.editName) {
        return true;
      }

      return this.dialogService.confirm('discharge changes?')
   }
}
