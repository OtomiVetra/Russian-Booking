export const formatDate = date => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${(date.getDate().toString().padStart(2, "0"))}`
}

export const getDiffDates = (startDate, endDate) => {
  return Math.round((endDate - startDate) / 86400000)
}