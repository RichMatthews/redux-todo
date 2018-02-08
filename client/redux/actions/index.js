export const packItem = item => ({
  type: 'TOGGLE_ITEM',
  data: {
    name: item.name
  }
})

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  data: {
    name: item.name
  }
})

export const addItem = item => ({
  type: 'ADD_ITEM',
  data: {
    name: item,
    packed: false
  }
})

export const markAllAsUnpacked = item => ({
  type: 'MARK_ALL_AS_UNPACKED',
  data: {
    name: item,
    packed: false
  }
})

export const filterItem = term => ({
  type: 'FILTER_ITEM',
  searchTerm: term
})
