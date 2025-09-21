export class Place {
  constructor(title, imageURL, location) {
    this.title = title;
    this.imageURL = imageURL;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = new Date().toString() + Math.random().toString();
  }
}
