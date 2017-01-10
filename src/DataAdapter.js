import sampleData from './sample-data.js';
import localforage from 'localforage';

class DataAdapter {
  constructor() {
    // localforage.clear();
    this.data = [];
  }

  exportToLocalStorage(data) {
    data.forEach((account, idx, coll) => {
      localforage.setItem(idx.toString(), account)
        .then((val) => {
          console.log('Exporting sample data success', val);
        })
        .catch((e) => {
          console.log('Exporting sample data error', e);
        })
    });
  }

  getAccounts() {
    return new Promise((resolve, reject) =>{
      if (!localforage.length) {
        this.data = sampleData;
        this.exportToLocalStorage(this.data);
        resolve(this.data);
      } else {
        localforage.iterate((account, key) => {
          console.log('Retrieving from IndexDB', account);
          if(!isNaN(parseInt(key, 10))) {
            account.key = key;
            this.data.push(account);
          } else {
            localforage.removeItem(key);
          }
        }).then(() => {
          resolve(this.data);
        })
      }
    });
  }

  set(key, data) {
    localforage.setItem(key.toString(), data);
  }

  get(key) {
    localforage.getItem(key);
  }
}

export default DataAdapter;