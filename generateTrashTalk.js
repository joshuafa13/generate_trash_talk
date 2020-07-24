// random
function random(array) {
	const index = Math.floor(Math.random() * array.length)
	return array[index]
}

function generateTrashTalk(jobSelected) {
	const task = {
		engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
		designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
		entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
	}

	const phrase = ['很簡單', '很容易', '很快', '很正常']

	let trashTalk = ''

	if (jobSelected === 'engineer') {
		trashTalk = `身為一個工程師, ${random(task.engineer)}, ${random(phrase)}`
	}

	if (jobSelected === 'designer') {
		trashTalk = `身為一個設計師, ${random(task.designer)}, ${random(phrase)}`
	}

	if (jobSelected === 'entrepreneur') {
		trashTalk = `身為一個創業者, ${random(task.entrepreneur)}, ${random(phrase)}`
	}

	if (!jobSelected) {
		trashTalk = '請選擇一個職業'
	}
	return trashTalk
}

module.exports = generateTrashTalk
