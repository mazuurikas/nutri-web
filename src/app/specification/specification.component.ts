import {Component} from "@angular/core";
import {Specification} from "./specification.model";

@Component({
  selector: 'app-specification',
  templateUrl: './specification.template.html'
})

export class SpecificationComponent {
  specifications: Specification[] = [
    new Specification(1, "Sink", "Rakvere", "Väga... halb", 100.12, 23.929254302, 23, 3, 15, 5, 20, 5),
    new Specification(1, "Sai", "Kirde", "Põhja ja ida vahel", 80.2, 11.23, 1, 0, 5, 3, 5, 10),
    new Specification(1, "Kohupiim", "Farmi", "Väga... halb", 11, 3, 5, 3, 9, 5, 32, 6),
    new Specification(1, "Munad", "Oti", "Ott muneb neid", 0, 0, 0, 0, 0, 0, 100, 0),
    new Specification(1, "Rukkipala", "Leibur", "Is gut", 100.1211111, 23.929254302, 12, 3, 15, 5, 2, 1),
    new Specification(1, "Lammas", "Hundi Lihatööstus", "Hleb", 100.12, 10.34, 23, 3, 12, 5, 3, 5),
    new Specification(1, "Piim", "Tere", "3.5%", 100.12, 23.1, 1, 3, 2, 3, 12, 5),
    new Specification(1, "Piim", "Alma", "3.5%", 10.34, 23.5, 2, 3, 15, 5, 12, 1)
  ]
}
