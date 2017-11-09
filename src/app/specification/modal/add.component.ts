import {Component} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Specification} from "../specification.model";

@Component({
  selector: 'app-add-specification',
  templateUrl: './add.template.html'
})
export class AddSpecificationModalComponent {
  specification = new Specification(0, "", "", "", 2, 3, 5, 4, 3, 2, 2, 2);

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content);
  }

  save() {
    console.log(this.specification);
  }

}
