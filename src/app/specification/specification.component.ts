import {Component, OnInit} from "@angular/core";
import {Specification, SpecificationResource} from "./specification.model";
import {HttpClient} from "@angular/common/http";
import {Resources} from "../shared/resource.model";

@Component({
  selector: 'app-specification',
  templateUrl: './specification.template.html',
  styleUrls: ['./specification.component.css']
})

export class SpecificationComponent implements OnInit {
  specifications: Specification[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.populateSpecifications();
  }

  public populateSpecifications(): void {
    this.http.get <Resources<SpecificationResource>>('http://localhost:8181/specifications').subscribe(
      data => {
        this.specifications = data._embedded.specifications;
      }
    )
  }
}
