const thirukkural = require('../data/thirukkural')

function getAll () {
  return thirukkural
}

function getKurals (thirukkural) {
  return thirukkural.kural
}

function getKuralDetails (kurals, index) {
  return kurals[index]
}

function getKural (kuralDetails) {
  return [kuralDetails.Line1, kuralDetails.Line2]
}

function getKuralTranslation (kuralDetails) {
  return kuralDetails.Translation
}

function getKuralExplanation (kuralDetails) {
  return kuralDetails.explanation
}

exports.getAll = getAll
exports.getKurals = getKurals
exports.getKuralDetails = getKuralDetails
exports.getKural = getKural
exports.getKuralTranslation = getKuralTranslation
exports.getKuralExplanation = getKuralExplanation
