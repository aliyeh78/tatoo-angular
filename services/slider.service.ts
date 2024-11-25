import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {
    getData() {
        return [
            {
                itemImageSrc: '../../assets/firstImg.png',
                thumbnailImageSrc: '../../assets/firstImg.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../../assets/secondImg.jpg',
                thumbnailImageSrc: '../../assets/secondImg.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
          
           
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};