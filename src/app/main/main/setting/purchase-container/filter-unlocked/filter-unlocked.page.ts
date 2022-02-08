import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-unlocked',
  templateUrl: './filter-unlocked.page.html',
  styleUrls: ['./filter-unlocked.page.scss'],
})
export class FilterUnlockedPage implements OnInit {

  filterList: [];
  ownedList;
  extractedArr = [];
  constructor() { }

  ngOnInit() {
    this.filterList = JSON.parse(localStorage.getItem('filterList'))
    this.ownedList = JSON.parse(localStorage.getItem('ownedItemsList'))
    for (let i = 0; i < this.ownedList.length; i++) {
      this.getOwnedFilterList(this.ownedList[i].filter_id)

    }

  }

  getOwnedFilterList(id) {
    this.filterList.filter((v: any) => {
      if (v.id == id) {
        this.extractedArr.push(v)
      }
    })

    console.log('this.extractedArr', this.extractedArr);


  }




}
