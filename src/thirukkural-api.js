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

function getKuralLine1 (kuralDetails) {
  return kuralDetails.Line1
}

function getKuralLine2 (kuralDetails) {
  return kuralDetails.Line2
}

function getKuralTranslation (kuralDetails) {
  return kuralDetails.Translation
}

function getKuralExplanation (kuralDetails) {
  return kuralDetails.explanation
}

function getKuralNumber (kuralDetails) {
  return kuralDetails.Number
}

exports.getAll = getAll
exports.getKurals = getKurals
exports.getKuralDetails = getKuralDetails
exports.getKural = getKural
exports.getKuralLine1 = getKuralLine1
exports.getKuralLine2 = getKuralLine2
exports.getKuralTranslation = getKuralTranslation
exports.getKuralExplanation = getKuralExplanation
exports.getKuralNumber = getKuralNumber
