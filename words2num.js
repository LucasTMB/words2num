var negativo = false;
function tornandoNegativo(result) {
  return result = result * (-1);
}

const s2v = {
  'zero': 0,
  'um': 1,
  'uma': 1,
  'one': 1,
  'hum': 1,
  'dois': 2,
  'duas': 2,
  'two': 2,
  'três': 3,
  'tres': 3,
  'three': 3,
  'quatro': 4,
  'four': 4,
  'cinco': 5,
  'five': 5,
  'seis': 6,
  'six': 6,
  'sete': 7,
  'seven': 7,
  'oito': 8,
  'eight': 8,
  'nove': 9,
  'nine': 9,
  'dez': 10,
  'ten': 10,
  'onze': 11,
  'eleven': 11,
  'doze': 12,
  'duzia': 12,
  'dúzia': 12,
  'duzias': 12,
  'dúzias': 12,
  'twelve': 12,
  'treze': 13,
  'thirteen': 13,
  'quatorze': 14,
  'catorze': 14,
  'fourteen': 14,
  'quinze': 15,
  'fifteen': 15,
  'dezesseis': 16,
  'dezasseis': 16,
  'sixteen': 16,
  'dezessete': 17,
  'dezassete': 17,
  'seventeen': 17,
  'dezoito': 18,
  'eighteen': 18,
  'dezenove': 19,
  'dezanove': 19,
  'nineteen': 19,
  'vinte': 20,
  'twenty': 20,
  'trinta': 30,
  'thirty': 30,
  'quarenta': 40,
  'forty': 40,
  'cinquenta': 50,
  'fifty': 50,
  'sessenta': 60,
  'sixty': 60,
  'setenta': 70,
  'seventy': 70,
  'oitenta': 80,
  'eighty': 80,
  'noventa': 90,
  'ninety': 90,
  'cem': 100,
  'hundred': 100,
  'hundreds': 100,
  'cento': 100,
  'centos': 100,
  'duzentos': 200,
  'duzentas': 200,
  'trezentos': 300,
  'trezentas': 300,
  'quatrocentos': 400,
  'quatrocentas': 400,
  'quinhentos': 500,
  'quinhentas': 500,
  'seiscentos': 600,
  'seiscentas': 600,
  'setecentos': 700,
  'setecentas': 700,
  'oitocentos': 800,
  'oitocentas': 800,
  'novecentos': 900,
  'novecentas': 900,
  'mil': 1000,
  'thousand': 1000,
  'thousands': 1000,
  'milhão': 1000000,
  'milhao': 1000000,
  'milhoes': 1000000,
  'milhões': 1000000,
  'million': 1000000,
  'millions': 1000000,
  'bilhão': 1000000000,
  'bilhao': 1000000000,
  'bilhoes': 1000000000,
  'bilhões': 1000000000,
  'billion': 1000000000,
  'billions': 1000000000,
  'trilhão': 1000000000000,
  'trilhao': 1000000000000,
  'trilhoes': 1000000000000,
  'trilhões': 1000000000000,
  'trillion': 1000000000000,
  'trillions': 1000000000000,
  'quatrilhão': 1000000000000000,
  'quatrilhao': 1000000000000000,
  'quatrilhoes': 1000000000000000,
  'quatrilhões': 1000000000000000,
  'quadrilhão': 1000000000000000,
  'quadrilhao': 1000000000000000,
  'quadrilhoes': 1000000000000000,
  'quadrilhões': 1000000000000000,
  'quadrillion': 1000000000000000,
  'quadrillions': 1000000000000000,
  'quintilhão': 1000000000000000000,
  'quintilhao': 1000000000000000000,
  'quintilhoes': 1000000000000000000,
  'quintilhões': 1000000000000000000,
  'quintillion': 1000000000000000000,
  'quintillions': 1000000000000000000
};

const keywords = [
  100,
  1000,
  1000000,
  1000000000,
  1000000000000,
  1000000000000000,
  1000000000000000000
];


function fixer(num) {
  negativo = false;
  let result = 0;
  let acum = 0;
  let numvazio = false;
  //const numLimpo = num.replaceAll(',', ' ').replaceAll(' and ', ' ').replaceAll(' a ', ' ').replaceAll(' e ', ' ')
  const numLimpo = num.replace(/,+/g, ' ').replace(/ and /g, ' ').replace(/ a /g, ' ').replace(/ e /g, '  ').replace(/ +/g,' ');
  const digits = (numLimpo + '').toLowerCase().split(' ');
  for (let i = digits.length - 1; i >= 0; i--) {
    const n = Object.keys(s2v).indexOf(digits[i]);
    const v = Object.values(s2v)[n];
    switch (digits[i]) {
      case ' ':
      case '':
      case 'a':
        break;
      case 'menos':
      case 'negativo':
      case 'negativos':
      case 'negative':
      case 'negatives':
        negativo = true;
        break;
      case 'cem':
      case 'cento':
      case 'centos':
      case 'mil':
      case 'milhao':
      case 'milhão':
      case 'milhoes':
      case 'milhões':
      case 'bilhao':
      case 'bilhão':
      case 'bilhoes':
      case 'bilhões':
      case 'trilhao':
      case 'trilhão':
      case 'trilhoes':
      case 'trilhões':
      case 'quadrilhao':
      case 'quadrilhão':
      case 'quadrilhoes':
      case 'quadrilhões':
      case 'quatrilhao':
      case 'quatrilhão':
      case 'quatrilhoes':
      case 'quintilhao':
      case 'quintilhão':
      case 'quintilhoes':
      case 'quintilhões':
      case 'hundred':
      case 'hundreds':
      case 'thousand':
      case 'thousands':
      case 'million':
      case 'millions':
      case 'billion':
      case 'billions':
      case 'trillion':
      case 'trillions':
      case 'quadrillion':
      case 'quadrillions':
      case 'quintillion':
      case 'quintillions':
        //Realiza a multiplicação do multiplicador com seu antecessor
        acum = 0
        //[trinta, dois, milhoes, vinte, sete, mil, cento, onze]
        LoopInicial: for (k = i; k >= 0; k--) {

          let ante = Object.keys(s2v).indexOf(digits[k - 1]);
          let antes = Object.values(s2v)[ante];
          
          //Não multiplica se não tiver nenhum número antes do multiplicador
          if (isNaN(antes)) {
            i = k;
            if (acum == 0) result = result + v
            break;
          }

          //Checa se antecessor também é multiplicador e não multiplica eles se for
          for (let j = 0; j < keywords.length; j++) {
            if (antes == keywords[j] && keywords[j] != 100) {
              i = k;
              if (acum == 0) result = result + v
              break LoopInicial;
            }
          }

          acum = acum + antes;

        }

        acum = acum * v
        result = result + acum
        break;
      default:
        result = result + v; //não processa valores BigInt
        result = parseFloat(result)
        if (n < 0) throw 'ERRO! Número não reconhecido.'
        break;
    }
  }
  for (let v = 0; v <= digits.length; v++) {
    if ((result == 0 && digits[v] == '') || (result == 0 && digits[v] == ' ') || (result == 0 && digits[v] == undefined)) {
      numvazio = true;
    }
    else {
      numvazio = false;
      break;
    }
  }
  if (numvazio) throw 'ERRO! Nada foi fornecido.'
  return result;
}

