import { TestBed, async } from '@angular/core/testing';

import { HttpModule, Response } from "@angular/http";

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { Vehicle, VehicleService } from './vehicle/vehicle.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        VehicleListComponent,
        VehicleComponent
      ],
      providers:[VehicleService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
