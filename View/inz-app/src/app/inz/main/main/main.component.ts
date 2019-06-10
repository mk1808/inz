import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    
    
  ]
})
export class MainComponent implements OnInit {
   
  imageSources:string[]=['https://images.wallpaperscraft.com/image/deer_art_vector_134088_1920x1080.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILlFWv8ZRrnzUt8Yf2SudOrD5jFE6oxLAh2vYGtshxJuFHGt0',
'data:image/jpeg;base64,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'];

 
  constructor() { }

  ngOnInit() {
  }
  flipDiv = false;
  onClick() {
    this.flipDiv = !this.flipDiv;
  }
  

  
}