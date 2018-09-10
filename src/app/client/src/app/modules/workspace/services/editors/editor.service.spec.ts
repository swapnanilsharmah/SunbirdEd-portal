import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { EditorService } from './editor.service';
import { ConfigService } from '@sunbird/shared';
import { ContentService } from '@sunbird/core';
import { mockRes } from './editor.service.spec.data';

describe('EditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditorService, ConfigService, ContentService]
    });
  });

  it('should call Content service post function', inject([EditorService, ContentService, ConfigService], (service: EditorService,
    configService, contentService) => {
    const response = service.create(mockRes.createCollectionData);
    expect(response).toBeTruthy();
    expect(response).toBeDefined();
  }));

  it('should call Content service get function', inject([EditorService, ContentService, ConfigService], (service: EditorService,
    configService, contentService) => {
    const response = service.getContent('do_1232', {});
    expect(response).toBeTruthy();
    expect(response).toBeDefined();
  }));
});
