const detail = require('../data/detail')

function getAll () {
  return detail
}

function getSections (detail) {
  return detail[0].section.detail
}

function getChapterGroups (section) {
  return section.detail
}

function getChapters (chapterGroup) {
  return chapterGroup.chapters.detail
}

function getChapter (chapters, index) {
  return chapters[index]
}

exports.getAll = getAll
exports.getSections = getSections
exports.getChapterGroups = getChapterGroups
exports.getChapters = getChapters
exports.getChapter = getChapter
