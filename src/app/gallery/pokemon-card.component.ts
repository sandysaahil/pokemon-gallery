export class PokemonCard {
  url: string;
  name: string;
  id: string;

  constructor(url: string, name: string){
    this.url = url;
    this.name = name;
  }

  public get Url() {
    return this.url;
  }

  public get Name() {
    return this.name;
  }

  public get Id() {
    this.id = this.url.slice(this.url.lastIndexOf('/pokemon/') + 9, this.url.lastIndexOf('/'))
    return this.id;
  }

}
