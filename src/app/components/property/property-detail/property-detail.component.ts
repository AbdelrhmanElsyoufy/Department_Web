import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/models/property';
import { Gallery, GalleryItem, GalleryRef, ImageItem } from 'ng-gallery';
import { faVideo , faUpDown } from '@fortawesome/free-solid-svg-icons';
// import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
// import {NgxGalleryImage} from '@kolkov/ngx-gallery';
// import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  videoIcon  = faVideo
  youtubeIcon = faUpDown
  images!: GalleryItem[]
  galleryId = 'mixedExample';
  property = new Property();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private housingService: HousingService,
                private gallery: Gallery) { }

    ngOnInit() {
      this.propertyId = +this.route.snapshot.params['id'];

      this.route.params.subscribe(
        (params) => {
          this.propertyId = +params['id'];
          this.housingService.getProperty(this.propertyId).subscribe(
            data => {
              this.property = data as Property;
            }
          );
        }
      );


      const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    //   galleryRef.load([
    //     new ImageItem({
    //       src: '../../assets/images/prop-1.png',
    //       thumb: '../../assets/images/prop-1.png'
    //     }),
    //     new ImageItem({
    //       src: '../../assets/images/prop-1.png',
    //       thumb: '../../assets/images/prop-1.png'
    //     }),
    //     new ImageItem({
    //       src: '../../assets/images/prop-1.png',
    //       thumb: '../../assets/images/prop-1.png'
    //     }),
    //   ])
      galleryRef.addImage({
        src: '../../assets/images/prop-1.png',
        thumb: '../../assets/images/prop-1.png',
        type:'image',

      });
      galleryRef.addImage({
        src: '../../assets/images/prop-2.png',
        thumb: '../../assets/images/prop-2.png',
      });
      galleryRef.addImage({
        src: '../assets/images/prop-3.png',
        thumb: '../assets/images/prop-3.png',
      });
      galleryRef.addImage({
        src: '../../assets/images/prop-4.png',
        thumb: '../../assets/images/prop-4.png',
      });
      galleryRef.addImage({
        src: '../../assets/images/prop-5.png',
        thumb: '../../assets/images/prop-5.png',
      });
      galleryRef.addYoutube({
        src: 'w8xbZREwHco'
      });
       galleryRef.addVideo({
      src: '../assets/ali.mp4', type: 'video/mp4',
      thumb: '../../assets/ali.mp4',
      poster: '../../assets/ali.mp4'
    });

    this.images =[
      new ImageItem({
        src: '../../assets/images/prop-1.png',
        thumb: '../../assets/images/prop-1.png'
      }),
      new ImageItem({
        src: '../../assets/images/prop-1.png',
        thumb: '../../assets/images/prop-1.png'
      }),
      new ImageItem({
        src: '../../assets/images/prop-1.png',
        thumb: '../../assets/images/prop-1.png'
      }),
    ]





    }
}
