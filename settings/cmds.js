var func = require("./functions.js");
var city = require("./city.js").city;
var pshop = require("./pshop.js");
var dshop = require("./dark_shop.js").shop;
var dis = require('./diseases.js').diseases;
var transfer = require("./transfer.js").transfer;
var trees = require('./trees.js').trees;
var bit = require("./course.js").bit;
var clan = require('./clan.js').clan;
var property = require("./property.js");
var other1 = require("./other.js").other;
var config = require("./config.js").config;
var pets = require("./pets.js").pets;
var exetime = require("execution-time")();
var cmds = [];

var cmd = (name, rights, func) => {
		cmds.push([name, rights, func]);
		}
		
		cmd(/^(?:xd)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
	if(i.id != config.creator.id) return;
try{
exetime.start();
var evtext = eval(args[1]);
msg.send(`💻Итог: ${evtext}
✏ | Тип: ${typeof(evtext)}
⏳ | Время выполнения скрипта: ${((exetime.stop()).time/1000).toFixed(2)}сек.`);
}catch(err){
send("⚠error: "+err.toString());
}
});
		
		cmd(/^(?:Помощь|Команды|Help|Начать|Старт)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
			let nark7 = (city[i.city].drugs == false) ? "": "\n⠀​​⠀​⠀💉 Наркотики (удалено)";
send(`[id${i.uid}|${i.name}], мои команды:

💡 | Главное:
⠀⠀⠀📒 Профиль
⠀⠀⠀💰 Баланс
⠀⠀⠀💳 Банк
⠀⠀⠀🏆 Топ
⠀⠀⠀💎 Бонус

💿 | Заработок:
⠀⠀⠀🛠 Работы
⠀⠀⠀💼 Бизнес
⠀⠀⠀📦 Кейсы
⠀⠀⠀📀 Фермы (Деревья)
⠀⠀⠀🎰 Казино [ставка]
⠀⠀⠀🎮 Слоты [ставка]
⠀⠀⠀🍀 Удача (Нвути) [шанс] [ставка]
⠀⠀⠀💸 Передача
⠀⠀⠀💵 Кредит

📱 | Профиль:
⠀⠀⠀👤 Ник [ник]
⠀⠀⠀❤ Здоровье
⠀⠀⠀⚡ Энергия
⠀⠀⠀💊 Аптека
⠀⠀⠀🏯 Города
⠀⠀⠀🏡 Дома
⠀⠀⠀🚜 Транспорт
⠀⠀⠀🐱 Питомцы
⠀⠀⠀💕 Свадьба

🔨 | Остальное:
⠀⠀⠀🔑 Донат
⠀⠀⠀🔎 Поиск [ссылка]
⠀⠀⠀📃 Лотерея
⠀⠀⠀👥 Кланы
⠀⠀⠀⛔ Репорт [текст]
⠀​​⠀​⠀📈 Курс${nark7}
`);
});
		
		cmd(/^(?:Профиль|Проф|юзер)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
			let ddis = (!dis[i.disease]) ? "Нет": dis[i.disease].name;
			let work6 = (i.work.id == false) ? "Нет": city[i.city].works[i.work.id].name + " ("+i.work.day+"/30)";
			let credit2 = (i.credit == false) ? "Нет": func.sp(i.credit)+"$";
			let biz901 = (i.biz.level == false) ? "Нет": i.biz.level+" уровня"
			let house90 = (i.house == false) ? "Нет": property.houses[i.house].name;
			let transport90 = (i.transport == false) ? "Нет": property.transport[i.transport].name;
			let pettime = (i.pet.time == 0) ? "[✔]": "[🚫]";
			let pet77 = (i.pet.id == false) ? "Нет": pets[i.pet.id].name+pettime;
			let brak11 = (i.brak.user > -1) ? "\n⠀​​⠀​⠀💕 || Женат(а) на: [id"+users[i.brak.user].id+"|"+users[i.brak.user].name+"]["+i.brak.user+"]": "";
			let cclan2 = (i.clan < 0) ? "": "\n⠀​​⠀​⠀👥 || Клан: "+clans[i.clan].name+"["+i.clan+"]";
			var sstr = 0;
			i.trees.map(x=> sstr += x.count*trees[x.id].bitcoins);
			var sstr = (i.trees.length < 1) ? "": "\n⠀​​⠀​⠀🌱 || Доход с деревьев: "+func.sp(sstr)+" биткойнов/час.";
send(`[🚹] Профиль [🚹]
⠀​​⠀​⠀👤 || Имя: ${i.name}
⠀​​⠀​⠀🆔 || ${i.uid}
⠀​​⠀​⠀💻 || Привилегия: ${func.get_rights(i.rights)}
⠀​​⠀​⠀🌎 || Город: ${city[i.city].name}
⠀​​⠀​⠀🌐 || Уровень: ${i.level.level} (${func.sp(i.level.exp)}/${func.sp(i.level.exps)})
⠀​​⠀​⠀💸 || Баланс: ${func.sp(i.money)}$
⠀​​⠀​⠀🏦 || В банке: ${func.sp(i.bank)}$
⠀​​⠀​⠀💳 || Биткоинов: ${func.sp(i.bitcoins)}
⠀​​⠀​⠀💢 || Кредит: ${credit2}
⠀​​⠀​⠀💉 || Наркотики: ${func.sp(i.drugs)}
⠀​​⠀​⠀👷 || Работа: ${work6}
⠀​​⠀​⠀🌟 || Опыт работы: ${func.sp(i.work.exp)}
⠀​​⠀​⠀➖➖➖➖➖
⠀​​⠀​⠀🏭 || Бизнес: ${biz901}
⠀​​⠀​⠀🏡 || Жильё: ${house90}
⠀​​⠀​⠀🚜 || Транспорт: ${transport90}
⠀​​⠀​⠀🐱 || Питомец: ${pet77} ${brak11} ${cclan2} ${sstr}
⠀​​⠀​⠀➖➖➖➖➖
⠀​​⠀​⠀💜Здоровье: ${i.hp}/100
⠀​​⠀​⠀⚡Энергия: ${i.energy}/100
⠀​​⠀​⠀💀Болезнь: ${ddis}
⠀​​⠀​⠀➖➖➖➖➖
⠀​​⠀​⠀(❓)Дата регистрации: ${i.date}
⠀​​⠀​⠀
⠀​​⠀​⠀❕Список биткоин-деревьев: Деревья список`);
});

cmd(/^(?:Донат|Donate|платное)$/i, 0, (send, users) => {
send(`[🌚] Донат [🌚]

🏆Master - 70р.
📝 | Возможности: Восстанавливать себя, Просматривать профили игроков и кланы, Устанавливать себе длинный ник(до 30смлв).
🎁 | Бонусы: Лимит передачи 1КККК вместо 1ККК, Красивая пометка в топе, Банк выдает 4% в день вместо 2%, Доступ к особым домам, машинам, питомцам в магазине, Опыт при использовании команд (×5), Вместимость банка 1ККККК вместо 1КККК.

🃏JOKER - 110р.
📝 | Возможности: Использовать MASTER возможности, Открывать раз в суток особый кейс, Устанавливать длинные ники игрокам, Получать 10% баланса раз в суток. 
🎁 | Бонусы: Безлимитную передачу, Красивая пометка в топе, Банк выдает 10% в день вместо 2%, Доступ к особым домам, машинам, питомцам в магазине, Опыт при использовании команд (×15), Вместимость банка Безлимитная.

😈Moderator  - 250р.
🌐Описание: Имеет все возможности и бонусы Джокера + Способность выдавать, забирать валюту и опыт. Возможность банить, разбанивать игроков. Создание промокодов, обнуление профилей игроков и исключение их из чата.

👾Federal(биткойн дерево) - 100р.
💸 | Производство: 2млн. биткойнов в час.
➖➖➖➖➖
💥Покупка совершается у [id${config.creator.id}|${config.creator.name}]`);
});

cmd(/^(?:Баланс|бал|монеты|деньги)$/i, 0, (send, users) => {
	let credit2 = (i.credit == false) ? "Нет": func.sp(i.credit)+"$";
send(`[💵] Баланс [💵]
⠀​​⠀​⠀(💸)При себе: ${func.sp(i.money)}$
⠀​​⠀​⠀(🏦)В банке: ${func.sp(i.bank)}$
⠀​​⠀​⠀(💳)Биткоинов: ${func.sp(i.bitcoins)}
⠀​​⠀​⠀(💢)Кредит: ${credit2}
⠀​​⠀​⠀(💉)Наркотики: ${func.sp(i.drugs)}`);
});

cmd(/^(?:Ник|Имя|фамилия)\s([^]+)$/i, 0, (send, users) => {
	if(args[1].length > 15) return send("❌ || Длина никнейма не может привышать 15 символов!");
	i.name = args[1];
send("👤 || Ваше имя изменено! Текущее имя: "+i.name);
});

cmd(/^(?:Здоровье)$/i, 0, (send, users) => {
	var hp_list = pshop.hp.map(x=> x.icon+" || "+x.name+"\n💙Здоровье: +"+x.reg+"\n💲Цена: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[💜] Здоровье [💜]
✔Здесь вы можете купить лечение.

${hp_list}
➖➖➖➖➖
❔Для покупки введите: Здоровье [id товара]
❕Без покупок здоровье восстанавливается со скоростью: 1ед./5мин.`);
});

cmd(/^(?:Здоровье)\s([^]+)$/i, 0, (send, users) => {
	var item = pshop.hp[args[1]];
	if(!item) return send("❌ || Товара под таким номером не найдено!");
	if(i.money < item.cost) return send("❌ || Не хватает средств!");
	i.money -= item.cost;
let reg = (i.hp + item.reg > 100) ? 100: i.hp + item.reg;
send(`${item.icon} || Вы успешно купили товар: ${item.name}, здоровье: ${i.hp} + ${reg-i.hp}`);
i.hp = reg;
});

cmd(/^(?:Энергия)$/i, 0, (send, users) => {
	var energy_list = pshop.energy.map(x=> x.icon+" || "+x.name+"\n⚡Энергия: +"+x.reg+"\n💲Цена: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[⚡] Энергия [⚡]
✔Здесь вы можете пополнить энергию.

${energy_list}
➖➖➖➖➖
❔Для покупки введите: Энергия [id товара]`);
});

cmd(/^(?:Энергия)\s([^]+)$/i, 0, (send, users) => {
	var item = pshop.energy[args[1]];
	if(!item) return send("❌ || Товара под таким номером не найдено!");
	if(i.money < item.cost) return send("❌ || Не хватает средств!");
	i.money -= item.cost;
let reg = (i.energy + item.reg > 100) ? 100: i.energy + item.reg;
send(`${item.icon} || Вы успешно купили товар: ${item.name}, энергия: ${i.energy} + ${reg-i.energy}`);
i.energy = reg;
});

cmd(/^(?:Аптека)$/i, 0, (send, users) => {
	var healt_list = pshop.healt.map(x=> x.icon+" || "+x.name+"\n📔Описание: "+x.text+"\n💲Цена: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[💊] Аптека [💊]
✔Здесь вы можете вылечится от болезней.

${healt_list}
➖➖➖➖➖
❔Для покупки введите: Аптека [id товара]`);
});

cmd(/^(?:Аптека)\s([^]+)$/i, 0, (send, users) => {
	var item = pshop.healt[args[1]];
	if(!item) return send("❌ || Товара под таким номером не найдено!");
	if(i.disease != item.healt) return send("❌ || Вы не больны данной болезнью!");
	if(i.money < item.cost) return send("❌ || Не хватает средств!");
	i.money -= item.cost;
send(`${item.icon} || Вы успешно купили товар: ${item.name}, болезнь вылечена!`);
i.disease = false;
});

cmd(/^(?:Работы)$/i, 0, (send, users) => {
	var works_list = city[i.city].works.filter(x=> x.id > 0).map(x=> "♦ || "+x.name+"\n💲Зарплата: до "+func.sp(x.max_salary)+"$\nТребуется опыта работы: "+func.sp(x.exps)+"\n🔹ID: "+x.id+"\n").join("\n");
send(`[👷] Работы [👷]
✔Здесь вы можете выбрать для себя подходящую работу.

${works_list}
➖➖➖➖➖
❔Для устройства введите: Устроиться [id работы]
❔Для увольнения введите: Уволиться
❔Для работы пишите: Работать
❕Зарплата выплачивается за 30 рабочих дней.`);
});

cmd(/^(?:Устроиться)\s([^]+)$/i, 0, (send, users) => {
	if(i.work.id != false) return send("❌ || У вас уже есть работа!");
	let work5 = city[i.city].works[args[1]];
	if(!work5 || args[1] < 1) return send("❌ || Работы под таким номером не найдено!");
	if(i.work.exp < work5.exps) return send("❌|| Не хватает опыта работы!");
	i.work.id = work5.id;
	send("👷 || Вы устроились на работу: "+work5.name);
	});

cmd(/^(?:Уволиться)$/i, 0, (send, users) => {
if(i.work.id == false) return send("❌ || У вас и так нет работы!");
i.work.day = 0;
i.work.id = false;
i.work.timer = 0;
send("🚮 || Вы успешно уволились с работы!");
});

cmd(/^(?:Работать)$/i, 0, (send, users) => {
if(!i.work.id) return send("❌ || У вас нет работы!");
if(i.work.timer != 0) return send("❌ || Работать можно раз в 5 минут!\n??Подождите ещё: "+func.timer(i.work.timer));
i.work.day++;
i.work.timer = 300;
if(i.work.day >= 30) {
	let workfo = city[i.city].works[i.work.id];
	let zp_ = func.rand(workfo.min_salary, workfo.max_salary);
	let exp_ = func.rand(workfo.min_exp, workfo.max_exp);
	i.work.day = 0;
	i.money += zp_;
	i.work.exp += exp_;
	return send("👷 || Вы отработали месяц и получили зарплату: "+func.sp(zp_)+"$, а также опыта работы: "+func.sp(exp_));
	}
	send("👷 || Вы успешно отработали рабочий день ("+i.work.day+"/30)");
});

cmd(/^(?:Города)$/i, 0, (send, users) => {
	var city_list = city.map(x=> "🏰 || "+x.name+"\n❓Описание: "+x.text+"\n💲Стоимость перелёта: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[🏯] Города [🏯]
✔Здесь вы можете посмотреть информацию о городах, а также совершить перелёт.

${city_list}
➖➖➖➖➖
❔Для перелёта введите: Перелёт [id города]
`);
});

