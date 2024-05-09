import { TestBed } from '@angular/core/testing';

import { MessagepruebaFirestoreService } from './messageprueba-firestore.service';

describe('MessagepruebaFirestoreService', () => {
  let service: MessagepruebaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagepruebaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
