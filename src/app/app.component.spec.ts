import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { pipe } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Personal_Blogging_Platform'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Personal_Blogging_Platform');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Personal_Blogging_Platform app is running!');
  });
});





// src/app/my-custom.pipe.ts
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'myCustom'
// })
// export class MyCustomPipe implements PipeTransform {

//   transform(value: string): string {
//     if (!value) {
//       return value;
//     }

//     return value.toUpperCase();
//   }
// }

// <!-- src/app/app.component.html -->
// <div>
//   Original: {{ originalText }}
// </div>
// <div>
//   Uppercase: {{ originalText | myCustom }}
// </div>