cmd(/^(?:Перелёт|Перелет)\s([^]+)$/i, 0, (send, users) => {
	if(i.credit != false) return send("❌ || Нельзя совершать перелёты имея кредит!");
	let city5 = city[args[1]];
	if(!city5) return send("❌ || Города под таким номером не существует!");
	if(i.city == city5.id) return send("❌ || Вы и так находитесь в данном городе!");
	if(i.money < city5.cost) return send("❌ || Не хватает средств!");
	i.city = city5.id;
	i.work.id = false;
	i.work.day = 0;
	i.money -= city5.cost;
	if(city5.drugs == false && i.drugs > 0) {
		i.drugs = 0;
return send("🚁 || Вы совершили перелёт в город: "+city5.name+"\n🔹Ваши наркотики были отобраны!");
}
	send("🚁 || Вы совершили перелёт в город: "+city5.name);
	});
	
	cmd(/^(?:Наркотики|Наркотик)$/i, 0, (send, users) => {
if(city[i.city].drugs == false) return send("❌ || Наркотики запрещены в вашем городе!");
send(`[💉] Наркотики [💉]
✴ || Наркотик - ${dshop[0].text} 
1 Наркотик => ${dshop[0].cost}$
➖➖➖➖➖
❔Для покупки введите: Наркотик купить [кол-во]
❔Для употребления введите: Наркотик принять`);
});

cmd(/^(?:Наркотики|Наркотик)\s(купить)\s([^]+)$/i, 0, (send, users) => {
if(city[i.city].drugs == false) return send("❌ || Наркотики запрещены в вашем городе!");
var count9 = args[2].replace(/(k|K|К|к)/ig, "000");
if(!Number(count9) || count9 < 1) return send("❌ || Введите адекватное колличество!");
count9 = Number(func.fix(count9));
if(i.money < count9*dshop[0].cost) return send("❌ || Не хватает средств!");
i.money -= count9*dshop[0].cost;
i.drugs += count9;
send("💉 || Покупка наркотиков произошла успешно!");
});

cmd(/^(?:Наркотики|Наркотик)\s(принять|употребить|использовать)$/i, 0, (send, users) => {
if(i.drugs < 1) return send("❌ || У вас нет наркотиков!");
i.drugs -= 1;
i.hp = 100;
i.energy = 100;
i.disease = false;
send("💉 || Наркотик успешно употреблён!");
});

cmd(/^(?:Передача|дать)$/i, 0, (send, users) => {
	let transfer_list = transfer.items.map(x=> "📄 || "+x.name+"\n🔹ID: "+x.id+"\n").join("\n");
send(`[♻] Передача [♻]
✔Здесь вы можете совершить передачу какого-либо ресурса.

${transfer_list}
➖➖➖➖➖
❔Для передачи введите: Передать [id игрока] [id ресурса] [кол-во]`);
});

cmd(/^(?:Передача|Передать|дать)\s([^]+)\s([^]+)\s([^]+)$/i, 0, (send, users) => {
	if(i.credit != false) return send("❌ || Нельзя совершать переводы имея кредит!");
   let user_pay = users[args[1]];
   let id_pay = transfer.items[args[2]];
let count_pay = func.zap(args[3]);
if(!user_pay) return send("❌ || Игрока под таким номером не найдено!");
if(user_pay.uid == i.uid) return send("❌ || Нельзя передавать самому себе!");
if(!id_pay) return send("❌ || Ресурса под таким номером не найдено!");
let i_res = eval("i."+id_pay.cmd);
count_pay = count_pay.replace(/(все|всё)/ig, i_res)
if(!Number(count_pay) || count_pay < 1) return send("❌ || Введите адекватное колличество!");
count_pay = Number(func.fix(count_pay));
var lim45 = (!transfer.limit[i.rights]) ? 1e+500: transfer.limit[i.rights];
var zzd45 = (lim45/id_pay.cost)-(lim45%id_pay.cost);
if(id_pay.cost*count_pay > lim45) return send("❌ || Вы не можете передавать более: "+func.sp(zzd45)+" данного ресурса!");
if(i_res < count_pay) return send("❌ || Не хватает ресурсов!");
let i_xd = ("i."+id_pay.cmd+" -= "+count_pay);
let he_xd = ("user_pay."+id_pay.cmd+" += "+count_pay);
eval(i_xd);
eval(he_xd);
send("♻ || Успешно!"); //vk!
});

cmd(/^(?:Кредит)$/i, 0, (send, users) => {
	let credit2 = (i.credit == false) ? "Нет": func.sp(i.credit)+"$";
send(`[💸] Кредит [💸]
✔Здесь вы можете взять кредит до 1.000.000$

📄 || Ваш кредит: ${credit2}
➖➖➖➖➖
❔Для взятия кредита введите: Кредит взять [сумма]
❔Для погашения кредита введите: Кредит погасить
❕Имея кредит, вы не сможете: совершать перелёты, передавать ресурсы, ложить деньги в банк.
❕Сумма кредита увеличивается на 1% каждый час.`);
});

