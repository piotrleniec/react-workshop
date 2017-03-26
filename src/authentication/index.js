export const getCurrentUser = () => {
  const serializedCurrentUser = localStorage.currentUser

  if (!serializedCurrentUser) return null

  return JSON.parse(serializedCurrentUser)
}

export const setCurrentUser = currentUser => {
  localStorage.currentUser = JSON.stringify(currentUser)
}
