import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  constructor( )
  {


   }

  ngOnInit(): void {
    const options = {
      strings: [' ', 'Fullstack'+ " " +'Developer' + " " +'Junior' ],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };

 const typed = new Typed('.typed-element', options);


  }
  }





