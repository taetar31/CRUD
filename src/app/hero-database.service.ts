import { InMemoryDbService } from 'angular-in-memory-web-api';

// Creating the database to retrieve data from
export class HeroDatabaseService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Superman' },
      { id: 1, name: 'Spider-man' },
      { id: 2, name: 'Batman' },
      { id: 3, name: 'Wonder Woman' },
      { id: 4, name: 'Hulk' },
      { id: 5, name: 'Green Lantern' },
      { id: 6, name: 'Flash' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Captain America' },
      { id: 9, name: 'Iron Man' },
      { id: 10, name: 'Wolverine' }
    ];
    return { heroes };
  }
}
