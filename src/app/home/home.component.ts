import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IndexedDBStorageService } from '../indexed-dbstorage.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: StorageService, useClass: IndexedDBStorageService }]
})
export class HomeComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });


  submitForm(): void {
    console.log(this.form.value);
  }

}
