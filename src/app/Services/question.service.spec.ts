import { TestBed, inject } from '@angular/core/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService]
    });
  });

  it('should be created', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));

  it('Testing GetAllQuestions', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();

    service.getAllQuestions().subscribe((questions) => {
    	expect(questions).toBeTruthy();
      	expect(questions.length).toBeGreaterThan(0);
    });
  }));


});

