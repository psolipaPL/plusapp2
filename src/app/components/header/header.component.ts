import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }

  ngOnInit() {
    // Gets the viewport dimensions
    function getBrowserViewportDimensions() {
      return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
      };
    }

    // Gets the viewport dependent css classes. Checks if it is phone, tablet or desktop according to the viewport width
    function getViewportDependentCssClasses() {
      let orientationCssClass, deviceTypeCssClass, browserViewportDimensions = getBrowserViewportDimensions();

      if (browserViewportDimensions.width < 768)
        deviceTypeCssClass = 'phone';
      else if (browserViewportDimensions.width <= 1024)
        deviceTypeCssClass = 'tablet';
      else {
        deviceTypeCssClass = 'desktop';
      }

      orientationCssClass = browserViewportDimensions.width > browserViewportDimensions.height ? 'landscape' : 'portrait';
      return [deviceTypeCssClass, orientationCssClass];
    }

    // Adds viewport dependent css classes to the body
    function refreshDocumentBodyCssClasses() {
      const body = document.body;
      body.classList.remove('phone', 'tablet', 'desktop', 'landscape', 'portrait');

      getViewportDependentCssClasses().forEach(function (cssClass) {
        body.classList.add(cssClass);
      });
    }

    // Add event listener for the resize event to update classes on screen size change
    window.addEventListener('resize', refreshDocumentBodyCssClasses);

    // Initial call to set classes when the page loads
    refreshDocumentBodyCssClasses();
  }


}
