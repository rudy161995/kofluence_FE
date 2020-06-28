import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './services/appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kofluence-eval-task';
  values: string[];
  items = [];
  relatedTags = [];
  dbUnconnected: boolean;
  dbError: string;
  user = "nivi";
  userPosts: Object;
  similarPosts: any;

  constructor(
    private appserviceService: AppserviceService
  ) {

  }


  ngOnInit(): void {
    this.getMandatoryAndRelatedTag();
    this.getUserPosts();
    this.getSimilarPosts();
  }

  onAdd($event) {
    this.newTag(this.items[this.items.length - 1])
  }

  onRemove($event) {
    if (this.items.findIndex(v => $event.group === v.group) < 0) {
      this.relatedTags = this.relatedTags.filter(rt => rt.group !== $event.group)
    }

  }

  getMandatoryAndRelatedTag() {
    this.appserviceService.getMandatoryAndRelatedTag().subscribe(tags => {
      this.items = [];
      if (tags['success']) {
        this.relatedTags = tags['relatedTags'];
        tags['mandatory'].forEach(element => {
          this.items.push({
            display: '#' + element.tag,
            value: element.tag,
            readonly: true,
            ...element
          })
        });
      }
    }, (err) => {
      this.dbUnconnected = true;
      this.dbError = "Failed to connect Backend!!"
    })
  }

  relatedTagClick(tags) {
    this.items.push({
      display: '#' + tags.tag,
      value: tags.tag,
      ...tags
    })
    this.relatedTags.splice(this.relatedTags.findIndex(v => v.tag === tags.tag), 1)
  }

  newTag(item) {
    item['new'] = true;
    item['display'] = '#' + item['display']
    this.appserviceService.getRelatedTag(item).subscribe((relTagsObj: any) => {
      if (relTagsObj['relatedTags']) {
        this.relatedTags = [...this.relatedTags, ...relTagsObj['relatedTags']]
        item['group'] = relTagsObj['newData']['group'];
      }
    });
  }

  getUserPosts() {
    this.appserviceService.getUserPosts(this.user).subscribe((userPosts) => {
      this.userPosts = userPosts['images'];
    })
  }

  getSimilarPosts() {
    this.appserviceService.getSimilarPosts().subscribe((posts) => {
      this.similarPosts = posts['images'];
      console.log(this.similarPosts);

    })
  }


}
