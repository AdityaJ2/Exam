import { Component, OnInit } from '@angular/core';


import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  
  constructor(private service: TeamService) { }

  teams: any
  country: string | undefined
  captain: string | undefined
  primaryColour: string | undefined
  currentRanking: number | undefined
  

  getTeams(): void {
    this.service.getTeams().subscribe(response => {
      this.teams = response
    })
   
  }
  clearForm(): void {
    this.country = undefined
    this.captain = undefined
    this.primaryColour = undefined
    this.currentRanking = undefined
  }
  
  addTeams(): void {
    let team = {
      country: this.country,
      captain: this.captain,
      primaryColour: this.primaryColour,
      currentRanking: this.currentRanking
    }

    this.service.addTeams(team).subscribe(response => {
      
      this.getTeams()
      this.clearForm() // wipe out form input values
      alert('Deletion Successful')
    })
  }

  
  selectTeams(country: string, captain: string, primaryColour: string, currentRanking: number): void {
    this.country = country
    this.captain = captain
    this.primaryColour = primaryColour
    this.currentRanking = currentRanking
   
  }



  ngOnInit() {
    this.getTeams()
  }
}
