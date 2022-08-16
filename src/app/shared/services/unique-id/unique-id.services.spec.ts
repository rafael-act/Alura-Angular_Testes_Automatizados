//describe('O nome do artefato que queremos testar','arrow function com artefato pra poder testar')

import { UniqueIdService } from "./unique-id.services";

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  //it('Primeira condicao que queremos testar','logica do teste para executar');
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should not generate duplicate id`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
  should return the number of generated Ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues=[null, undefined, '','0','1'];

    emptyValues.forEach(emptyValue => {
       expect(() => service.generateUniqueIdWithPrefix(emptyValue))
       .withContext(`Empty value: ${emptyValue}`)
       .toThrow();
    });

  });
});
