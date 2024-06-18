import { Component } from '@angular/core';
import { faTachometerAlt, faUserCircle ,faKey , faSignOut } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
  
})
export class NavBarComponent {
  faTachometerAltIcon = faTachometerAlt;
  faUserCircleIcon = faUserCircle;
  faKeyIcon = faKey;
  faSignOutIcon =faSignOut;
  userName : any

  loggedin(){
    this.userName =  localStorage.getItem("Token");
    return this.userName;
  }


  logout(){
    localStorage.removeItem("Token");
  }

}
