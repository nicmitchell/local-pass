export function addAccount({key, account, email, username, password, notes}) {
  return {
    type: 'ADD_ACCOUNT',
    key,
    account,
    email,
    username,
    password,
  }
}

export function updateAccount({key, account, email, username, password, notes}) {
  return {
    type: 'ADD_ACCOUNT',
    key,
    account,
    email,
    username,
    password,
  }
}

export function removeAccount(key) {
  return {
    type: 'REMOVE_ACCOUNT',
    key
  }
}