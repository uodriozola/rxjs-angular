import { Component, ViewChild } from '@angular/core';
import { PostsService } from './services/posts.service';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('search', {static: true}) searchBox:SearchboxComponent;
  public posts$;
  constructor(private postsService:PostsService){}

  ngOnInit(){
    this.posts$ = this.searchBox.value
    .pipe( switchMap(val => this.postsService.search(val)));
  }

}