cmd(/^(?:Кредит)\s(взять)\s([^]+)$/i, 0, (send, users) => {
if(i.credit != false) return send("❌ || Для начала погасите текущий кредит!");
let sum09 = func.zap(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
if(sum09 > 1000000) return send("❌ || Сумма кредита не должна превышать: 1.000.000$!");
i.money += sum09;
i.credit = sum09;
send("💸 || Вы успешно взяли кредит на сумму: "+func.sp(sum09)+"$");
});

cmd(/^(?:Кредит)\s(погасить|оплатить)$/i, 0, (send, users) => {
if(i.credit == false) return send("❌ || У вас и так нет кредита!");
if(i.money < i.credit) return send("❌ || Не хватает средств!");
i.money -= i.credit;
i.credit = false;
send("💸 || Кредит успешно оплачен!");
});

cmd(/^(?:Банк)$/i, 0, (send, users) => {
send(`[🏦] Банк [🏦]
✔Здесь вы можете вложить деньги в банк.

💵 || У вас в банке: ${func.sp(i.bank)}$
➖➖➖➖➖
❔Для вложения введите: Банк вложить [сумма]
❔Для снятия введите: Банк снять [сумма]
❕При смерти банковские деньги остаются.
❕Сумма в банке увеличивается на 2% каждый суток.`);
});

cmd(/^(?:Банк)\s(вложить|положить|пополнить)\s([^]+)$/i, 0, (send, users) => {
	if(i.credit != false) return send("❌ || Нельзя совершать вложения в банк имея кредит!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
if(i.money < sum09) return send("❌ || Не хватает средств!");
var blim34 = (!other1.bank_limit[i.rights]) ? 1e+500: other1.bank_limit[i.rights];
if(i.bank+sum09 > blim34) return send("❌ || Вы не можете положить в банк более: "+func.sp(blim34)+"$!");
i.bank += sum09;
i.money -= sum09;
send("🏦 || Вы успешно положили в банк: "+func.sp(sum09)+"$");
});

cmd(/^(?:Банк)\s(снять|взять)\s([^]+)$/i, 0, (send, users) => {
let sum09 = func.zap(args[2]);
sum09 = sum09.replace(/(все|всё)/ig, i.bank)
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
if(i.bank < sum09) return send("❌ || На вашем банковском счету нет столько средств!");
i.bank -= sum09;
i.money += sum09;
send("🏦 || Вы успешно сняли с банковского счёта: "+func.sp(sum09)+"$");
});

cmd(/^(?:Курс)$/i, 0, (send, users, bitcoins) => {
send(`[💎] Курс [💎]
✔Здесь вы можете заработать средств путём покупки и продажи биткоинов.

1 биткоин(💳) = ${func.sp(bitcoins)}$
➖➖➖➖➖
❔Для покупки биткоинов введите: Биткоины купить [кол-во]
❔Для продажи биткоинов введите: Биткоины продать [кол-во]
`);
});

cmd(/^(?:Биткоины|Биткоин)\s(купить)\s([^]+)$/i, 0, (send, users, bitcoins) => {
let count49 = func.zap(args[2]);
if(!Number(count49) || count49 < 1) return send("❌ || Введите адекватную сумму!");
count49 = Number(func.fix(count49));
if(i.money < bitcoins*count49) return send("❌ || Не хватает средств!");
i.money -= bitcoins*count49;
i.bitcoins += count49;
send("💳 || Вы успешно купили: "+func.sp(count49)+" биткоинов!");
});

cmd(/^(?:Биткоины|Биткоин)\s(продать)\s([^]+)$/i, 0, (send, users, bitcoins) => {
let count49 = func.zap(args[2]);
count49 = count49.replace(/(все|всё)/ig, i.bitcoins);
if(!Number(count49) || count49 < 1) return send("❌ || Введите адекватную сумму!");
count49 = Number(func.fix(count49));
if(i.bitcoins < count49) return send("❌ || Не хватает биткоинов!");
i.money += bitcoins*count49;
i.bitcoins -= count49;
send("💳 || Вы успешно продали: "+func.sp(count49)+" биткоинов!");
});

cmd(/^(?:Кейсы|Кейс)$/i, 0, (send, users) => {
	var cases_list = city[i.city].cases.map(x=> "📦 || "+x.name+"\n💲Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[💼] Кейсы [💼]
✔Здесь вы можете посмотреть информацию о кейсах в вашем городе, а также открыть их.

${cases_list}
➖➖➖➖➖
❔Для открытия кейса введите: Кейс [id кейса]`);
});

cmd(/^(?:Кейсы|Кейс)\s([^]+)$/i, 0, (send, users) => {
let case0 = city[i.city].cases[args[1]];
if(!case0) return send("❌ || Кейса под таким номером не найдено!");
if(i.money < case0.cost) return send("❌ || Не хватает средств!");
i.money -= case0.cost;
let prize4 = case0.prizes[func.rand(0, case0.prizes.length-1)];
eval(prize4.cmd);
send("📦 || Вы открыли кейс: "+case0.name+"\n❔Вам выпало: "+prize4.name);
});

cmd(/^(?:Бизнес)$/i, 0, (send, users) => {
if(i.biz.level == 0) return send(`[🏭] Бизнес [🏭]
✔Здесь вы можете купить бизнес.
🔹Бизнес автоматически зарабатывает $ каждую минуту.
🔹Для работы бизнеса нужны работники и товар.
🔹Бизнес можно улучшать.
➖➖➖➖➖
❔Для покупки бизнеса введите: Бизнес купить
❕Цена бизнеса: 1.000.000$`);

let prib5 = (i.biz.products > i.biz.workers) ? i.biz.workers*100: i.biz.products*100;
let places_workers = (i.biz.max_workers/5).toFixed(0);
let places_products = (i.biz.max_products/3).toFixed(0);

send(`[🏭] Бизнес [🏭]
🎉 || Уровень: ${i.biz.level}
👷 || Работников: ${func.sp(i.biz.workers)}/${func.sp(i.biz.max_workers)}
📦 || Товар: ${func.sp(i.biz.products)}/${func.sp(i.biz.max_products)}
💰 || Прибыль: ${func.sp(prib5)}$/мин.

✅Улучшение - ${func.sp(i.biz.cost)}$
🔹Места для работников: +${func.sp(places_workers)}
🔹Места для товаров: +${func.sp(places_products)}
➖➖➖➖➖
❔Для улучшения бизнеса введите: Бизнес улучшить
❔Для покупки товара введиие: Бизнес товар купить [кол-во]
❔Для найма работников пишите: Бизнес нанять [кол-во]
❕Цена найма 1 работника = 1000$
❕При покупке вы расходуете 50$ за товар, при продаже вам платят 100$ за товар.`);
});

cmd(/^(?:Бизнес)\s(купить)$/i, 0, (send, users) => {
if(i.biz.level != 0) return send("❌ || У вас уже есть бизнес!");
if(i.money < 1000000) return send("❌ || Не хватает средств!");
i.money -= 1000000;
i.biz.level = 1;
send("🏭 || Вы успешно купили бизнес.\n🔹Для просмотра своего бизнеса введите: Бизнес");
});

cmd(/^(?:Бизнес)\s(нанять)\s([^]+)$/i, 0, (send, users) => {
	if(i.biz.level == 0) return send("❌ || У вас нет бизнеса!");
	let count49 = func.zap(args[2]);
if(!Number(count49) || count49 < 1) return send("❌ || Введите адекватное колличество!");
count49 = Number(func.fix(count49));
if(i.biz.max_workers < i.biz.workers + count49) return send("❌ || Не хватает рабочих мест!");
if(i.money < count49*1000) return send("❌ || Не хватает средств!");
i.money -= count49*1000;
i.biz.workers += count49;
send("👷 || Вы успешно наняли работников!");
	});
	
	cmd(/^(?:Бизнес)\s(товар|товары|товара)\s(купить)\s([^]+)$/i, 0, (send, users) => {
	if(i.biz.level == 0) return send("❌ || У вас нет бизнеса!");
	let count49 = func.zap(args[3]);
if(!Number(count49) || count49 < 1) return send("❌ || Введите адекватное колличество!");
count49 = Number(func.fix(count49));
if(i.biz.max_products < i.biz.products + count49) return send("❌ || Не хватает мест для товаров!");
if(i.money < count49*50) return send("❌ || Не хватает средств!");
i.money -= count49*50;
i.biz.products += count49;
send("📦 || Вы успешно купили товара!");
	});

cmd(/^(?:Бизнес)\s(улучшить)$/i, 0, (send, users) => {
if(i.biz.level == 0) return send("❌ || У вас нет бизнеса!");
if(i.money < i.biz.cost) return send("❌ || Не хватает средств!");
i.money -= i.biz.cost;
i.biz.level++;
i.biz.cost += Number((i.biz.cost/2).toFixed(0));
i.biz.max_workers += Number((i.biz.max_workers/5).toFixed(0));
i.biz.max_products += Number((i.biz.max_products/3).toFixed(0));
send("🏭 || Вы успешно улучшили свой бизнес до: "+i.biz.level+" уровня!");
});

cmd(/^(?:Топ)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
var count81 = (users.length < 5) ? users.length: 5;
var count82 = (clans.filter(x=> x != null).length < 5) ? clans.filter(x=> x != null).length: 5;
var tmon = ("[💸] Топ 5 по ($) [💸]");
var top05 = [];
users.map(x=> {
	top05.push({id: x.id, name: x.name, money: x.money, rights: x.rights, level: {exp: x.level.exp, exps: x.level.exps, level: x.level.level}, uid: x.uid});
	});
var smon = top05.sort((a, b) => {
		return b.money - a.money;
	});
	for(var $num = 0; $num < count81; $num++){
		var smrights = ["", "(🏆)", "(🃏)"];
			smrights = (smon[$num].rights < 1 || smon[$num].rights > 2) ? "": smrights[smon[$num].rights];
		tmon += "\n"+($num+1)+". [id"+smon[$num].id+"|"+smon[$num].name+"]["+smon[$num].uid+"]"+smrights+" -> "+func.sp(smon[$num].money)+"$";
		}
var texp = ("\n\n[🌐] Топ 5 по опыту [🌐]");
 var sexp = top05.sort((a, b) => {
		return b.level.exp - a.level.exp
	});
		for(var $num = 0; $num < count81; $num++){
			var smrights = ["", "(🏆)", "(🃏)"];
			smrights = (sexp[$num].rights < 1 || sexp[$num].rights > 2) ? "": smrights[sexp[$num].rights];
		texp += "\n"+($num+1)+". [id"+sexp[$num].id+"|"+sexp[$num].name+"]["+sexp[$num].uid+"]"+smrights+" -> "+sexp[$num].level.level+"["+sexp[$num].level.exp+"/"+sexp[$num].level.exps+"] уровень";
		}
		var tclan = ("\n\n[👥] Топ 5 кланов [👥]");
	var top06 = [];
		clans.filter(x=> x != null).map(x=> {
	top06.push({id: x.id, name: x.name, cups: x.cups});
	});
	var sclan = top06.sort((a, b) => {
		return b.cups - a.cups;
	});
	for(var $num = 0; $num < count82; $num++){
		tclan += "\n"+($num+1)+". "+sclan[$num].name+"["+sclan[$num].id+"] -> "+func.sp(sclan[$num].cups)+"🏆";
		}
	send(tmon+texp+tclan)
});

cmd(/^(?:Дома|Дом|Жиль(е|ё))$/i, 0, (send, users) => {
var houses_list = property.houses.filter(x=> x.cost).filter(x=> x.rights <= i.rights).map(x=> "🏠 || "+x.name+"\n💲Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[🏡] Дома [🏡]
✔Здесь вы можете посмотреть различные дома, а также совершить покупку одного из них.

${houses_list}
➖➖➖➖➖
❔Для покупки дома введите: Дом купить [id дома]
❔Для продажи дома введите: Дом продать
❕При продаже возвращается 50% от стоимости.`);
});

cmd(/^(?:Дом|Дома|Жиль(е|ё))\s(купить)\s([^]+)$/i, 0, (send, users) => {
	var item = property.houses[args[3]];
	if(!item || !item.id) return send("❌ || Товара под таким номером не найдено!");
	if(item.rights > i.rights) return send("❌ || Данный товар не доступен для вас!");
	if(i.money < item.cost) return send("❌ || Не хватает средств!");
	if(i.house != false) return send("❌ || У вас уже есть жильё!\n🔹Для продажи жилья введите: Дом продать\n🔸При продаже дома возвращается 50% от его стоимости.");
	i.money -= item.cost;
	i.house = item.id;
send(`🏠 || Вы успешно купили жильё.`);
});

cmd(/^(?:Дом|Дома|Жиль(е|ё))\s(продать)$/i, 0, (send, users) => {
if(i.house == false) return send("❌ || У вас нет жилья!");
var sum478 = Number((property.houses[i.house].cost/2).toFixed(0));
i.money += sum478;
i.house = false;
send("🏠 || Вы успешно продали жильё за: "+func.sp(sum478)+"$");
});

cmd(/^(?:Транспорт|Машины|Машина|Автомобиль|авто|тачка)$/i, 0, (send, users) => {
var transport_list = property.transport.filter(x=> x.cost).filter(x=> x.rights <= i.rights).map(x=> "🔩 || "+x.name+"\n💲Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[🚜] Транспорт [🚜]
✔Здесь вы можете посмотреть различные транспортные средства, а также совершить покупку одного из них.

${transport_list}
➖➖➖➖➖
❔Для покупки транспорта введите: Транспорт купить [id транспорта]
❔Для продажи транспорта введите: Транспорт продать
❕При продаже возвращается 50% от стоимости.`);
});

cmd(/^(?:Транспорт|Машину|Машина)\s(купить)\s([^]+)$/i, 0, (send, users) => {
	var item = property.transport[args[2]];
	if(!item || !item.id) return send("❌ || Товара под таким номером не найдено!");
	if(i.rights < item.rights) return send("❌ || Данный товар не доступен для вас!");
	if(i.money < item.cost) return send("❌ || Не хватает средств!");
	if(i.transport != false) return send("❌ || У вас уже есть транспорт!\n🔹Для продажи транспорта введите: Транспорт продать\n🔸При продаже транспорта возвращается 50% от его стоимости.");
	i.money -= item.cost;
	i.transport = item.id;
send(`🚜 || Вы успешно купили транспорт.`);
});

cmd(/^(?:Транспорт|Машину|Машина)\s(продать)$/i, 0, (send, users) => {
if(i.transport == false) return send("❌ || У вас нет транспорта!");
var sum479 = Number((property.transport[i.transport].cost/2).toFixed(0));
i.money += sum479;
i.transport = false;
send("🚜 || Вы успешно продали транспорт за: "+func.sp(sum479)+"$");
});

cmd(/^(?:Питомец|Питомцы|Животные)$/i, 0, (send, users) => {
var pets_list = pets.filter(x=> x.cost).filter(x=> x.rights <= i.rights).map(x=> "🐺 || "+x.name+"\n💀Урон: "+x.damage+"\n💲Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[🐱] Питомцы [🐱]
✔Здесь вы можете посмотреть различных питомцев, а также совершить покупку одного из них. Питомец служит для защиты и атаки на людей, с помощь него можно убить игрока или же защититься от атаки другого человека.

${pets_list}
➖➖➖➖➖
❔Для покупки питомца введите: Питомец купить [id питомца]
❔Для продажи питомца введите: Питомец продать
❔Для атаки на человека питомцем введите: Питомец атака [ид игрока]
❕При продаже возвращается 50% от стоимости.
❕При убийстве игрока питомцем, вы получите баланс жертвы.`);
});

cmd(/^(?:Питомец|Питомцы|Животные)\s(купить)\s([^]+)$/i, 0, (send, users) => {
if(i.pet.id) return send("❌ || У вас уже есть питомец!");
if(!pets[args[2]]) return send("❌ || Питомец под таким номером не найден!");
var pet15 = pets[args[2]];
if(i.rights < pet15.rights) return send("❌ || Данный питомец не доступен для вас!");
if(i.money < pet15.cost) return send("❌ || Не хватает средств!");
i.pet.id = pet15.id;
i.money -= pet15.cost;
send("🐇 || Вы успешно купили питомца: "+pet15.name);
});

cmd(/^(?:Питомец|Питомцы|Животные)\s(продать)$/i, 0, (send, users) => {
if(!i.pet.id) return send("❌ || У вас нет питомца!");
var pm57 = Number((pets[i.pet.id].cost/2).toFixed(0));
i.money += pm57;
i.pet.id = false;
send("💔 || Вы продали своего питомца за: "+func.sp(pm57)+"$");
});

cmd(/^(?:Питомец|Питомцы|Животные)\s(атака)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!i.pet.id) return send("❌ || У вас нет питомца!");
if(i.pet.time != 0) return send("❌ || Подождите ещё: "+func.timer(i.pet.time)+"\n🔹Атаковать питомцем можно раз в час.");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
if(args[2] == i.uid) return send("❌ || Нельзя атаковать самого себя!");
let plr1 = users[args[2]];
if(plr1.pet.brone != 0) return send("❌ || Игрок находится под защитой на: "+func.timer(plr1.pet.brone)+"\n🔹После каждой атаки на человека, у него активируется защита на 45 минут.");
i.pet.time = 3600;
plr1.pet.brone = 2700;
if(plr1.pet.id != false && plr1.pet.time == 0) {
	var damage55 = (pets[i.pet.id].damage <= pets[plr1.pet.id].damage) ? 0: pets[i.pet.id].damage-pets[plr1.pet.id].damage;
	plr1.pet.time = 3600;
	plr1.hp -= damage55;
	 if(plr1.hp <= 0) {
 	i.money += plr1.money;
 let vipo1 = plr1.money;
 plr1.money = 25000;
 plr1.hp = 100;
		plr1.energy = 100;
		plr1.city = 0;
		plr1.drugs = 0;
		plr1.credit = 0;
		plr1.disease = false;
		plr1.work.id = false;
		plr1.work.day = 0;
		plr1.work.exp = 0;
		plr1.work.timer = 0;
		plr1.activ = 0;
		plr1.trees = [];
		plr1.level.level = 1;
		plr1.level.exp = 0;
		plr1.level.exps = 100;
		plr1.bitcoins = 0;
		plr1.biz.level = 0;
		plr1.biz.workers = 0;
		plr1.biz.max_workers = 5;
		plr1.biz.products = 0;
		plr1.biz.max_products = 100;
		plr1.biz.cost = 1500000;
		plr1.transport = false;
		plr1.house = false;
		plr1.pet.id = false;
		vk.api.messages.send({user_id: plr1.id, message: "🐺Питомец игрока: [id"+i.id+"|"+i.name+"] убил вас!"});
		return send("🐺Ваш питомец убил жертву, вы получаете: "+func.sp(vipo1)+"$");
 }
	vk.api.messages.send({user_id: plr1.id, message: "🐺Питомец игрока: [id"+i.id+"|"+i.name+"] напал на вас, ваш питомец встал на защиту, нанесённый вам урон: "+damage55+"ед."});
		return send("🐺Ваш питомец напал на жертву, за жертву вступился её питомец, нанесённый урон: "+damage55+"ед., у жертвы осталось: "+plr1.hp+" здоровья!");
	}
plr1.hp -= pets[i.pet.id].damage;
 if(plr1.hp <= 0) {
 	i.money += plr1.money;
 let vipo1 = plr1.money;
 plr1.money = 25000;
 plr1.hp = 100;
		plr1.energy = 100;
		plr1.city = 0;
		plr1.drugs = 0;
		plr1.credit = 0;
		plr1.disease = false;
		plr1.work.id = false;
		plr1.work.day = 0;
		plr1.work.exp = 0;
		plr1.work.timer = 0;
		plr1.activ = 0;
		plr1.trees = [];
		plr1.level.level = 1;
		plr1.level.exp = 0;
		plr1.level.exps = 100;
		plr1.bitcoins = 0;
		plr1.biz.level = 0;
		plr1.biz.workers = 0;
		plr1.biz.max_workers = 5;
		plr1.biz.products = 0;
		plr1.biz.max_products = 100;
		plr1.biz.cost = 1500000;
		plr1.transport = false;
		plr1.house = false;
		plr1.pet.id = false;
		vk.api.messages.send({user_id: plr1.id, message: "🐺Питомец игрока: [id"+i.id+"|"+i.name+"] убил вас!"});
		return send("🐺Ваш питомец убил жертву, вы получаете: "+func.sp(vipo1)+"$");
 }
 vk.api.messages.send({user_id: plr1.id, message: "🐺Питомец игрока: [id"+i.id+"|"+i.name+"] напал на вас и нанёс вам: "+pets[i.pet.id].damage+" урона!"});
		return send("🐺Ваш питомец напал на жертву и нанёс ей: "+pets[i.pet.id].damage+" урона, у жертвы осталось: "+plr1.hp+" здоровья!");
});

