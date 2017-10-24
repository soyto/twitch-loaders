$(function() {
  let _resultHour = moment().hours(23).minutes(0).seconds(0);
  let _startingHour = moment();
  let _timeDiff = _resultHour.diff(_startingHour);
  let _lastIteration = null;
  const _texts = [
      'Animando cosas que no esten animadas',
      'Abduciendo alienigenas',
      '000 111 000 101',
      'Rizando bucles infinitos',
      'Eliminando los WHERE de los DELETE FROM',
      'Agregando mensajes emergentes al sistema',
      'Agregando micropagos al sistema',
      'Considerando seriamente la posibilidad de que estos mensajes sean completamente inutiles',
      'Mostrando bit torcidos en la interfaz',
      'Estableciendo el sistema como LFG (Looking For Graphics)',
      'Buscando conexiones desconectadas'
  ];

  $('.texts span').textillate();

  _setText();
  setInterval(_setText, 5000);

  function _setText() {
    let _text = _texts[Math.floor(Math.random() * _texts.length)];

    let _div = $('<div>')
        .attr({
          'data-in-effect': 'bounceIn',
          'data-out-effect': 'hinge'
        })
        .text(_text);

    $('.texts')
        .empty()
        .append(_div);

    _div.textillate();
  }

  requestAnimationFrame(function frame() {
    let _now = moment();

    if(_lastIteration != null && _now.diff(_lastIteration) < 500) {
      return requestAnimationFrame(frame);
    }
    _lastIteration = moment();

    let _diff = _resultHour.diff(_now) / 1000;

    if(_diff <= 0) { _diff = 0;}

    let _currentPercent =  parseFloat((_now.diff(_startingHour))  * 100 / _timeDiff).toFixed(2);

    if($('.progress-bar').css('width') != _currentPercent + '%') {
      $('.progress-bar').css('width', _currentPercent + '%');
    }



    let _seconds = parseInt(_diff % 60);
    let _diffSeconds = _diff / 60;
    let _minutes = parseInt(_diffSeconds % 60);
    let _hours = parseInt(_diffSeconds / 60);

    let _locale = {'minimumIntegerDigits': 2};
    let _text =  _hours.toLocaleString('en-US', _locale) + ':' +
        _minutes.toLocaleString('en-US', _locale) + ':' +
        _seconds.toLocaleString('en-US', _locale);

    if($('.timer').text() != _text) {
      $('.timer').text(_text);
    }


    requestAnimationFrame(frame);
  });




});