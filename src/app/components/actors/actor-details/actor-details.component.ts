import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {ActorDetails} from "../actorDetails";

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  @Input() actor?: ActorDetails;
  @Input() images?: any[];
  @Input() credits?: any[];
  public background = 'https://image.tmdb.org/t/p/original/';
  displayOverview: boolean = false;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const actorId = String(this.route.snapshot.paramMap.get('id'));
    this.getPerson(actorId);
    this.getPersonImages(actorId);
    this.getCredits(actorId);
  }

  displayDialogOverview() {
    this.displayOverview = true;
  }

  getPerson(id: string) {
    this.movieService.getPersonDetails(id)
      .subscribe(
        data => this.actor = data);
  }

  getPersonImages(id: string) {
    this.movieService.getPersonImages(id)
      .subscribe(
        data => this.images = data.profiles);
  }

  getCredits(id: string) {
    this.movieService.getPersonCredits(id)
      .subscribe(
        data => {
          this.credits = data['cast'].sort((a: any, b: any) => b['popularity'] - a['popularity'])
        })
  }

  truncateBio(bio: string): string{
    if (bio.length > 300) {
      bio = bio.substring(0, 300) + '...';
      return bio;
    } else {
      return bio;
    }
  }

  decodeGender(genderId: number): string{
    let gender = 'male'
    if(genderId === 1){
      gender = 'female';
    }
    return gender;
  }
}
