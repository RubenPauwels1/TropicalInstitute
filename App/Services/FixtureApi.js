export default {
  // Functions return fixtures
  getLanden: () => {
    return {
      ok: true,
      data: require('../Fixtures/landen.json')
    }
  },
}
