import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchApiService } from '@core/services/fetch-api.service';
import { Episode } from '@shared/interfaces/episodes/episode.interface';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes$: Observable<Episode[]>;

  constructor(private fetchApiService: FetchApiService) {}

  ngOnInit(): void {
    this.episodes$ = this.fetchApiService.getEpisodes().pipe(
      map(episodes => episodes.results)
    );
  }

}