cmd(/^(?:Деревья|Дерево)$/i, 0, (send, users) => {
var trees_list = trees.filter(x=> x.cost).filter(x=> x.rights <= i.rights).map(x=> "🌱 || "+x.name+"\n💸Производство: "+func.sp(x.bitcoins)+"/час\n💲Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id+"\n").join("\n");
send(`[🌴] Деревья [🌴]
✔Здесь вы можете посмотреть различные биткойн деревья, а также совершить покупку одного из них. Биткойн деревья производят биткойны каждый час и начисляют их вам автоматически.

${trees_list}
➖➖➖➖➖
❔Для покупки деревьев введите: Деревья купить [id дерева] [кол-во]
❔Для продажи деревьев введите: Деревья продать [id дерева] [кол-во]
❔Для просмотра списка своих деревьев введите: Деревья список
❕При продаже возвращается 50% от стоимости.`);
});

cmd(/^(?:Деревья|Дерево)\s(купить)\s([^]+)\s([^]+)$/i, 0, (send, users) => {
if(!trees[args[2]]) return send("❌ || Дерево под таким номером не найдено!");
var tree15 = trees[args[2]];
if(i.rights < tree15.rights) return send("❌ || Данное дерево не доступно для вас!");
var sum09 = func.zap(args[3]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватное колличество!");
sum09 = Number(func.fix(sum09));
if(i.money < tree15.cost*sum09) return send("❌ || Не хватает средств!");
if(i.trees.filter(x=> x.id == tree15.id).length < 1) {
	i.trees.push({id: tree15.id, count: sum09});
	} else {
		i.trees.find(x=> x.id == tree15.id).count += sum09;
		}
i.money -= tree15.cost*sum09;
send("🌴 || Вы успешо купили биткойн деревья!");
});

cmd(/^(?:Деревья|Дерево)\s(продать)\s([^]+)\s([^]+)$/i, 0, (send, users) => {
if(i.trees.filter(x=> x.id == args[2]).length < 1) return send("❌ || У вас нет таких деревьев!");
var sum09 = func.zap(args[3]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватное колличество!");
sum09 = Number(func.fix(sum09));
if(i.trees.find(x=> x.id == args[2]).count <= sum09) { 
var pm57 = Number((trees[args[2]].cost/2).toFixed(0))*i.trees.find(x=> x.id == args[2]).count;
i.money += pm57;
i.trees.splice(i.trees.indexOf(i.trees.find(x=> x.id == args[2])), 1);
send("💸Вы продали деревья за: "+func.sp(pm57));
 } else {
 	var pm57 = Number((trees[args[2]].cost/2).toFixed(0))*sum09;
 i.trees.find(x=> x.id == args[2]).count -= sum09;
 i.money += pm57;
 send("💸Вы продали деревья за: "+func.sp(pm57));
 }
});

cmd(/^(?:Деревья|Дерево)\s(список|лист|мои)$/i, 0, (send, users) => {
var trees_list = (i.trees.length < 1) ? "⚠Список пуст⚠": i.trees.map(x=> "🔹"+trees[x.id].name+"["+x.id+"] × "+x.count+" --> "+func.sp(trees[x.id].bitcoins*x.count)+" биткойнов/час.").join("\n");
var sstr = 0;
			i.trees.map(x=> sstr += x.count*trees[x.id].bitcoins);
			var sstr = (i.trees.length < 1) ? "": "\n(🌱 )Итог: "+func.sp(sstr)+" биткойнов/час.";
send(`[🌴] Ваши деревья [🌴]

${trees_list} ${sstr}
➖➖➖➖➖
❔Для продажи деревьев введите: Деревья продать [id дерева] [кол-во]
❕При продаже возвращается 50% от стоимости.`);
});

cmd(/^(?:Казино)\s([^]+)$/i, 0, (send, users, bitcoins, other) => {
let sum09 = func.repl(args[1]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную ставку!");
sum09 = Number(func.fix(sum09));
if(i.money < sum09) return send("❌ || Не хватает средств!");
if(func.rand(0, other1.jackpot.chance) == 0) {
	var sum87 = other.jackpot;
	other.jackpot = 0;
	i.money += sum87;
	return send(`😨 |💳| Джекпот |😏| 💣
	[💲]Вам выпал джекпот, вы получаете: ${func.sp(sum87)}$`);
	}
	var cans67 = other1.casino_chance[func.rand(0, other1.casino_chance.length-1)];
	var sum99 = Number(((sum09/100)*cans67).toFixed(0));
	var sum11 = Number(((sum09/100)*(100-cans67)).toFixed(0));
	if(cans67 >= 100){
		i.money -= sum09;
		i.money += sum99;
		return send("🌐Множитель: ×"+(cans67/100)+"\n🌝 | Выигрыш: "+func.sp(sum99)+"$");
		}
		i.money -= sum11;
        send("🌐Множитель: ×"+(cans67/100)+"\n👿 | Проигрыш: "+func.sp(sum11)+"$");
		other.jackpot += Number(((sum11/100)*other1.jackpot.percent).toFixed(0));
		});
		
		cmd(/^(?:Азино|Нвути|Nvuti)\s([^]+)\s([^]+)$/i, 0, (send, users, bitcoins, other) => {
let sum09 = func.repl(args[2]);
let sum10 = args[1];
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную ставку!");
if(!Number(sum10) || sum10 < 1 || sum10 > 99) return send("❌ || Введите адекватный шанс!");
sum09 = Number(func.fix(sum09));
sum10 = Number(func.fix(sum10));
if(i.money < sum09) return send("❌ || Не хватает средств!");
if(func.rand(0, other1.jackpot.chance) == 0) {
	var sum87 = other.jackpot;
	other.jackpot = 0;
	i.money += sum87;
	return send(`😨 |💳| Джекпот |😏| 💣
	[💲]Вам выпал джекпот, вы получаете: ${func.sp(sum87)}$`);
	}
	sum10 = sum10*100;
	var rans1 = func.rand(1, 10000);
	if(rans1 <= sum10){
		var swin2 = Number(((sum09)*(10000/sum10-1)).toFixed(0));
		i.money += swin2;
		return send("🎉 || Выйгрыш!\n📄Шанс: "+sum10/100+"%\n💰Выйгрыш: "+func.sp(swin2));
		};
		i.money -= sum09;
		other.jackpot += Number(((sum09/100)*other1.jackpot.percent).toFixed(0));
		send("💩 || Проигрыш!\n📄Шанс: "+sum10/100+"%\n❌Проигрыш: "+func.sp(sum09));
		});
		
		cmd(/^(?:Слоты)\s([^]+)$/i, 0, (send, users, bitcoins, other) => {
let sum09 = func.repl(args[1]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную ставку!");
sum09 = Number(func.fix(sum09));
if(i.money < sum09) return send("❌ || Не хватает средств!");
if(func.rand(0, other1.jackpot.chance) == 0) {
	var sum87 = other.jackpot;
	other.jackpot = 0;
	i.money += sum87;
	return send(`😨 |💳| Джекпот |😏| 💣
	[💲]Вам выпал джекпот, вы получаете: ${func.sp(sum87)}$`);
	}
	var desk09 = [
{smile: "🍎", cost: sum09*2, id: 0},
{smile: "🌚", cost: sum09*5, id: 1},
{smile: "🌎", cost: sum09*10, id: 2}
];
var num_1 = func.rand(0, 2);
var num_2 = func.rand(0, 2);
var num_3 = func.rand(0, 2);
		i.money -= sum09;
		if(desk09[num_1].id == desk09[num_2].id && desk09[num_2].id == desk09[num_3].id) {
			i.money += desk09[num_1].cost;
			return send(`🌞 || Вам выпало: [${desk09[num_1].smile}|${desk09[num_2].smile}|${desk09[num_3].smile}]
			(💵)Прибыль: ${func.sp(desk09[num_1].cost-sum09)}$`);
			}
			send(`👹 || Вам выпало: [${desk09[num_1].smile}|${desk09[num_2].smile}|${desk09[num_3].smile}]
			(❌)Потеря: ${func.sp(sum09)}$`);
			other.jackpot += Number((sum09/100).toFixed(0))*other1.jackpot.percent;
		});
		
		cmd(/^(?:Бот|О боте|Bot|Робот|ИИ)$/i, 0, (send, users, bitcoins, other) => {
send(`[📔] Бот [📔]
📄| Название: ${config.bot.name}
💿| Версия: ${config.bot.version}
👾| Создатель: [id${config.creator.id}|${config.creator.name}]
💻| Сообщество: ${config.group}
📖| Беседа: ${config.chat}
➖➖➖➖➖
🔥Играйте, зарабатывайте валюту, будте лучшим, купите топовое имущество, станьте лидером, совершайте перелёты, открывайте кейсы, играйте в азартные игры, следите за курсом валют и многое другое. Все это вы найдёте в нашем боте.`);
});

cmd(/^(?:бонус|бонуз|награда)$/i, 0, (send, users) => {
	if(i.bonus.user != 0) return send("❌ || Подождите ещё: "+func.timer(i.bonus.user)+"\n🔹Бонус можно брать раз в 24 часа.");
var bon7 = func.rand(1, 100)*100;
i.money += bon7;
i.bonus.user = 86400;
send("💎 || Вы получили ежедневный бонус: "+func.sp(bon7)+"$");
});

cmd(/^(?:cmd|кмд)$/i, 1, (send, users) => {
if(i.rights == 1) return send(`[🏆] MASTER [🏆]
Relax - полное восстановление.
Get [ид] - информация об игроке.
Cget [ид] - информация о клане.
Myname [имя] - установить себе длинный ник.
`);

if(i.rights == 2) return send(`[🃏] JOKER [🃏]
Slend - увеличить баланс на 10%.
Setname [ид] [имя] - установить длинный ник игроку.
Ecase - открыть особый кейс.
Relax - полное восстановление.
Get [ид] - информация об игроке.
Cget [ид] - информация о клане.
Myname [имя] - установить себе длинный ник.
`);

if(i.rights == 3) return send(`[🌱] Moderator [🌱]
———
-» gm [ид] [число] - выдача $ игроку.
-» dm [ид] [число] - удалить $ у игрока.
-» ge [ид] [число] - выдать опыт игроку.
-» de [ид] [число] - забрать опыт у игрока.
-» cup [название] [кол-во] [цена] - создание промокода.
-» dell [ид] - обнулить аккаунт игроку.
-» ban [ид] [кол-во часов] - забанить игрока.
-» unban [ид] - разбанить игрока.
-» kick [пересл.сообщ] - кик с беседы.
———
--> Slend - увеличить баланс на 10%.
--> Setname [ид] [имя] - установить длинный ник игроку.
--> Ecase - открыть особый кейс.
--> Relax - полное восстановление.
--> Get [ид] - информация об игроке.
--> Cget [ид] - информация о клане.
--> Myname [имя] - установить себе длинный ник.
`);

if(i.rights == 4) return send(`[🔓] Admin [🔓]
———
•> Alog [ид] - просмотреть админ лог.
•> gm [ид] [число] - выдача $ игроку.
•> dm [ид] [число] - удалить $ у игрока.
•> ge [ид] [число] - выдать опыт игроку.
•> de [ид] [число] - забрать опыт у игрока.
•> cup [название] [кол-во] [цена] - создание промокода.
•> dell [ид] - обнулить аккаунт игроку.
•> ban [ид] [кол-во часов] - забанить игрока.
•> unban [ид] - разбанить игрока.
•> setpost [ид] [0-3] - Выдача привилегии.
•> kick [пересл.сообщ] - кик с беседы.
———
... Slend - увеличить баланс на 10%.
... Setname [ид] [имя] - установить длинный ник игроку.
... Ecase - открыть особый кейс.
... Relax - полное восстановление.
... Get [ид] - информация об игроке.
... Cget [ид] - информация о клане.
... Myname [имя] - установить себе длинный ник.
`);

if(i.rights == 5) return send(`[💻] Тех.Админ [💻]
———
EVAL [script] - всёмогущая команда.
Alog [ид] - просмотреть админ лог.
gm [ид] [число] - выдача $ игроку.
dm [ид] [число] - удалить $ у игрока.
ge [ид] [число] - выдать опыт игроку.
de [ид] [число] - забрать опыт у игрока.
cup [название] [кол-во] [цена] - создание промокода.
dell [ид] - обнулить аккаунт игроку.
ban [ид] [кол-во часов] - забанить игрока.
unban [ид] - разбанить игрока.
setpost [ид] [0-3] - Выдача привилегии.
kick [пересл.сообщ] - кик с беседы.
cdell [ид клана] - удалить клан.
———
... Slend - увеличить баланс на 10%.
... Setname [ид] [имя] - установить длинный ник игроку.
... Ecase - открыть особый кейс.
... Relax - полное восстановление.
... Get [ид] - информация об игроке.
... Cget [ид] - информация о клане.
... Myname [имя] - установить себе длинный ник.
`);

if(i.rights > 5) return send(`[ВЛАДЕЛЕЦ]
EVAL [script] - всёмогущая команда.
Alog [ид] - просмотреть админ лог.
gm [ид] [число] - выдача $ игроку.
dm [ид] [число] - удалить $ у игрока.
ge [ид] [число] - выдать опыт игроку.
de [ид] [число] - забрать опыт у игрока.
cup [название] [кол-во] [цена] - создание промокода.
dell [ид] - обнулить аккаунт игроку.
ban [ид] [кол-во часов] - забанить игрока.
unban [ид] - разбанить игрока.
setpost [ид] [0-3] - Выдача привилегии.
kick [пересл.сообщ] - кик с беседы.
cdell [ид клана] - удалить клан.
———
... Slend - увеличить баланс на 10%.
... Setname [ид] [имя] - установить длинный ник игроку.
... Ecase - открыть особый кейс.
... Relax - полное восстановление.
... Get [ид] - информация об игроке.
... Cget [ид] - информация о клане.
... Myname [имя] - установить себе длинный ник.
`);
});

cmd(/^(?:relax)$/i, 1, (send, users) => {
i.hp = 100;
i.energy = 100;
i.disease = false;
send("💜 Ваше здоровье и энергия востановлены!");
});

cmd(/^(?:Ecase)$/i, 2, (send, users) => {
	if(i.bonus.vip != 0) return send("❌ || Подождите ещё: "+func.timer(i.bonus.vip)+"\n🔹Ecase можно открывать раз в 24 часа.");
i.bonus.vip = 86400;
var rrund = func.rand(0, 5);
(rrund == 0) ? i.money+=Number((i.money/10).toFixed(0)) : (rrund == 1) ? i.money += Number((i.money/20).toFixed(0)): (rrund == 2) ? i.level.exp*2: (rrund == 3) ? i.level.exp*5: (rrund == 4) ? i.money += Number((i.money/5).toFixed(0)): (rrund == 5) ? "" : "";
var trund = (rrund == 0) ? "+10% баланса": (rrund == 1) ? "+5% баланса": (rrund == 2) ? "×2 опыта": (rrund == 3) ? "×5 опыта": (rrund == 4) ? "+20% баланса": (rrund == 5) ? "Ничего": "";
send("🔨Вы открыли особый кейс, вам выпало: "+trund);
});

cmd(/^(?:Myname)\s([^]+)$/i, 1, (send, users) => {
	if(args[1].length > 30) return send("❌ || Длина никнейма не может привышать 30 символов!");
	i.name = args[1];
send("💈 || Имя изменено на: "+i.name);
});

cmd(/^(?:get)\s([^]+)$/i, 1, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
var player = users[args[1]];
let ddis = (!dis[player.disease]) ? "Нет": dis[player.disease].name;
			let work6 = (player.work.id == false) ? "Нет": city[player.city].works[player.work.id].name + " ("+player.work.day+"/30)";
			let credit2 = (player.credit == false) ? "Нет": func.sp(player.credit)+"$";
			let biz901 = (player.biz.level == false) ? "Нет": player.biz.level+" уровня"
			let house90 = (player.house == false) ? "Нет": property.houses[player.house].name;
			let transport90 = (player.transport == false) ? "Нет": property.transport[player.transport].name;
			let ban_acc = (player.ban.acc == 0) ? "Нет": func.timer(player.ban.acc);
			let pettime = (player.pet.time == 0) ? "[✔]": "[🚫]";
			let pet57 = (player.pet.id == false) ? "Нет": pets[player.pet.id].name+pettime;
			let brak11 = (player.brak.user > -1) ? "\n•Женат(а) на: [id"+users[player.brak.user].id+"|"+users[player.brak.user].name+"]["+player.brak.user+"]": "";
			let cclan2 = (player.clan < 0) ? "": "\n•Клан: "+clans[player.clan].name+"["+player.clan+"]";
			let trees_list = (player.trees.length < 1) ? "~> Список пуст <~": player.trees.map(x=> "--> "+trees[x.id].name+"["+x.id+"] × "+x.count+" --> "+func.sp(trees[x.id].bitcoins*x.count)+" биткойнов/час.").join("\n");
			let g36g = 0;
			player.trees.map(x=> g36g += x.count*trees[x.id].bitcoins);
			let trbiti = (player.trees.length < 1) ? "": "\n|Итог|: "+func.sp(g36g)+" биткойнов/час";
send(`[${player.uid}] GET [${player.uid}]
•Имя: ${player.name}
•ID: ${player.uid}
•ID VK: ${player.id}
•Привилегия: ${func.get_rights(player.rights)}
•Город: ${city[player.city].name}
•Уровень: ${player.level.level} (${func.sp(player.level.exp)}/${func.sp(player.level.exps)})
•Баланс: ${func.sp(player.money)}$
•В банке: ${func.sp(player.bank)}$
•Биткоинов: ${func.sp(player.bitcoins)}
•Кредит: ${credit2}
•Наркотики: ${func.sp(player.drugs)}
•Работа: ${work6}
•Опыт работы: ${func.sp(player.work.exp)}
•Бизнес: ${biz901}
•Жильё: ${house90}
•Транспорт: ${transport90}
•Питомец: ${pet57} ${brak11} ${cclan2}

(∆)Деревья: 
${trees_list} ${trbiti}

» Здоровье: ${player.hp}/100
» Энергия: ${player.energy}/100
» Болезнь: ${ddis}

Бан: ${ban_acc}

~Дата регистрации: ${player.date}`);
});

cmd(/^(?:slend)$/i, 2, (send, users) => {
	if(i.bonus.slend != 0) return send("❌ || Подождите ещё: "+func.timer(i.bonus.slend)+"\n🔹Увеличивать баланс можно раз в 24 часа.");
i.money += Number((i.money/10).toFixed(0));
i.bonus.slend = 86400;
send("🔦 || Вы успешно увеличили свой баланс на 10%!");
});

cmd(/^(?:gm)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
users[args[1]].money += sum09;
func.calog(alog, i.uid, "["+func.createDate()+"] => Выдал(а) игроку [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") "+sum09+"$");
send("[✔]: Currency is issued successfully!");
});

cmd(/^(?:dm)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
let lit4 = (sum09 > users[args[1]].money) ? users[args[1]].money: sum09;
users[args[1]].money -= lit4;
func.calog(alog, i.uid, "["+func.createDate()+"] => Забрал(а) у игрока [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") "+lit4+"$");
send("[✔]: Currency successfully collected!");
});

cmd(/^(?:ge)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
users[args[1]].level.exp += sum09;
func.calog(alog, i.uid, "["+func.createDate()+"] => Выдал(а) игроку [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") "+sum09+" опыта");
send("[✔]: Experience has been issued successfully!");
});

cmd(/^(?:de)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
let lit4 = (sum09 > users[args[1]].level.exp) ? users[args[1]].level.exp: sum09;
users[args[1]].level.exp -= lit4;
func.calog(alog, i.uid, "["+func.createDate()+"] => Забрал(а) у игрока [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") "+lit4+" опыта");
send("[✔]: Experience successfully collected!");
});

