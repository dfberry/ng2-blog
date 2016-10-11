/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DataService } from './app.data.service';
import * as _ from 'lodash';

describe('DataService', function () {
  let dataService: DataService;
  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [AppComponent],
      providers: [DataService]
    });
    dataService = TestBed.get(DataService);
    done();
  });
  it('should be instantiated by the testbed', (done) => {
    expect(dataService).toBeDefined();
    done();
  });
  it('should return {a:b}', (done) => {

    let expected: Object = {"a":"b"};

    dataService.getItems("http://localhost:8090/config.json")
           .subscribe(
            (response) => {
                expect(_.isEqual(response,expected)).toBe(true);
                done();
            },
            (err) => {
                done();
            }
        );
  });
});
