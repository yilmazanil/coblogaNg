import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 0, Body: '<b>Some Body Text</b>' },
      { id: 1, Body: '<b>Some Body Text2</b>' },
    ];
    return { posts };
  }
}