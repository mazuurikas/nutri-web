import {Component, Input} from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Specification} from '../specification.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-specification-modal',
  templateUrl: './modal.template.html'
})
export class AddSpecificationModalComponent {
  ngbModalRef: NgbModalRef;
  @Input() specification: Specification;
  @Input() buttonText: string;
  @Input() buttonClass: string;

  constructor(private modalService: NgbModal,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    if (!this.specification) {
      this.specification = new Specification(null, null, null, null, null, null, null, null, null, null, null);
    }
    if(!this.buttonClass) {
      this.buttonClass = '';
    }
  }

  open(content) {
    this.ngbModalRef = this.modalService.open(content);
  }

  save() {
    if (this.specification._links) {
      this.http.put(this.specification._links.self.href, this.specification).subscribe(
        () => {
          this.ngbModalRef.close();
        },
        (data) => {
          console.log(data);
        }
      );
    } else {
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

  delete() {
    if (this.specification._links) {
      this.http.delete(this.specification._links.self.href).subscribe(
        () => {
          this.ngbModalRef.close();
        },
        (data) => {
          console.log(data);
        }
      );
    } else {
      this.ngbModalRef.close();
    }
  }
}
