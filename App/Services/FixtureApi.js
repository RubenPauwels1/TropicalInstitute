export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getLanden: () => {
    return {
      ok: true,
      data: require('../Fixtures/landen.json')
    }
  },
}
