import {Component, Input} from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './modal.template.html'
})
export class ProductModalComponent {
  ngbModalRef: NgbModalRef;
  @Input() product: Product;
  @Input() buttonText: string;
  @Input() buttonClass: string;

  constructor(private modalService: NgbModal,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    if (!this.product) {
      this.product = new Product(null, null);
    }
    if (!this.buttonClass) {
      this.buttonClass = '';
    }
  }

  open(content) {
    this.ngbModalRef = this.modalService.open(content);
  }

  save() {
    if (this.product._links) {
      this.http.put(this.product._links.self.href, this.product).subscribe(
        () => {
          this.ngbModalRef.close();
        },
        (data) => {
          console.log(data);
        }
      );
    } else {
      this.http.post('http://localhost:8181/products', this.product).subscribe(
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
    if (this.product._links) {
      this.http.delete(this.product._links.self.href).subscribe(
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
