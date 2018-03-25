import {Component} from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Specification} from '../specification.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-specification',
  templateUrl: './add.template.html'
})
export class AddSpecificationModalComponent {
  ngbModalRef: NgbModalRef;
  specification = new Specification(null, null, null, null, null, null, null, null, null, null, null);

  constructor(private modalService: NgbModal,
              private http: HttpClient) {
  }

  open(content) {
    this.ngbModalRef = this.modalService.open(content);
  }

  save() {
    this.http.post('http://localhost:8181/specifications', this.specification).subscribe(
      () => {
        this.ngbModalRef.close();
      },
      (data) => {
        console.log(data);
      }
    );
  }
}