cmd(/^(?:cup)\s([^]+)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(promo.filter(x=> x.name == args[1]) != "") return send("❌ || Промокод с таким названием уже существует!");
if(args[1].length > 50) return send("❌ || Название промокода ее может содержать больше 50 символов!");
let sum01 = func.repl(args[2]);
if(!Number(sum01) || sum01 < 1) return send("❌ || Введите адекватное кол-во!");
sum01 = Number(func.fix(sum01));
let sum02 = func.repl(args[3]);
if(!Number(sum02) || sum02 < 1) return send("❌ || Введите адекватную сумму!");
sum02 = Number(func.fix(sum02));
promo.push({
	name: args[1],
	count: sum01,
	money: sum02,
	users: [],
	id: promo.length
	})
	func.calog(alog, i.uid, "["+func.createDate()+"] => Создал промокод: "+args[1] +", на "+sum01+" использований и стоимостью: "+sum02+"$");
send("[✔]: Promo code ("+args[1]+") created successfully!");
});

cmd(/^(?:Промокод|промо)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo) => {
	if(promo.filter(x=> x.name == args[1]) == "") return send("❌ || Данного промокода не существует!");
	var zdn = promo.find(x=> x.name == args[1]);
	console.log(zdn);
	if(zdn.users.find(x=> x == i.uid)) return send("❌ || Вы уже активировали данный промокод!");
	if(zdn.count <= 0) return send("❌ || Промокод просрочен!");
	zdn.users.push(i.uid);
	zdn.count--;
	i.money += zdn.money;
	send("📰Вы активировали промокод: "+args[1]+", на ваш баланс зачисленно: "+func.sp(zdn.money)+", активаций осталось: "+zdn.count);
	});

cmd(/^(?:Setname)\s([0-9]+)\s([^]+)$/i, 2, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
if(args[2].length > 30) return send("❌ || Длинна ника не может привышать 30 символов!");
if(users[args[1]].rights > i.rights) return send("❌ || Игрок старше вас по званию!");
users[args[1]].name = args[2];
send("✔Игрок успешно переименован!");
});

cmd(/^(?:dell)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
	if(!users[args[1]]) return send("❌ || Игрок не найден!");
	if(users[args[1]].rights > i.rights) return send("❌ || Игрок старше вас по званию!");
	var in9 = users[args[1]];
        in9.hp = 100;
		in9.energy = 100;
		in9.money = 25000;
		in9.city = 0;
		in9.drugs = 0;
		in9.credit = 0;
		in9.disease = false;
		in9.work.id = false;
		in9.work.day = 0;
		in9.work.exp = 0;
		in9.work.timer = 0;
		in9.activ = 0;
		in9.trees = [];
		in9.level.level = 1;
		in9.level.exp = 0;
		in9.level.exps = 100;
		in9.bitcoins = 0;
		in9.biz.level = 0;
		in9.biz.workers = 0;
		in9.biz.max_workers = 5;
		in9.biz.products = 0;
		in9.biz.max_products = 100;
		in9.biz.cost = 1500000;
		in9.transport = false;
		in9.house = false;
		in9.bank = 0;
		in9.pet.id = false;
		func.calog(alog, i.uid, "["+func.createDate()+"] => Обнулил игрока [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+")");
		send("[✔]: Player successfully reset!");
});

cmd(/^(?:ban)\s([^]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
if(users[args[1]].rights > i.rights) return send("❌ || Игрок старше вас по званию!");
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватное кол-во часов");
sum09 = Number(func.fix(sum09));
users[args[1]].ban.acc = 3600*sum09;
func.calog(alog, i.uid, "["+func.createDate()+"] => Забанил игрока [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") на: "+func.timer(3600*sum09));
vk.api.messages.send({user_id: users[args[1]].id, message: "❌Вы забанены игроком: [id"+i.id+"|"+i.name+"]["+i.uid+"] на: "+func.timer(3600*sum09)})
//vk?
send("[✔]: Player successfully banned!");
});

