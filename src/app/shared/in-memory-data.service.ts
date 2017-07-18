import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 0, Body: '<b>Sample Post 0</b>', Heading: 'My Post Heading 0', Tags: [{ id: 1, Name: 'C#' }, {id:2, Name : 'Javascript'}] },
      { id: 1, Body: 'Sample Post 1', Heading: 'My Post Heading 0', Tags: [{ id: 1, Name: 'C#' }] },
      { id: 2, Body: '<b>Sample Post 2</b>', Heading: 'My Post Heading 0', Tags: [{ id: 1, Name: 'C#' }] },
      { id: 5, Body: '<b>Sample Post 5</b>', Heading: 'My Post Heading 0', Tags: [{ id: 1, Name: 'C#' }] },
      { id: 7, Body: 'Sample Post 7', Heading: 'My Post Heading 0', Tags: [{ id: 1, Name: 'C#' }] },
    ];
    return { posts };
  }
}