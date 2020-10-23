const detail = require('../data/detail')

function getAll () {
  return detail
}

function getSections (detail) {
  return detail[0].section.detail
}

function getChapterGroups (section) {
  return section.chapterGroup.detail
}

function getChapters (chapterGroup) {
  return chapterGroup.chapters.detail
}

function getChapter (chapters, index) {
  return chapters[index]
}

function getChapterNumber(chapter) {
  return chapter.number
}

exports.getAll = getAll
exports.getSections = getSections
exports.getChapterGroups = getChapterGroups
exports.getChapters = getChapters
exports.getChapter = getChapter
exports.getChapterNumber = getChapterNumber