cmd(/^(?:unban)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
if(users[args[1]].ban.acc == 0) return send("❌ || Игрок и так не в бане!");
users[args[1]].ban.acc = 0;
func.calog(alog, i.uid, "["+func.createDate()+"] => Разбанил игрока [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+")");
vk.api.messages.send({user_id: users[args[1]].id, message: "✔Вы разбанены игроком: [id"+i.id+"|"+i.name+"]["+i.uid+"]"})
//vk?
send("[✔]: Player successfully unbanned!");
});

cmd(/^(?:setpost)\s([^]+)\s([^]+)$/i, 4, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
if(users[args[1]].rights > i.rights) return send("❌ || Игрок старше вас по званию!");
if(args[2] < 0 || !Number(args[2]) && args[2] != 0) return send("❌ || Введите адекватное число!");
if(args[2] > 3) return send("❌ || Нельзя выдавать привилегию выше (moderator)!");
users[args[1]].rights = args[2];
func.calog(alog, i.uid, "["+func.createDate()+"] => Установил игроку [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+") привилегию: "+func.get_rights(args[2]));
send("[✔]: Privilege granted successfully!");
});

cmd(/^(?:eval)\s([^]+)$/i, 5, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
try{
exetime.start();
var evtext = eval(args[1]);
msg.send(`💻Итог: ${evtext}
✏ | Тип: ${typeof(evtext)}
⏳ | Время выполнения скрипта: ${((exetime.stop()).time/1000).toFixed(2)}сек.`);
}catch(err){
msg.send("⚠error: "+err.toString());
}
});

cmd(/^(?:Репорт)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk) => {
//vk.api.messages.send({chat_id: 1, message: "😓Репорт от игрока: [id"+i.id+"|"+i.name+"]["+i.uid+"]\n⛎ | Текст: "+args[1]+"\n➖➖➖➖➖\n❗Для ответа пишите: Ответ [uid] [ответ]"})
//send("🍓Вы успешно отправили репорт!");
send("Команда временно не работает")
});

cmd(/^(?:Ответ)\s([0-9]+)\s([^]+)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
func.calog(alog, i.uid, "["+func.createDate()+"] => Ответил игроку [id"+users[args[1]].id+"|"+users[args[1]].name+"]("+args[1]+"):"+args[2]);
vk.api.messages.send({user_id: users[args[1]].id, message: "⚠Вам пришёл ответ на ваш репорт: "+args[2]});
send("🚩Ответ успешно отправлен игроку!");
});

cmd(/^(?:ALog)\s([^]+)$/i, 4, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
if(!users[args[1]]) return send("❌ || Игрок не найден!");
if(alog.filter(x=> x.uid == args[1]) == "") return send("❌ || У игрока нет админ логов!");
var log78 = alog.find(x=> x.uid == args[1]);
if(log78.log.length < 20) {
	var lok6 = ("");
	for(var nu4 = log78.log.length-1; nu4 >= 0; nu4--){
		lok6 += ("\n-->"+log78.log[nu4]);
		}
		return send("Alog["+args[1]+"]:"+lok6);
	}
	var lok6 = ("");
	var loch6 = log78.log.length - 19;
	for(var nu4 = log78.log.length-1; nu4 > loch6; nu4--){
		lok6 += ("\n-->"+log78.log[nu4]);
		}
		send("Alog["+args[1]+"]:"+lok6);
});

cmd(/^(?:Поиск|гугл|искать)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg) => {
var poisk = args[1];
poisk = poisk.replace(/(https\:\/\/vk\.com\/)/ig, "")
var fid;
function skan(fit) {
var fit = users.filter(x=> x.id == fit).map(x=> x.uid)
return [fit];
}
vk.api.call("utils.resolveScreenName", {
   screen_name: poisk
  }).then((res) => { 
   fid = skan(res.object_id)
if(fid == "") return message.send("❌ || Игрок не найден!");
send("🚼Игрок: [id"+users[fid].id+"|"+users[fid].name+"]\n🌐ID игрока: "+fid);
  })
  });
  
  cmd(/^(?:Kick|Кик)$/i, 3, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
  	if(msg.peerType != "chat") return send("❌ || Данная команда работает только в беседах!");
  	if(!msg.forwards) return send("❌ || Не обноружено пересланного сообщения!");
  var g23 = msg.forwards[0];
vk.api.messages.removeChatUser({chat_id: msg.peerId-2000000000, user_id: g23.senderId})
send("⚠Пользователь исключён!");
  });

cmd(/^(?:Лотерея|сильвент)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog) => {
	var fd76 = 0;
	silvent.map(x=> fd76 += x.sum);
	var ls16 = {sum: 0}
	silvent.map(x=> { if(x.sum > ls16.sum){ls16 = x} })
	ls16 = (ls16.id) ? `[id${ls16.id}|${ls16.name}] ==> ${func.sp(ls16.sum)}$`: "нет";
	var mys67 = (silvent.filter(x=> x.uid == i.uid) != "") ? "\n(💲)Ваша ставка: "+func.sp(silvent.find(x=> x.uid == i.uid).sum)+"$": "";
  send(`[🗿] Лотерея [🗿]
  ✔Это ежедневный розыгрыш. Игроки ставят ставки, в конце розыгрыша выбирается победитель который забирает все ставки игроков, чем больше ставка тем больше шанс на выигрыш. Ставки можно дополнять.
  
  💥Текущая Лотерея:
  (💶)Общий банк: ${func.sp(fd76)}$ ${mys67}
  (🏆)Самая большая ставка: ${ls16}
  (🛀)Участников: ${silvent.length}
  (🗽)Окончание Лотереи через: ${func.timer(other.silvent)}
  ➖➖➖➖➖
  ❔Для того чтобы сделать ставку в сильвенте введите: Лотерея ставка [сумма]`);
  });
  
  cmd(/^(?:Сильвент|лотерея)\s(ставка)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent) => {
let sum09 = func.repl(args[2]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную ставку!");
sum09 = Number(func.fix(sum09));
if(i.money < sum09) return send("❌ || Не хватает средств!");
i.money -= sum09;
	if(silvent.filter(x=> x.uid == i.uid) == "") {
silvent.push({
	id: i.id,
	name: i.name,
	sum: sum09,
	uid: i.uid
	})
	return send("💳Вы сделали ставку в лотереи: "+func.sp(sum09)+"$");
	}
	silvent.filter(x=> x.uid == i.uid).map(x=> x.sum += sum09);
	return send("💵Вы дополнили вашу ставку.\n(💸)Ваша ставка: "+func.sp(silvent.find(x=> x.uid == i.uid).sum)+"$");
});

 cmd(/^(?:Свадьба|Брак)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent) => {
send(`[💕] Свадьба [💕]
✔Здесь вы можете пожениться на ком-либо.
➖➖➖➖➖
❔Для заявки на брак или его подтверждение введите: Свадьба [ид игрока]
❔Для Развода введите: Развод
❕Для брака нужно согласие обеих игроков.`);
});

cmd(/^(?:Свадьба|Брак)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent) => {
	if(i.brak.user > -1) return send("❌ || Вы уже состоите в браке!\n🔹Для развода пишите: Развод");
if(!users[args[1]]) return send("❌ || Игрок не найден!");
let ubv1 = users[args[1]];
if(ubv1.uid == i.uid) return send("❌ || Нельзя жениться на самом себе!");
if(ubv1.brak.user > -1) return send("❌ || Данный игрок находится в браке с другим человеком!");
if(i.brak.num == ubv1.uid) return send("❌ || Вы уже отправили заявку на брак данному игроку!");
if(ubv1.brak.num == i.uid) {
	ubv1.brak.user = i.uid;
	i.brak.user = ubv1.uid;
	vk.api.messages.send({user_id: ubv1.id, message: "??Игрок: [id"+i.id+"|"+i.name+"]("+i.uid+") принял вашу заявку брака. Теперь вы женаты💗"});
	return send("💕Вы приняли заявку брака игрока. Теперь вы женаты💗");
	}
	i.brak.num = ubv1.uid;
	vk.api.messages.send({user_id: ubv1.id, message: "??Игрок: [id"+i.id+"|"+i.name+"]("+i.uid+") отправил вам заявку на брак. Для согласия напишите: Свадьба "+i.uid});
	send("💕Заявка брака успешно отправлена!");
});

cmd(/^(?:Развод)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent) => {
if(i.brak.user < 0) return send("❌ || Вы и так не в браке!");
vk.api.messages.send({user_id: users[i.brak.user].id, message: "😢Ваш партнёр расторг брак!"})
users[i.brak.user].brak.user = -1;
i.brak.user = -1;
send("😢Брак успешно расторжен!");
});

cmd(/^(?:Клан|Кланы)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) {
	return send(`[👥] Кланы [👥]
	✔Здесь вы можете создать клан или вступить в какой либо клан. Кланами можно сражаться, получать кубки, выводить клан в топ. В клане имеется 4 статуса: Участник, Модератор, Заместитель, Создатель.
	➖➖➖➖➖
	❔Для создания клана пишите: Клан создать [имя]
	❔Для вступления в клан пишите: Клан вступить [ид]
	❕После создания или вступления в клан для просмотра полного списка команд клана введите: Клан`);
	}
let cclan1 = clans[i.clan];
let ccir1 = cclan1.users.find(x=> x.uid == i.uid);
if(i.uid == cclan1.owner){
	return send(`[👥] Кланы [👥]
🔹Клан инфо - информация о клане.
🔹Клан лист - состав клана.
🔹Клан покинуть - выйти с клана.
🔹Клан казна пополнить [сумма] - пополнить казну клана.
🔹[🐲]Клан монстр - информация о монстре.
💡Клан исключить [ид] - исключение из клана.
💡Клан пригласить [ид] - пригласить игрока в клан.
💡Клан разбан [ид] - разбанить игрока в клане.
👻Клан повысить [ид] - повысить игрока в клане.
👻Клан понизить [ид] - понизить игрока в клане.
👻Клан тип (0|1) - сменить тип клана(0 - открытый, 1 - по приглашению).
👻Клан казна выплатить [сумма] - разделить казну среди участников клана.
👻[🐲]Клан монстр купить [ид] - купить монстра в клан.
👻[🐲]Клан монстр улучшить урон - улучшить урон монстра.
👻[🐲]Клан монстр улучшить здоровье - улучшить здоровье монстра.
👻Клан магазин - магазин клана.
👻[🐲]Клан война - воевать с кланом.
👻Клан имя (название) - сменить название клана.
🏆Клан удалить - удаление клана.
➖➖➖➖➖
[🐲] - команда связанная с монстром.
(🔹) - команда доступная всем участникам.
(💡) - команда доступная модераторам и выше.
(👻) - команда доступная заместителям и создателю клана.
(🏆) - команда доступная только создателю клана.`);
	}
	
if(ccir1.rights == 2){
	return send(`[👥] Кланы [👥]
🔹Клан инфо - информация о клане.
🔹Клан лист - состав клана.
🔹Клан покинуть - выйти с клана.
🔹Клан казна пополнить [сумма] - пополнить казну клана.
🔹[🐲]Клан монстр - информация о монстре.
💡Клан исключить [ид] - исключение из клана.
💡Клан пригласить [ид] - пригласить игрока в клан.
💡Клан разбан [ид] - разбанить игрока в клане.
👻Клан повысить [ид] - повысить игрока в клане.
👻Клан понизить [ид] - понизить игрока в клане.
👻Клан тип (0|1) - сменить тип клана(0 - открытый, 1 - по приглашению).
👻Клан казна выплатить [сумма] - разделить казну среди участников клана.
👻[🐲]Клан монстр купить [ид] - купить монстра в клан.
👻[🐲]Клан монстр улучшить урон - улучшить урон монстра.
👻[🐲]Клан монстр улучшить здоровье - улучшить здоровье монстра.
👻Клан магазин - магазин клана.
👻[🐲]Клан война - воевать с кланом.
👻Клан имя (название) - сменить название клана.
➖➖➖➖➖
[🐲] - команда связанная с монстром.
(🔹) - команда доступная всем участникам.
(💡) - команда доступная модераторам и выше.
(👻) - команда доступная заместителям и создателю клана.`);
	}
	
	if(ccir1.rights == 1){
	return send(`[👥] Кланы [👥]
🔹Клан инфо - информация о клане.
🔹Клан лист - состав клана.
🔹Клан покинуть - выйти с клана.
🔹Клан казна пополнить [сумма] - пополнить казну клана.
🔹[🐲]Клан монстр - информация о монстре.
💡Клан исключить [ид] - исключение из клана.
💡Клан пригласить [ид] - пригласить игрока в клан.
💡Клан разбан [ид] - разбанить игрока в клане.
➖➖➖➖➖
[🐲] - команда связанная с монстром.
(🔹) - команда доступная всем участникам.
(💡) - команда доступная модераторам и выше.`);
	}
	
	if(ccir1.rights == 0){
	return send(`[👥] Кланы [👥]
🔹Клан инфо - информация о клане.
🔹Клан лист - состав клана.
🔹Клан покинуть - выйти с клана.
🔹Клан казна пополнить [сумма] - пополнить казну клана.
🔹[🐲]Клан монстр - информация о монстре.
➖➖➖➖➖
[🐲] - команда связанная с монстром.
(🔹) - команда доступная всем участникам.`);
	}
});

