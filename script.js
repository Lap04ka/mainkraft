// Відкрити меню
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

// Закрити меню
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

// Відкрити модальне вікно
function openModal(content) {
    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("modal").style.display = "block";
}

// Закрити модальне вікно
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Про гру
function showAbout() {

    const content = `
        <h2>Про гру Minecraft</h2>

        <div class="about-text">

            <p>
                <b>Minecraft</b> — Minecraft — це популярна комп'ютерна гра в жанрі «пісочниця» з відкритим світом, який повністю складається з тривимірних блоків. У ній немає обов'язкового сюжету, тому гравці мають повну свободу дій: можуть будувати будь-які споруди, досліджувати безкрайні локації та створювати власні предмети з добутих ресурсів.
            </p>

            <br>

            <p>
У грі є два основні режими: Виживання, де потрібно шукати їжу й захищатися від нічних монстрів, та Творчість, яка дає нескінченні ресурси й можливість літати для вільного будівництва. Грати можна як наодинці, так і разом із друзями в мережі на різних пристроях.
            </p>

            <br>

            <p>
                Гру створив шведський програміст
                Маркус Перссон (Notch), а пізніше
                її розвитком зайнялася компанія Mojang.
            </p>

        </div>
    `;

    openModal(content);
}

// Історія змін
function showHistory() {

    const content = `
        <h2>Історія змін Minecraft</h2>

        <ul class="history-list">

            <li>
                <b>2009</b> — перша публічна версія Minecraft.
            </li>

            <li>
                <b>2011</b> — випуск Minecraft 1.0.
            </li>

            <li>
                <b>2014</b> — компанія Microsoft купила Mojang.
            </li>

            <li>
                <b>2020</b> — Nether Update.
            </li>

            <li>
                <b>2021</b> — Caves & Cliffs Update.
            </li>

            <li>
                <b>2023</b> — Trails & Tales Update.
            </li>

            <li>
                <b>2025</b> — нові моби, блоки та покращення продуктивності.
            </li>

        </ul>
    `;

    openModal(content);
}

// Герої
function showHeroes() {

    const content = `
        <h2>Головні герої Minecraft</h2>

        <div class="hero-grid">

            <div class="hero-card"
                 onclick="showHero('steve')">

                <img src="steve.png">

                <h3>Стів</h3>

            </div>

            <div class="hero-card"
                 onclick="showHero('alex')">

                <img src="alex.png">

                <h3>Алекс</h3>

            </div>

            <div class="hero-card"
                 onclick="showHero('creeper')">

                <img src="creeper.png">

                <h3>Кріпер</h3>

            </div>

            <div class="hero-card"
                 onclick="showHero('zombie')">

                <img src="zombie.png">

                <h3>Зомбі</h3>

            </div>

            <div class="hero-card"
                 onclick="showHero('enderman')">

                <img src="enderman.png">

                <h3>Ендермен</h3>

            </div>

            <div class="hero-card"
                 onclick="showHero('villager')">

                <img src="villager.png">

                <h3>Селянин</h3>

            </div>

        </div>
    `;

    openModal(content);
}

// Інформація про персонажів
function showHero(hero) {

    let content = "";

    switch(hero) {

        case "steve":

            content = `
                <h2>Стів</h2>

                <img src="steve.png" width="200">

                <p>
                    Стів — це головний і стандартний персонаж гри Minecraft, створений Маркусом Перссоном у 2009 році. Він є головним символом франшизи у впізнаваній бірюзовій футболці та синіх джинсах, який досліджує блоковий світ, добуває ресурси, будує споруди та бореться з монстрами.
                </p>
            `;
            break;

        case "alex":

            content = `
                <h2>Алекс</h2>

                <img src="alex.png" width="200">

                <p>
                    Алекс — це другий стандартний ігровий персонаж у грі Minecraft, якого додали у 2014 році як альтернативу Стіву. Вона має руде волосся, зелені очі, зелену туніку, коричневі штани та тонші руки (3 пікселі замість 4), а її зовнішність була створена за образом розробника Єнса Бергенстена.
                </p>
            `;
            break;

        case "creeper":

            content = `
                <h2>Кріпер</h2>

                <img src="creeper.png" width="200">

                <p>
                     Кріпер — це найвідоміший ворожий моб і головний маскот гри Minecraft, який має зелене плямисте тіло без рук і чотири короткі ноги. Він безшумно підкрадається до гравця, а наблизившись, починає шипіти й через 1,5 секунди вибухає, руйнуючи все навколо. Цей культовий персонаж з'явився випадково у 2009 році через помилку розробника Маркуса Перссона під час створення моделі звичайної свині.
                </p>
            `;
            break;

        case "zombie":

            content = `
                <h2>Зомбі</h2>

                <img src="zombie.png" width="200">

                <p>
                    Зомбі — це поширений ворожий моб у грі Minecraft, який зовні нагадує Стіва з зеленою шкірою та порваним одягом. Він з'являється у темряві, атакує гравця та селян у ближньому бою, а вдень загоряється на сонці. При загибелі з зомбі зазвичай випадає гнила плоть, а іноді й цінніші предмети, як-от залізні злитки, морква чи картопля.
                </p>
            `;
            break;

        case "enderman":

            content = `
                <h2>Ендермен</h2>

                <img src="enderman.png" width="200">

                <p>
                    Ендермен (англ. Enderman) — це високий чорний моб із фіолетовими очима у грі Minecraft. Він уміє миттєво телепортуватися та переносити в руках окремі блоки.
Зазвичай ендермен поводиться мирно, але миттєво стає агресивним і атакує, якщо подивитися йому прямо в очі або вдарити першим. Після перемоги над ним можна отримати перлину Енду, яка потрібна для телепортації та пошуку порталу до фінального боса гри.
                </p>
            `;
            break;

        case "villager":

            content = `
                <h2>Селянин</h2>

                <img src="villager.png" width="200">

                <p>
                 Селянин (або житель) — це дружній неігровий персонаж (NPC) у грі Minecraft, який мешкає у селах та має характерну лису голову й великий ніс. Він може опановувати різні професії залежно від робочого місця поруч, наприклад, ставати фермером, ковалем чи бібліотекарем. Головна особливість селян полягає в тому, що гравець може торгувати з ними, обмінюючи ресурси та смарагди на рідкісні предмети й зачаровані книги.
                </p>
            `;
            break;
    }

    openModal(content);
}

// Закриття при кліку поза вікном
window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if(event.target == modal) {
        modal.style.display = "none";
    }

}