import sampleData from './sample-data.js';
import localforage from 'localforage';

class DataAdapter {
  constructor() {
    this.sampleData = sampleData;
    // this.exportToLocalStorage(this.sampleData);
  }

  exportToLocalStorage(data) {
    data.forEach((account, idx, coll) => {
      localforage.setItem(`pass-${idx}`, JSON.stringify(account));
    });
  }

  getAccounts() {
    console.log('called getAccounts');
    return this.sampleData;
  }

  set(data) {
    console.log(data);
    localforage.setItem(data);
  }

  get(key) {
    localforage.getItem(key);
  }
}

export default DataAdapter;