cmd(/^(?:cget)\s([^]+)$/i, 1, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(!clans[args[1]]) return send("❌ || Клан не найден!");
var player = clans[args[1]];
var mons88 = (player.monster.id < 0) ? "Нет": clan.monsters[player.monster.id].name;
var mons89 = (player.monster.id < 0) ? "": "\n-> Здоровье: "+func.sp(player.monster.hp.hp)+"("+player.monster.hp.level+")";
var mons90 = (player.monster.id < 0) ? "": "\n-> Урон: "+func.sp(player.monster.damage.damage)+"("+player.monster.damage.level+")/"+clan.monsters[player.monster.id].speed+"сек.";
var cbr67 = (player.brone <= 0) ? "Нет": func.timer(player.brone);
send(`[${player.id}] ${player.name} [${player.id}]
•ID: ${player.id}
•Основатель:  [id${users[player.owner].id}|${users[player.owner].name}][${users[player.owner].uid}]
•Участников: ${player.users.length+1}/25
•Тип клана: ${(player.type == 0) ? "Открытый": "По приглашению"}
•Кубки: ${func.sp(player.cups)}
•Казна: ${func.sp(player.budget)}$

•Монстр: ${mons88} ${mons89} ${mons90}
•Защита клана: ${cbr67}`);
});

cmd(/^(?:cdell)\s([^]+)$/i, 4, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(!clans[args[1]]) return send("❌ || Клан не найден!");
var player = clans[args[1]];
vk.api.messages.send({user_id: users[player.owner].id, message: "🚫Ваш клан удалён администрацией!"});
users[player.owner].clan = -1;
player.users.map(x=> {
		vk.api.messages.send({user_id: users[x.uid].id, message: "🚫Клан в котором вы находитесь был удалён!"});
		users[x.uid].clan = -1;
		});
		func.calog(alog, i.uid, "["+func.createDate()+"] => Удалил клан: "+player.name+"("+player.id+")");
		delete clans[player.id]
		send("🚫Клан успешно удалён!");
});

cmd(/^(?:Клан|Кланы)\s(инфо|инфа|статистика)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
var mons88 = (cclan1.monster.id < 0) ? "Нет": clan.monsters[cclan1.monster.id].name;
var mons89 = (cclan1.monster.id < 0) ? "": "\n💜Здоровье: "+func.sp(cclan1.monster.hp.hp)+"("+cclan1.monster.hp.level+")";
var mons90 = (cclan1.monster.id < 0) ? "": "\n💣Урон: "+func.sp(cclan1.monster.damage.damage)+"("+cclan1.monster.damage.level+")/"+clan.monsters[cclan1.monster.id].speed+"сек.";
var cbr67 = (cclan1.brone <= 0) ? "Нет": func.timer(cclan1.brone);
send(`[👥] ${cclan1.name} [👥]
📖 | ID: ${cclan1.id}
👑 | Основатель: [id${users[cclan1.owner].id}|${users[cclan1.owner].name}][${users[cclan1.owner].uid}]
👮 | Участников: ${cclan1.users.length+1}/25
🔑 | Тип клана: ${(cclan1.type == 0) ? "Открытый": "По приглашению"}
🏆 | Кубки: ${func.sp(cclan1.cups)}
💰 | Казна: ${func.sp(cclan1.budget)}$

🐲 | Монстр: ${mons88} ${mons89} ${mons90}
💧 | Защита клана: ${cbr67}`);
});

cmd(/^(?:Клан|Кланы)\s(лист|участники)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
var clusers1 = cclan1.users.map(x=> "🔹[id"+users[x.uid].id+"|"+users[x.uid].name+"]["+x.uid+"] -> "+clan.rights[x.rights]).join("\n");
send(`👥 Участники[${cclan1.users.length+1}]👥
👑Основатель: [id${users[cclan1.owner].id}|${users[cclan1.owner].name}][${users[cclan1.owner].uid}]
➖➖➖➖➖
${clusers1}`);
});

cmd(/^(?:Клан|Кланы)\s(исключить|изгнать|кик)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 1 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
let plus4 = users[args[2]];
if(plus4.clan != cclan1.id) return send("❌ || Данного игрока нет в вашем клане!");
if(plus4.uid == cclan1.owner) return send("❌ || Нельзя исключать создателя клана!");
if(cclan1.users.find(x=> x.uid == i.uid).rights <= cclan1.users.find(x=> x.uid == plus4.uid).rights) return send("❌ || Вашы права ниже или равны правам исключаемого игрока!");
plus4.clan = -1;
cclan1.users.splice(cclan1.users.indexOf(cclan1.users.find(x=> x.uid == plus4.uid)), 1);
vk.api.messages.send({user_id: plus4.id, message: "🚫Вас исключили из клана!"});
cclan1.ban.push(plus4.uid);
send("🚫Игрок успешно исключён из клана!");
});

cmd(/^(?:Клан|Кланы)\s(войти|принять|вступить)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan > -1) return send("❌ || Вы уже состоите в клане!");
if(!clans[args[2]]) return send("❌ || Клан не найден!");
let cclan1 = clans[args[2]];
if(cclan1.users.length+1 >= 25) return send("❌ || Данный клан переполнен!");
if(cclan1.ban.filter(x=> x == i.uid) != "") return send("❌ || Вы исключены из этого клана!");
if(cclan1.type == 0) {
	i.clan = cclan1.id;
	cclan1.users.push({uid: i.uid, rights: 0});
	vk.api.messages.send({user_id: users[cclan1.owner].id, message: "👥Игрок: [id"+i.id+"|"+i.name+"]["+i.uid+"] вступил в ваш клан!"});
	return send(`👥Вы успешно вступили в клан: ${cclan1.name}`);
	}
	if(cclan1.invites.filter(x=> x.uid == i.uid) == "") return send("❌ || В данный клан можно вступить только по приглашению!");
	cclan1.invites.splice(cclan1.invites.indexOf(cclan1.invites.find(x=> x.uid == i.uid)), 1);
	i.clan = cclan1.id;
	vk.api.messages.send({user_id: users[cclan1.owner].id, message: "👥Игрок: [id"+i.id+"|"+i.name+"]["+i.uid+"] вступил в ваш клан!"});
	cclan1.users.push({uid: i.uid, rights: 0});
	return send(`👥Вы успешно вступили в клан: ${cclan1.name}`);
});

cmd(/^(?:Клан|Кланы)\s(создать|основать)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan > -1) return send("❌ || Вы уже состоите в клане!");
if(i.money < clan.cost) return send("❌ || Не хватает средств!");
if(args[2].length > clan.name) return send("❌ || Название клана не может превышать "+clan.name+" символов!");
i.money -= clan.cost;
i.clan = clans.length;
clans.push({
	id: clans.length,
	name: args[2],
	owner: i.uid,
	monster: {
		id: -1
		},
	war: {
		time: 0
		},
	brone: 0,
	cups: 0,
	users: [],
	invites: [],
	ban: [],
	budget: 0,
	type: 0
	});
	send(`👥Клан под ид: ${clans.length-1} успешно создан!
🔹Для просмотра списка команд клана введите: Клан`);
});

cmd(/^(?:Клан|Кланы)\s(пригласить)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 1 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
let plus4 = users[args[2]];
if(plus4.clan == cclan1.id) return send("❌ || Игрок уже находится в вашем клане!");
if(plus4.clan > -1) return send("❌ || Игрок находится в другом клане!");
if(cclan1.invites.filter(x=> x.uid == plus4.uid) != "") return send("❌ || Вы уже отправили приглашение данному игроку!");
cclan1.invites.push({time: clan.invite, uid: plus4.uid});
if(cclan1.ban.filter(x=> x == plus4.uid) != "") {cclan1.ban.splice(cclan1.ban.indexOf(plus4.uid), 1)};
vk.api.messages.send({user_id: plus4.id, message: "👥Вам пришло приглашение из клана: "+cclan1.name+"("+cclan1.id+")\n🔹Для того чтобы принять приглашение пишите: Клан принять "+cclan1.id+"\n🔸Приглашение действительно: "+clan.invite+" минут."});
return send("👥Приглашение успешно создано, оно станет не действительным через "+clan.invite+" мин!");
});

cmd(/^(?:Клан|Кланы)\s(разбан|разбанить)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 1 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
let plus4 = users[args[2]];
if(cclan1.ban.filter(x=> x == plus4.uid) == "") return send("❌ || Игрок и так не в бане клана!");
cclan1.ban.splice(cclan1.ban.indexOf(plus4.uid), 1);
vk.api.messages.send({user_id: plus4.id, message: "👥Вы разбанены в клане: "+cclan1.name+"("+cclan1.id+")"});
send("👥Игрок успешно разбанен!");
});

cmd(/^(?:Клан|Кланы)\s(покинуть|уйти|выйти)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner == i.uid) {
	cclan1.users.map(x=> {
		vk.api.messages.send({user_id: users[x.uid].id, message: "🚫Клан в котором вы находитесь был удалён!"});
		users[x.uid].clan = -1;
		});
		delete clans[i.clan];
		i.clan = -1;
		return send("🚫Вы покинули клан.\n🔹Клан удалён!");
	}
	cclan1.users.splice(cclan1.users.indexOf(cclan1.users.find(x=> x.uid == i.uid)), 1);
	i.clan = -1;
	send("🚫Вы успешно покинули клан!");
	return vk.api.messages.send({user_id: users[cclan1.owner].id, message: "👥Игрок: [id"+i.id+"|"+i.name+"]["+i.uid+"] покинул ваш клан!"});
});

cmd(/^(?:Клан|Кланы)\s(удалить)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid) return send("❌ || Вы не создатель клана!");
	cclan1.users.map(x=> {
		vk.api.messages.send({user_id: users[x.uid].id, message: "🚫Клан в котором вы находитесь был удалён!"});
		users[x.uid].clan = -1;
		});
		delete clans[i.clan];
		i.clan = -1;
		return send("🚫Клан удалён!");
});

cmd(/^(?:Клан|Кланы)\s(повысить|up)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
let plus4 = users[args[2]];
if(cclan1.users.filter(x=> x.uid == plus4.uid) == "") return send("❌ || Данного игрока нет в клане!");
if(cclan1.users.find(x=> x.uid == plus4.uid).rights >= 2 && i.uid != cclan1.owner || cclan1.owner == plus4.uid) return send("❌ || Игрок выше вас по званию или ваши статусы равны!");
if(cclan1.users.find(x=> x.uid == plus4.uid).rights >= 1 && cclan1.users.filter(x=> x.uid == i.uid && x.rights <= 2) != "" && cclan1.owner != i.uid) return send("❌ || Игрок и так повышен!");
if(cclan1.users.find(x=> x.uid == plus4.uid).rights >= 2) return send("❌ || Игрок имеет максимальное доступное звание в клане!");
cclan1.users.find(x=> x.uid == plus4.uid).rights += 1;
vk.api.messages.send({user_id: plus4.id, message: "👥Вас повысили в вашем клане!\n🔹Ваш новый статус: "+clan.rights[cclan1.users.find(x=> x.uid == plus4.uid).rights]});
send("👥Игрок успешно повышен!")
});

cmd(/^(?:Клан|Кланы)\s(понизить|down)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!users[args[2]]) return send("❌ || Игрок не найден!");
let plus4 = users[args[2]];
if(cclan1.users.filter(x=> x.uid == plus4.uid) == "") return send("❌ || Данного игрока нет в клане!");
if(cclan1.users.find(x=> x.uid == plus4.uid).rights >= 2 && i.uid != cclan1.owner || cclan1.owner == plus4.uid) return send("❌ || Игрок выше вас по званию или ваши статусы равны!");
if(cclan1.users.find(x=> x.uid == plus4.uid).rights <= 0) return send("❌ || Игрок имеет минимальное доступное звание в клане!");
cclan1.users.find(x=> x.uid == plus4.uid).rights -= 1;
vk.api.messages.send({user_id: plus4.id, message: "👎Вас понизили в вашем клане!\n🔹Ваш новый статус: "+clan.rights[cclan1.users.find(x=> x.uid == plus4.uid).rights]});
send("👥Игрок успешно понижен!")
});

