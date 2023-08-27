import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['math_binomial.jpg', 'fau.jpg', 'laptop_colors_1.jpg', 'laptop_colors_2.jpg', 'laptop_math.jpg'];
  headlines = ['Graduate mathematician', 'Doctorate at FAU Erlangen-Nürnberg', 'Immersed in the world of web development', 'Bring engineering to the next level', 'Use mathematical skills to make the difference'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
