export function addAccount(values) { // {account, email, username, password, notes}
  return { 
    type: 'ADD_ACCOUNT',
    values
  }
}

export function updateSavedAccount(values) { // {key, account, email, username, password, notes}
  return {
    type: 'UPDATE_SAVED_ACCOUNT',
    ...values
  }
}

export function saveSavedAccount(key) { //
  return {
    type: 'SAVE_SAVED_ACCOUNT',
    key
  }
}

export function removeAccount(key) {
  return {
    type: 'REMOVE_ACCOUNT',
    key
  }
}
