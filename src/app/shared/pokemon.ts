/**
 * Representation class to show pokemon card on UI.
 */
export class Pokemon {
  name: string;
  url: string;
  id: string;

  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }

  public get Id() { // returns the index of the pokemon embedded in URL (which is also name of the image in repository)
    this.id = this.url.slice(this.url.lastIndexOf('/pokemon/') + 9, this.url.lastIndexOf('/'));
    return this.id;
  }
}
