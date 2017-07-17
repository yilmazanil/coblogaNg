import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 0, Body: '<b>Sample Post 0</b>' },
      { id: 1, Body: 'Sample Post 1' },
      { id: 2, Body: '<b>Sample Post 2</b>' },
      { id: 5, Body: '<b>Sample Post 5</b>' },
      { id: 7, Body: 'Sample Post 7' },
    ];
    return { posts };
  }
}