cmd(/^(?:Клан|Кланы)\s(тип)\s(0|1)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(args[2] == cclan1.type) return send("❌ || Ваш клан и так имеет данный тип!");
cclan1.type = args[2];
send("👥Тип клана сменён!");
});

cmd(/^(?:Клан|Кланы)\s(имя|переименовать|название)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
if(args[2].length > clan.name) return send("❌ || Название клана не может превышать "+clan.name+" символов!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
cclan1.name = args[2];
send("👥Название клана сменено!");
});

cmd(/^(?:Клан|Кланы)\s(казна|баланс|деньги|бюджет)\s(пополнить|вложить|положить)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
let sum09 = func.repl(args[3]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
if(i.money < sum09) return send("❌ || Не хватает средств!");
cclan1.budget += sum09;
i.money -= sum09;
send("💎Вы успешно пополнили казну клана на: "+func.sp(sum09)+"$");
});

cmd(/^(?:Клан|Кланы)\s(казна|баланс|деньги|бюджет)\s(выплатить|раздать|выдать)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
let sum09 = func.repl(args[3]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватную сумму!");
sum09 = Number(func.fix(sum09));
if(cclan1.budget < sum09) return send("❌ || Не хватает средств клана!");
cclan1.budget -= sum09;
let opx4 = cclan1.users.filter(x=> x.rights == 0).length + cclan1.users.filter(x=> x.rights == 1).length*2 + cclan1.users.filter(x=> x.rights == 2).length*3 + 4;
opx4 = Number((sum09/opx4).toFixed(0));
cclan1.users.filter(x=> x.rights == 0).map(x=> {
users[x.uid].money += opx4
vk.api.messages.send({user_id: users[x.uid].id, message: "👥Ваш клан выплатил вам: "+func.sp(opx4)+"$"});
});
cclan1.users.filter(x=> x.rights == 1).map(x=> {
users[x.uid].money += opx4*2
vk.api.messages.send({user_id: users[x.uid].id, message: "👥Ваш клан выплатил вам: "+func.sp(opx4*2)+"$"});
});
cclan1.users.filter(x=> x.rights == 2).map(x=> {
 users[x.uid].money += opx4*3
 vk.api.messages.send({user_id: users[x.uid].id, message: "👥Ваш клан выплатил вам: "+func.sp(opx4*3)+"$"});
});
users[cclan1.owner].money += opx4*4;
vk.api.messages.send({user_id: users[cclan1.owner].id, message: "👥Ваш клан выплатил вам: "+func.sp(opx4*4)+"$"});
send("💎Вы успешно выплатили клану: "+func.sp(sum09)+"$\n➖➖➖➖➖\n🔹Участникам по: "+func.sp(opx4)+"$\n💡Модераторам по: "+func.sp(opx4*2)+"$\n👻Заместителям по: "+func.sp(opx4*3)+"$\n🏆Создателю: "+func.sp(opx4*4)+"$");
});

cmd(/^(?:Клан|Кланы)\s(монстр|монстры)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.monster.id < 0) {
	var mons78 = clan.monsters.filter(x=> x.id > 0).map(x=> "🐲 || "+x.name+"\n💜Здоровье: "+func.sp(x.hp)+"\n💣Урон: "+func.sp(x.damage)+"/"+x.speed+"сек.\n💰Цена: "+func.sp(clan.monster_cost)+"$\n🔹ID: "+x.id).join("\n\n");
	send(`[🐋] Монстры [🐋]
	✔Здесь вы можете купить монстра клану. Монстр служит для атак на другие кланы и защиту своего.
	
	${mons78}
	➖➖➖➖➖
	❔Для покупки монстр введите: Клан монстр купить [ид]`);
	}
	send(`[🐋] Монстр [🐋]
	🐲 || Вид: ${clan.monsters[cclan1.monster.id].name}
	💜 || Здоровье: ${func.sp(cclan1.monster.hp.hp)+"("+cclan1.monster.hp.level+")"}
	💣 || Урон: ${func.sp(cclan1.monster.damage.damage)+"("+cclan1.monster.damage.level+")"}/${clan.monsters[cclan1.monster.id].speed}сек.
	
	➖➖➖Улучшения➖➖➖➖
	💖Здоровье: +${func.sp((cclan1.monster.hp.hp*0.1).toFixed(0))}
	💰Стоимость: ${func.sp(cclan1.monster.hp.cost)}
	❔Для улучшения пишите: Клан монстр улучшить здоровье
	
	💪Урон: +${func.sp((cclan1.monster.damage.damage*0.1).toFixed(0))}
	💰Стоимость: ${func.sp(cclan1.monster.damage.cost)}
	❔Для улучшения пишите: Клан монстр улучшить урон`);
	});
	
	cmd(/^(?:Клан|Кланы)\s(монстр|монстры)\s(улучшить|прокачать)\s(урон|силу)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
	if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(cclan1.monster.id < 0) return send("❌ || В вашем клане нет монстра!");
if(cclan1.budget < cclan1.monster.damage.cost) return send("❌ || Не хватает бюджета клана!");
cclan1.budget -= cclan1.monster.damage.cost;
cclan1.monster.damage.level++;
cclan1.monster.damage.damage += Number((cclan1.monster.damage.damage*0.1).toFixed(0));
cclan1.monster.damage.cost += Number((cclan1.monster.damage.cost*0.15).toFixed(0));
send("💣Урон вашего кланового зверя улучшен!");
	});
	
	cmd(/^(?:Клан|Кланы)\s(монстр|монстры)\s(улучшить|прокачать)\s(здоровье|жизнь)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
	if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(cclan1.monster.id < 0) return send("❌ || В вашем клане нет монстра!");
if(cclan1.budget < cclan1.monster.hp.cost) return send("❌ || Не хватает бюджета клана!");
cclan1.budget -= cclan1.monster.hp.cost;
cclan1.monster.hp.level++;
cclan1.monster.hp.hp += Number((cclan1.monster.hp.hp*0.1).toFixed(0));
cclan1.monster.hp.cost += Number((cclan1.monster.hp.cost*0.15).toFixed(0));
send("💜Здоровье вашего кланового зверя улучшено!");
	});
	
	cmd(/^(?:Клан|Кланы)\s(монстр|монстры)\s(купить)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
		if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(cclan1.monster.id >= 0) return send("❌ || В вашем клане уже есть монстр!");
if(!clan.monsters[args[3]] || args[3] < 1) return send("❌ || Данного монстра не существует!");
if(cclan1.budget < clan.monster_cost) return send("❌ || Не хватает бюджета клана!");
cclan1.budget -= clan.monster_cost;
cclan1.monster.id = args[3];
cclan1.monster.hp = {
hp: clan.monsters[args[3]].hp,
level: 1,
cost: 10000000
}
cclan1.monster.damage = {
damage: clan.monsters[args[3]].damage,
level: 1,
cost: 10000000
}
send("🐲Вы успешно купили монстра для клана!");
});

cmd(/^(?:Клан|Кланы)\s(магазин|рынок)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
var clan_products1 = clan.shop.map(x=> "⏳ || "+x.name+"\n💰Стоимость: "+func.sp(x.cost)+"$\n🔹ID: "+x.id).join("\n\n");
send(`[💼] Магазин [💼]
✔Здесь вы можете купить товары для клана.

${clan_products1}
➖➖➖➖➖
❔Для покупки введите: Клан магазин купить [ид товара] [кол-во]`);
});

cmd(/^(?:Клан|Кланы)\s(магазин|рынок)\s(купить)\s([^]+)\s([^]+)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(!clan.shop[args[3]]) return send("❌ || Товар не найден!");
let sum09 = func.repl(args[4]);
if(!Number(sum09) || sum09 < 1) return send("❌ || Введите адекватное колличество!");
sum09 = Number(func.fix(sum09));
var csp57 = clan.shop[args[3]];
if(cclan1.budget < csp57.cost*sum09) return send("❌ || Не хватает бюджета клана!");
cclan1.budget -= csp57.cost*sum09;
if(csp57.id == 0){
	cclan1.brone += (sum09*60*60*24);
	send("👥Вы успешно купили защиту для клана!");
	}
});

cmd(/^(?:Клан|Кланы)\s(война|атака)$/i, 0, (send, users, bitcoins, other, promo, vk, msg, silvent, alog, clans) => {
if(i.clan < 0) return send("❌ || У вас нет клана!");
let cclan1 = clans[i.clan];
if(cclan1.owner != i.uid && cclan1.users.filter(x=> x.rights >= 2 && x.uid == i.uid) == "") return send("❌ || Не хватает прав в клане!");
if(cclan1.monster.id < 0) return send("❌ || В вашем клане нет монстра!");
if(cclan1.war.time != 0) return send("❌ || Подождите еще: "+func.timer(cclan1.war.time)+"\n🔹Атаковать можно раз в 25 мин.");
var wcls4 = clans.filter(x=> x != null).filter(x=> x.brone == 0 && x.monster.id >= 0 && x.id != cclan1.id);
if(wcls4.length < 1) return send("❌ || Кланов для войны не найдено!");
cclan1.brone = 0;
wcls4 = wcls4[func.rand(0, wcls4.length-1)];
var hem55 = {
	hp: wcls4.monster.hp.hp,
	damage: wcls4.monster.damage.damage,
	speed: clan.monsters[wcls4.monster.id].speed
	}
	
var im55 = {
	hp: cclan1.monster.hp.hp,
	damage: cclan1.monster.damage.damage,
	speed: clan.monsters[cclan1.monster.id].speed
	}
	
	var num73 = 0;
	var num74 = 0;
	while(hem55.hp > 0 && im55.hp > 0) {
		num73++;
		num74++;
		if(num73 == hem55.speed) {
im55.hp -= hem55.damage;
num73 = 0;
}
		if(num74 == im55.speed) {
			num74 = 0;
hem55.hp -= im55.damage
}
		}

cclan1.war.time = clan.war.time*60;
		if(hem55.hp == im55.hp){
			cclan1.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Ничья"});
				});
				send("👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Ничья");
				wcls4.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Ничья"});
				});
				vk.api.messages.send({user_id: users[wcls4.owner].id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Ничья"});
			}
			if(hem55.hp < im55.hp){
				var sum74 = Number((wcls4.budget/100*clan.war.win.budget).toFixed(0));
				var cup74 = (wcls4.cups <= clan.war.win.cups) ? wcls4.cups: clan.war.win.cups;
			cclan1.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Победа\n\n[💎] - Награды - [💎]\n🏆Кубки: "+clan.war.win.cups+"\n💰Бюджет клана: +"+func.sp(sum74)});
				});
				send("👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Победа\n\n[💎] - Награды - [💎]\n🏆Кубки: "+clan.war.win.cups+"\n💰Бюджет клана: +"+func.sp(sum74));
				wcls4.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Поражение\n\n[💀] - Потери - [💀]\n🏆Кубки: "+cup74+"\n💰Бюджет клана: -"+func.sp(sum74)});
				});
				vk.api.messages.send({user_id: users[wcls4.owner].id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Поражение\n\n[💀] - Потери - [💀]\n🏆Кубки: "+cup74+"\n💰Бюджет клана: -"+func.sp(sum74)});
				cclan1.cups += clan.war.win.cups;
				wcls4.cups -= cup74;
				cclan1.budget += sum74;
				wcls4.budget -= sum74;
			}
			if(hem55.hp > im55.hp){
				var sum74 = Number((cclan1.budget/100*clan.war.win.budget).toFixed(0));
				var cup74 = (cclan1.cups <= clan.war.win.cups) ? cclan1.cups: clan.war.win.cups;
			wcls4.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Победа\n\n[💎] - Награды - [💎]\n🏆Кубки: "+clan.war.win.cups+"\n💰Бюджет клана: +"+func.sp(sum74)});
				});
				vk.api.messages.send({user_id: users[wcls4.owner].id, message: "👥На ваш клан напал клан: "+cclan1.name+"["+cclan1.id+"]\n➖➖➖➖➖\n🎭Итог: Победа\n\n[💎] - Награды - [💎]\n🏆Кубки: "+clan.war.win.cups+"\n💰Бюджет клана: +"+func.sp(sum74)});
				cclan1.users.map(x=> {
				vk.api.messages.send({user_id: x.id, message: "👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Поражение\n\n[💀] - Потери - [💀]\n🏆Кубки: "+cup74+"\n💰Бюджет клана: -"+func.sp(sum74)});
				});
				send("👥Ваш клан напал на клан: "+wcls4.name+"["+wcls4.id+"]\n➖➖➖➖➖\n🎭Итог: Поражение\n\n[💀] - Потери - [💀]\n🏆Кубки: "+cup74+"\n💰Бюджет клана: -"+func.sp(sum74));
				wcls4.cups += clan.war.win.cups;
				cclan1.cups -= cup74;
				wcls4.budget += sum74;
				cclan1.budget -= sum74;
			}
});

module.exports = {
	cmds
	}