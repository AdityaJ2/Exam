import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'




let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
  serverUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  
  getTeams() {
    return this.http.get(`${this.serverUrl}/api/teams`)
  }

  
  addTeams(team: any) {
    return this.http.post(`${this.serverUrl}/api/teams`, team, {headers: headers})
  }

  
}
