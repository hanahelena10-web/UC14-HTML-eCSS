const estado = prompt( 'Estado de destino (sigla): \n' + 'Ex:RN, SP, RS, AM')?.toUpperCase().trim

let frete = 0;
let regiao = '';
let prazo = '';

switch (estado) {
case 'RN':
case 'PE':
case 'MA':
case 'PI':
case 'AL':
case 'SE':
case 'BA':
 regiao = 'nordeste';
 frete = 0;
prazo = '3 dias uteis';
break;

case 'SP':
case 'RJ':
case 'ES':
case 'MG':
 regiao = 'sudeste';
 frete = 25;
 prazo = '5 dias uteis';
break;

case 'RS':
case 'SC':
case 'PR':
    regiao = 'Sul';
    frete = 30;
    prazo = '7 dias uteis';
    break;

case 'GO':
case 'MT':
case 'MS':
case 'DF':
    regiao = 'centro-oeste';
    frete = 35;
    prazo = '8 dias uteis'
    break;
case 'AM':
case 'PA':
case 'AC':
case 'RO':
case 'RR':
case 'AP':
case 'TO':
    regiao = 'norte';
    frete = 45
    prazo = '12 dias uteis'

default:
    regiao = 'EStado não encontrado';
    frete = 0 ;
    prazo = 'Indisponivel';

}

if (frete > 0) {
    alert(
    `Estado: ${estado}\n` +
    `Região: ${regiao}\n` +
    `Frete: R$ ${frete}\,00\n` +
    `Prazo: ${estado}`
    );
    console.log({ estado, regiao, frete, prazo});
} else {
    alert(`Estado: "${estado}" não encontrado. \nVerifique a sigla e tente novamente. `);
}
