import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDetailsComponent } from './librarian-details.component';

describe('LibrarianDetailsComponent', () => {
  let component: LibrarianDetailsComponent;
  let fixture: ComponentFixture<LibrarianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrarianDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrarianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
