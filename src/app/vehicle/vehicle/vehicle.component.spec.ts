import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponent } from './vehicle.component';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { Vehicle, VehicleService } from '../vehicle.service';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleComponent, VehicleListComponent, TestComponentWrapper ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});

// Для тестирования компонента с входным параметром пришлось создавать компонент - контейнер
@Component({
  selector: 'test-component-wrapper',
  template: '<app-vehicle [vehicle]="vehicle"></app-vehicle>'
})
class TestComponentWrapper {
  vehicle = new Vehicle(5,'Ferrary');
}