// random
function random(array) {
	const index = Math.floor(Math.random() * array.length)
	return array[index]
}

function generateTrashTalk(options) {
	const task = {
		engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
		designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
		entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
	}

	const phrase = ['很簡單', '很容易', '很快', '很正常']
	let arr = Object.keys(options)
	let trashTalk = ''
	if (arr.length === 0) {
		trashTalk = '請選擇一個職業'
	}
	if (arr.length === 2 || arr.length === 3) {
		trashTalk = '不要選擇超過一個職業'
	}

	if (options.engineer === 'on' && arr.length === 1) {
		trashTalk = `身為一個工程師, ${random(task.engineer)}, ${random(phrase)}`
	}
	if (options.designer === 'on' && arr.length === 1) {
		trashTalk = `身為一個設計師, ${random(task.designer)}, ${random(phrase)}`
	}
	if (options.entrepreneur === 'on' && arr.length === 1) {
		trashTalk = `身為一個創業者, ${random(task.entrepreneur)}, ${random(
			phrase
		)}`
	}
	return trashTalk
}

module.exports = generateTrashTalk
