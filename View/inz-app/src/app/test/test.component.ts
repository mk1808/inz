import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
     ol: any;
     map:any;

    keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];
 
  
  
 
  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
    
    
    
   
    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    next = [
        'Get up2',
        'Brush teeth2',
        'Take a shower2',
        'Check e-mail2',
        'Walk dog2'
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    dropn(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }



    timePeriods = [
        'Bronze age',
        'Iron age',
        'Middle ages',
        'Early modern period',
        'Long nineteenth century'
    ];

    drop2(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);


        {
            if (event.previousContainer === event.container) {
                moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            } else {
                transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
            }
        }
    }
    constructor() { }

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([21, 52]),
              zoom: 8
            })
          });   

          this.map.on('click', function (args) {
            console.log(args.coordinate);
            var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
            console.log(lonlat);
            
            var lon = lonlat[0];
            var lat = lonlat[1];
            alert(`lat: ${lat} long: ${lon}`);
          });
          
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: 'https://picsum.photos/50',
                medium: 'https://picsum.photos/100/200',
                big: 'https://picsum.photos/200/300'
            },
            {
                small: 'https://picsum.photos/50',
                medium: 'https://picsum.photos/100/200',
                big: 'https://picsum.photos/200/300'
            },
            {
                small: 'https://picsum.photos/50',
                medium: 'https://picsum.photos/100/200',
                big: 'https://picsum.photos/200/300'
            },
            {
                small: 'https://picsum.photos/50',
                medium: 'https://picsum.photos/100/200',
                big: 'https://picsum.photos/200/300'
            }

        ];
    }

   
}
