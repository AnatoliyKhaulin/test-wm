import './vendor';

const habmurgerBtn = document.body.querySelector('.js-hamburger-btn');
const headerNav = document.body.querySelector('.js-header-nav-list');
const headerNavItems = document.body.querySelectorAll('.js-header-nav-list .js-scrollLink');

habmurgerBtn.addEventListener('click', (event) => {
	let self = event.currentTarget;

	if (self.classList.contains('forward')) {
		self.classList.add('backward');
		self.classList.remove('forward');
		headerNav.classList.remove('is-showed');
	} else {
		self.classList.add('forward');
		self.classList.remove('backward');
		headerNav.classList.add('is-showed');
	}
});
headerNavItems.forEach((element) => {
	element.addEventListener('click', () => {
		if (habmurgerBtn.classList.contains('forward')) {
			habmurgerBtn.classList.add('backward');
			habmurgerBtn.classList.remove('forward');
			headerNav.classList.remove('is-showed');
		} else {
			habmurgerBtn.classList.add('forward');
			habmurgerBtn.classList.remove('backward');
			headerNav.classList.add('is-showed');
		}
	});
});

function scrollToAnchor(href) {
	let $target = $(href);

	if (!$target.length) {
		return;
	}

	let destination = $target.offset().top;

	$('html, body')
		.stop()
		.animate(
			{
				scrollTop: destination,
			},
			1100
		);
}

let scrollLink = $('.js-scrollLink');

if (scrollLink.length) {
	scrollLink.on('click', (event) => {
		const $this = $(event.currentTarget);
		event.preventDefault();

		scrollToAnchor($this.attr('href').slice(1));

		if (!$this.hasClass('is-active')) {
			scrollLink.removeClass('is-active');
			$this.addClass('is-active');
		}
	});
}

// $.js = function (el) {
// 	return $(`[data-js=${el}]`);
// };

// function chosen() {
// 	$('.chosen-select').chosen({
// 		disable_search_threshold: 100,
// 		inherit_select_classes: true,
// 		width: '100%',
// 	}).on('chosen:showing_dropdown', function (evt, params) {
// 		$(this).parent().addClass('is-active');

// 		$.js('custom-scroll').find('.chosen-results').niceScroll({
// 			cursorcolor: '#d9d9d9',
// 			cursorwidth: '10px',
// 			background: 'none',
// 			cursorborder: '1px solid #eeeeee',
// 			cursorborderradius: 0,
// 			cursoropacitymin: 1,
// 		});
// 	}).on('chosen:hiding_dropdown', function (evt, params) {
// 		$(this).parent().removeClass('is-active');
// 	});
// }

$('select').niceSelect();

const $niceSelect = $('.nice-select');
const $niceSelectList = $('.nice-select .list');

const currentVal = $niceSelect.find('.current');

if (currentVal[0].innerText.length > 0) {
	$niceSelect.addClass('is-active');
}

$niceSelect.on('click', (e) => {
	const $this = $(e.currentTarget);

	if (!$this.hasClass('open')) {
		setTimeout(() => {
			$niceSelectList.niceScroll({
				cursorcolor: '#d9d9d9',
				cursorwidth: '4px',
				background: 'none',
				cursorborder: '1px solid #d9d9d9',
				cursorborderradius: 10,
				cursoropacitymin: 1,
				// cursorfixedheight: 125,
				railpadding: {top: 15,
					right: 3,
					left: 0,
					bottom: 15},
			});
		}, 100);
	} else {
		if (currentVal[0].innerText.length > 0) {
			$niceSelect.addClass('is-active');
		}

		setTimeout(() => {
			$niceSelectList.getNiceScroll().remove();
		}, 100);
	}
});

$(document).mouseup((e) => {
	if (!$niceSelect.is(e.target) && $niceSelect.has(e.target).length === 0) {
		if (currentVal[0].innerText.length > 0) {
			$niceSelect.addClass('is-active');
		}

		setTimeout(() => {
			$niceSelectList.getNiceScroll().remove();
		}, 100);
	}
});

let formField = $('.js-form-field');

formField.each((index, item) => {
	const thisValue = item.value;

	if (thisValue.length > 0) {
		item.classList.add('is-focused');
	} else {
		item.classList.remove('is-focused');
	}
});

formField.on('focus', (event) => {
	let $this = $(event.currentTarget);
	if (!$this.hasClass('is-focused')) {
		$this.addClass('is-focused');
	}
});

formField.on('blur', (event) => {
	let $this = $(event.currentTarget);

	if ($this.val() < 1) {
		$this.removeClass('is-focused');
	}
});

let items = ['Не владею', 'Использую готовые решения', 'Использую готовые решения и умею и переделывать', '', 'Пишу сложный JS с нуля'];

$('.range-slider')

	.slider({
		min: 1,
		max: 4,
		value: 3,
		step: 0.75,
		range: 'min',
	})

	.slider('pips', {
		rest: 'label',
		labels: items,
	});

// eslint-disable-next-line no-undef
autosize($('textarea'));

$('.about__message').text('Возможность работать удаленно. Перспектива работы с крупными, интересными проектами. Внушительный возраст компании вызывает доверие. Рассчитываю на профессиональный рост и работу в команде мастеров своего дела.');

let h = document.querySelector('.main-header');
let stuck = false;
// eslint-disable-next-line no-use-before-define
let stickPoint = getDistance();

function getDistance() {
	let topDist = h.offsetTop + 100;

	return topDist;
}

window.onscroll = function () {
	let distance = getDistance() - window.pageYOffset;
	let offset = window.pageYOffset;
	if (distance <= 0 && !stuck) {
		h.style.position = 'fixed';
		h.classList.add('is-fixed');
		stuck = true;
	} else if (stuck && offset <= stickPoint) {
		h.style.position = 'static';
		h.classList.remove('is-fixed');
		stuck = false;
	}
}
;
