import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Portfolio';
  currentUrl = window.location.href;
  async ngAfterViewInit(): Promise<void> {
    await this.loadScripts([
      'assets/js/jquery.min.js',
      'assets/js/jquery-migrate-3.0.1.min.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/jquery.easing.1.3.js',
      'assets/js/jquery.waypoints.min.js',
      'assets/js/jquery.stellar.min.js',
      'assets/js/owl.carousel.min.js',
      'assets/js/jquery.magnific-popup.min.js',
      'assets/js/jquery.animateNumber.min.js',
      'assets/js/scrollax.min.js',
      'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY',
      'assets/js/google-map.js',
      'assets/js/main.js'
    ]);

    console.log('All scripts loaded');
  }

  loadScripts(urls: string[]): Promise<void[]> {
    return Promise.all(
      urls.map((url) => {
        return new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = url;
          script.async = true;
          script.defer = true;
          script.onload = () => resolve();
          script.onerror = () => reject(`Failed to load ${url}`);
          document.body.appendChild(script);
        });
      })
    );
  }

  
}