function toNum(n) {
  var inte = 0;
  var decim = 0;

  n = n.toLowerCase();
  if (n.indexOf('virgula') >= 0) {
    let decimal = n.substring(n.indexOf('virgula') + 7)
    if (decimal.indexOf('virgula') >= 0 || decimal.indexOf('vírgula') >= 0 || decimal.indexOf('ponto') >= 0 || decimal.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu duas ou mais vírgulas'
    }
    else {
      decim = fixer(decimal);
      let inteiro = n.substring(0, n.indexOf('virgula'))
      if (inteiro.indexOf('virgula') >= 0 || inteiro.indexOf('vírgula') >= 0 || inteiro.indexOf('ponto') >= 0 || inteiro.indexOf('point') >= 0) {
        throw 'ERRO! Você inseriu duas ou mais vírgulas'
      }
      inte = fixer(inteiro);
      let decima = parseFloat('.'.concat(decim));
      inte = inte + decima;
      if (negativo == true) {
        return tornandoNegativo(inte);
      }
      else {
        return inte;
      }
    }
  }

  else if (n.indexOf('vírgula') >= 0) {
    let decimal = n.substring(n.indexOf('vírgula') + 7)
    if (decimal.indexOf('virgula') >= 0 || decimal.indexOf('vírgula') >= 0 || decimal.indexOf('ponto') >= 0 || decimal.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu duas ou mais vírgulas'
    }
    decim = fixer(decimal);
    let inteiro = n.substring(0, n.indexOf('vírgula'))
    if (inteiro.indexOf('virgula') >= 0 || inteiro.indexOf('vírgula') >= 0 || inteiro.indexOf('ponto') >= 0 || inteiro.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu duas ou mais vírgulas'
    }
    inte = fixer(inteiro);
    let decima = parseFloat('.'.concat(decim));
    inte = inte + decima;
    if (negativo == true) {
      return tornandoNegativo(inte);
    }
    else {
      return inte;
    }
  }

  else if (n.indexOf('ponto') >= 0) {
    let decimal = n.substring(n.indexOf('ponto') + 5)
    if (decimal.indexOf('virgula') >= 0 || decimal.indexOf('vírgula') >= 0 || decimal.indexOf('ponto') >= 0 || decimal.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu dois ou mais pontos'
    }
    decim = fixer(decimal);
    let inteiro = n.substring(0, n.indexOf('ponto'))
    if (inteiro.indexOf('virgula') >= 0 || inteiro.indexOf('vírgula') >= 0 || inteiro.indexOf('ponto') >= 0 || inteiro.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu duas ou mais vírgulas'
    }
    inte = fixer(inteiro);
    let decima = parseFloat('.'.concat(decim));
    inte = inte + decima;
    if (negativo == true) {
      return tornandoNegativo(inte);
    }
    else {
      return inte;
    }
  }

  else if (n.indexOf('point') >= 0) {
    let decimal = n.substring(n.indexOf('point') + 5)
    if (decimal.indexOf('virgula') >= 0 || decimal.indexOf('vírgula') >= 0 || decimal.indexOf('ponto') >= 0 || decimal.indexOf('point') >= 0) {
      throw 'ERROR! You have inserted more than one point'
    }
    decim = fixer(decimal);
    let inteiro = n.substring(0, n.indexOf('point'))
    if (inteiro.indexOf('virgula') >= 0 || inteiro.indexOf('vírgula') >= 0 || inteiro.indexOf('ponto') >= 0 || inteiro.indexOf('point') >= 0) {
      throw 'ERRO! Você inseriu duas ou mais vírgulas'
    }
    inte = fixer(inteiro);
    let decima = parseFloat('.'.concat(decim));
    inte = inte + decima;
    if (negativo == true) {
      return tornandoNegativo(inte);
    }
    else {
      return inte;
    }
  }

  else {
    inte = fixer(n)
    if (negativo == true) {
      return tornandoNegativo(inte);
    } else {
      return inte;
    }
  }
}

module.exports = toNum;