import { Component, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { SliderService } from 'src/services/slider.service';

@Component({
  selector: 'app-limitless-first-slider',
  templateUrl: './limitless-first-slider.component.html',
  styleUrls: ['./limitless-first-slider.component.scss']
})
export class LimitlessFirstSliderComponent{
constructor(
  private photoService: SliderService
){

}
images: any[] | undefined;

showThumbnails: boolean | undefined;

fullscreen: boolean = false;

activeIndex: number = 0;

onFullScreenListener: any;

@ViewChild('galleria') galleria: Galleria | undefined;

responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    // this.bindDocumentListeners();
}

onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
}

toggleFullScreen() {
    // if (this.fullscreen) {
    //     this.closePreviewFullScreen();
    // } else {
    //     this.openPreviewFullScreen();
    // }

    // this.cd.detach();
}

openPreviewFullScreen() {
    let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
        /* Firefox */
        elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
        /* Chrome, Safari & Opera */
        elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
        /* IE/Edge */
        elem['msRequestFullscreen']();
    }
}

// onFullScreenChange() {
//     this.fullscreen = !this.fullscreen;
//     this.cd.detectChanges();
//     this.cd.reattach();
// }

// closePreviewFullScreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document['mozCancelFullScreen']) {
//         document['mozCancelFullScreen']();
//     } else if (document['webkitExitFullscreen']) {
//         document['webkitExitFullscreen']();
//     } else if (document['msExitFullscreen']) {
//         document['msExitFullscreen']();
//     }
// }

// bindDocumentListeners() {
//     this.onFullScreenListener = this.onFullScreenChange.bind(this);
//     document.addEventListener('fullscreenchange', this.onFullScreenListener);
//     document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
//     document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
//     document.addEventListener('msfullscreenchange', this.onFullScreenListener);
// }

unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
}

ngOnDestroy() {
    this.unbindDocumentListeners();
}

galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
}

fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
}
}
