import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'ion-rangeslider';
import cloneNode from '../blocks/note/note';


$(() => {
	svg4everybody();
	$('#slider').ionRangeSlider({
		value: [
			'Не владею',
			'Использую готовые решения',
			'Использую готовые решения и умею их переделывать',
			'Пишу сложный JS с нуля'
		]
	});
	cloneNode();
});
