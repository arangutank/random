var RNumber;

var RTries;

limit = 51;

function Random()
{
	today = new Date();
	num = today.getTime();
	num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limit;
	return num;
}

function Init(){
RNumber = Random();
RTries = 0;
document.FGame.Output.value='угадай число от 0 до ' + (limit-1) +' ...';
document.FGame.Tries.value=RTries;
document.FGame.Highlow.value='';
document.FGame.Input.value='';
}

function game(Number) {
if(Number==RNumber)
{
RTries++;
document.FGame.Output.value='Ы догодолись с ' + RTries + ' пыпытки! ЭтЁ БылЁ '
+ RNumber + ' ! НажаМите "ТОрт", чтабы ьыкать снова.';
document.FGame.Highlow.value='ПРавиосоно!Ё!!';
}
else {
    RTries++;
    document.FGame.Output.value='Нет, ' + Number + ' - этЁне чисолоа, котороЁ я какалЁ!Ё!Ё';
    document.FGame.Highlow.value=(RNumber > Number) ? 'ааоаоаоао эт малЁ ты чо!!!' : 'аоаоаоао это дохрена капец ты шо!!!';
    document.FGame.Tries.value=RTries;
     }
}

