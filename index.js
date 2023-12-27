const deposite =11000;
const rate = 0.07;
const depositeLength =24;
const houseCost = 13500;

const res = (deposite * (1 + rate / 12) ** 24).toFixed(1);

if (res> houseCost) {
    console.log(`Мы накопили: ${res}. Можем купить. Остаток средств ${(res - houseCost).toFixed(1)}`)
} else {
    console.log("Не можем купить")
    
}


const role = 'admin';

switch (role) {
    case 'manager':
        console.log('Менеджер')
        break;
    case 'admin':
        console.log('Админ')
        break;
    case 'ceo':
        console.log('CEO')
        break;    
    default:
        console.log("Мы тебя не знаем")
        break;
}


const str = 1 > 2 ? 'Больше 2' : 'Не больше 2';

console.log(str)