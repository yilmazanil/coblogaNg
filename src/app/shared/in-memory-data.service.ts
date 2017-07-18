import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 0, Body: '<b>Sample Post 0</b><pre class="language-javascript"><code>joinTags();</code></pre>', Heading: 'My Post Heading 0', Tags: [{id: 0, name: 'Angular', readonly: true}, {id: 1, name: 'React'}] },
      { id: 1, Body: 'Sample Post 1', Heading: 'My Post Heading 0', Tags: [{ id: 1, name: 'C#' }] },
      { id: 2, Body: '<b>Sample Post 2</b>', Heading: 'My Post Heading 0', Tags: [{ id: 1, name: 'C#' }] },
      { id: 5, Body: '<b>Sample Post 5</b>', Heading: 'My Post Heading 0', Tags: [{ id: 1, name: 'C#' }] },
      { id: 7, Body: 'Sample Post 7', Heading: 'My Post Heading 0', Tags: [{ id: 1, name: 'C#' }] },
    ];
    return { posts };
  }
}