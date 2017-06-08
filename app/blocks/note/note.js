import $ from 'jquery';

const cloneNote = () => {
	const txt = document.querySelector('.note__area');
	const parentElem = document.querySelector('.note');
	const hiddenDiv = document.createElement('div');
	let content = null;


	txt.classList.add('noscroll');
	hiddenDiv.classList.add('note__hidden');

	parentElem.appendChild(hiddenDiv);

	$(txt).bind('keyup', () => {
		content = txt.value;
		content = content.replace(/\n/g, '<br>');

		$(hiddenDiv).html(content);
		$(txt).css('height', $(hiddenDiv).height());

	});

};

export default cloneNote;
