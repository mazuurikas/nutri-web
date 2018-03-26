export class Resources<T> {
  constructor(public _embedded: T,
              public _links: Links,
              public page: Page) {
  }
}

export class Resource {
  constructor(public _links?: Links) {
  }
}

class Link {
  constructor(public href: string) {
  }
}

class Links {
  constructor(public self: Link) {
  }
}

class Page {
  constructor(public size: number,
              public totalElements: number,
              public totalPages: number,
              public number: number) {
  }
}
