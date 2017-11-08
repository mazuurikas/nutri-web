export class Resources<T> {
  constructor(public _embedded: T,
              public _links: Links,
              public page: Page) {
  }
}

class Link {
  constructor(public href: String) {
  }
}

class Links {
  constructor(public self: Link,
              public profile: Link) {
  }
}

class Page {
  constructor(public size: number,
              public totalElements: number,
              public totalPages: number,
              public number: number) {
  }
}
