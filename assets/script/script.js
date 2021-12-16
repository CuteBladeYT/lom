// Declaring content views as variables
const contentView__main = `
<pre class="serverInfo">
ʕ•ᴥ•ʔ Zapraszam na serwer! ʕ•ᴥ•ʔ
✱ Tematyka serwera ✱
*Gry kompterowe
*Anime i Manga
*Poznawanie się
*Spędzanie miło czasu razem :3

Gwarantujemy:
✿ Uprzejmą oraz pomocną Administrację
✿ Mało pingów
✿ Poznawanie nowych, wspaniałych ludzi! ღ
✿ Posiadamy boty serwerowe takie jak Mudae, Karuta czy też OWO Bot
✿ Pomoc innych członków serwera
✿ Świetną oraz niezapomnianą zabawę! ღ
✿ Wszelkie propozycje dotyczące serwera zostaną dokładnie rozpatrzone

Dołącz do nas i razem twórzmy wspaniałą społeczność! ✿
</pre>
<iframe id="discord_widget" 
    src="https://discord.com/widget?id=738059407757148163&amp;theme=dark" 
    allowtransparency="true" 
    frameborder="0" 
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
`;
const contentView__rules = `
<pre class="serverRules">
1. Zabroniony jest jakikolwiek spam oraz flood.
2. Zabronione jest pisanie w dużej ilości wielkimi literami (Caps Lock).
3. Dozwolone są wulgaryzmy ale z UMIAREM.
4. Zabronione jest umieszczanie jakichkolwiek treści 18+, czy to w postaci zdjęcia, tekstu, gifu lub filmiku.
5. Zabronione jest reklamowanie się w jakikolwiek sposób (chyba, że za zgodą administracji). Za reklamowanie się na priv u innych członków serwera jest ban.
6. Zabronione jest prowokowanie kłótni, dyskusji, które mają negatywny wpływ na serwer.
7. Do używania @everyone uprawniona jest jedynie administracja.
8. Zabronione jest obrażanie użytkowników, administracji i serwera oraz działania na ich szkody.
9. Zabronione jest wykorzystywanie, oszukiwanie oraz szantażowanie użytkowników serwera.
10. Zabronione jest poruszanie tematów religijnych, politycznych oraz rasistowskich.
11. Zabroniony jest wszelkiego rodzaju trolling oraz inne formy zachowań anty-społecznych.
12. Zabronione jest wykorzystywanie możliwych błędów na serwerze. Należy je natychmiast zgłosić administracji.
13. Zabronione jest podszywanie się pod innych użytkowników lub administrację.
14. Komend można używać tylko na kanale do tego stworzonym.
15. Zabronione jest pisanie rzeczy niezgodnych z tematyką kanału.
16. Zabronione jest wysyłanie linków bądź plików zawierających jakiekolwiek treści wulgarne/rasistowskie/pornograficzne/religijne itp. oraz plików szkodliwych (wirusy).
17. Awatar oraz nick nie może zawierać treści obraźliwych/rasistowskich/wulgarnych itp.
18. Zabronione jest utrudnianie pracy administracji.
19. Zabronione jest prowokowanie administracji.
20. Obrażanie, wyśmiewanie, obgadywanie oraz jakiekolwiek negatywne zachowania względem innych serwerów będą karane natychmiastowym banem!
21. Zabronione są multikonta.    
</pre>
`;


window.onload = (() => {
    sessionStorage["drawerOpened"] = 1;
    drawerMenu();
    contentView("main");
})

function drawerMenu() {
    var drawerOpened = parseFloat(sessionStorage["drawerOpened"]);
    var drawerMenu = document.querySelector(".drawerMenu");
    if (drawerOpened == 1) {
        sessionStorage["drawerOpened"] = 0;
        drawerMenu.style.left = "-19vw";
    } else {
        sessionStorage["drawerOpened"] = 1;
        drawerMenu.style.left = "0vw";
    }
}

function contentView(viewport) {
    var content = document.querySelector("#content");
    if (parseFloat(sessionStorage["drawerOpened"]) == 1) {
        drawerMenu();
    };
    switch (viewport) {
        case "main":
            content.innerHTML = contentView__main;
            break;
        case "rules":
            content.innerHTML = contentView__rules;
            break;
    }
}