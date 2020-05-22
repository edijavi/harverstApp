import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const items = document.querySelectorAll('.accordion a');
    function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
    items.forEach(item => item.addEventListener('click', toggleAccordion));
  }

}
