export class DatabaseFake {
  #videos = [];

  create(video) {
    this.#videos.push(video);
  }
  update(id, video) {
    this.#videos.push(video);
  }
}
