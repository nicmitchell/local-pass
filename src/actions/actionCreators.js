export function saveNewAccount(values) { // {account, email, username, password, notes}
  return { 
    type: 'SAVE_NEW_ACCOUNT'
  }
}

export function updateNewAccount(values) {
  return {
    type: 'UPDATE_NEW_ACCOUNT',
    ...values
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
