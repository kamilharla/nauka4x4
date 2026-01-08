// ========================================
// DANE ZAWARTOŚCI ZAKŁADEK
// ========================================
const contentData = [
    {
        pl: `<ul>
                <li><b>Baza promotorów:</b> Interaktywna lista dostępnych promotorów wraz z ich specjalizacjami i aktualną liczbą doktorantów.</li>
                <li><b>Standardy relacji:</b> Cykl szkoleń i wdrożenie jasnego regulaminu praw oraz obowiązków na linii doktorant–promotor.</li>
                <li><b>Warsztat naukowy:</b> Praktyczne warsztaty z narzędzi wspomagających pisanie (LaTeX, Zotero, Git) oraz technik pisania rozprawy.</li>
                <li><b>Science coaching:</b> Program wsparcia w planowaniu kamieni milowych rozprawy i zarządzaniu projektem badawczym.</li>
            </ul>`,
        en: `<ul>
                <li><b>Supervisor Database:</b> An interactive list of available supervisors with their specializations and current number of doctoral students.</li>
                <li><b>Relationship Standards:</b> A series of training sessions and the implementation of clear regulations on rights and duties between PhD students and supervisors.</li>
                <li><b>Scientific Workshop:</b> Practical workshops on writing tools (LaTeX, Zotero, Git) and dissertation writing techniques.</li>
                <li><b>Science Coaching:</b> A support program for planning dissertation milestones and managing research projects.</li>
            </ul>`
    },
    {
        pl: `<ul>
                <li><b>Projekt „Aktywny doktorant":</b> Inicjatywa angażowania doktorantów w wydarzenia naukowe na podstawie tematów ich rozpraw.</li>
                <li><b>Platforma konferencyjna:</b> Baza polecanych konferencji krajowych i zagranicznych z podziałem na dyscypliny.</li>
                <li><b>Inicjatywa Wydawnicza:</b> Cykliczne konferencje Szkoły Doktorskiej kończące się publikacją recenzowanych monografii.</li>
                <li><b>Projekt „Synergia":</b> Systemowa współpraca doktorantów z Kołami Naukowymi (SKN), umożliwiająca wspólne prowadzenie projektów.</li>
            </ul>`,
        en: `<ul>
                <li><b>"Active PhD" Project:</b> An initiative to engage doctoral students in scientific events based on their dissertation topics.</li>
                <li><b>Conference Platform:</b> A database of recommended national and international conferences divided by disciplines.</li>
                <li><b>Publishing Initiative:</b> Cyclical conferences of the Doctoral School resulting in the publication of peer-reviewed monographs.</li>
                <li><b>"Synergy" Project:</b> Systemic cooperation between doctoral students and Student Research Groups (SKN) for joint research projects.</li>
            </ul>`
    },
    {
        pl: `<ul>
                <li><b>Sieć CIVICA:</b> Finansowe i organizacyjne wsparcie dla oddolnych projektów badawczych realizowanych z doktorantami z uczelni partnerskich.</li>
                <li><b>Współpraca ze Szkołami Doktorskimi:</b> Integracja między uczelniami w celu wspólnych projektów i wymian doktoranckich.</li>
                <li><b>Współpraca Research-Business:</b> Nawiązanie kontaktów z partnerami biznesowymi w celu organizacji projektów i konferencji.</li>
                <li><b>Aktywność medialna:</b> Organizacja profesjonalnego przekazu medialnego samorządu w celu promowania inicjatyw naukowych.</li>
            </ul>`,
        en: `<ul>
                <li><b>CIVICA Network:</b> Financial and organizational support for bottom-up research projects carried out with PhD students from partner universities.</li>
                <li><b>Cooperation with Doctoral Schools:</b> Integration between universities for joint projects and doctoral exchanges.</li>
                <li><b>Research-Business Cooperation:</b> Establishing contacts with business partners to organize joint projects and conferences.</li>
                <li><b>Media Activity:</b> Organizing professional media communication of the council to promote scientific initiatives.</li>
            </ul>`
    },
    {
        pl: `<ul>
                <li><b>Coworking:</b> Wypracowanie przestrzeni w SGH przeznaczonej wyłącznie do wspólnej pracy i networkingu doktorantów.</li>
                <li><b>Spotkania naukowe:</b> Regularne spotkania dyskusyjne i debaty oksfordzkie pozwalające na wymianę myśli między dyscyplinami.</li>
                <li><b>Integracja:</b> Organizacja cyklicznych wyjazdów szkoleniowo-integracyjnych oraz nieformalnych wyjść.</li>
                <li><b>Pakiet Benefitów:</b> Rozszerzenie dostępu do programów sportowych (Multisport) oraz kulturalnych dla doktorantów.</li>
            </ul>`,
        en: `<ul>
                <li><b>Coworking:</b> Developing a space at SGH dedicated exclusively to joint work and networking for doctoral students.</li>
                <li><b>Scientific Meetings:</b> Regular discussion meetings and Oxford debates allowing for the exchange of ideas between disciplines.</li>
                <li><b>Integration:</b> Organizing cyclical training-integration trips and informal outings.</li>
                <li><b>Benefit Package:</b> Expanding access to sports programs (Multisport) and cultural events dedicated to PhD students.</li>
            </ul>`
    }
];

// ========================================
// ZMIENNE GLOBALNE
// ========================================
let currentLang = 'pl';
let currentTab = 0;

// ========================================
// FUNKCJE ZAKŁADEK
// ========================================
function showTab(index) {
    currentTab = index;
    
    // Aktualizacja przycisków
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, i) => {
        const isActive = i === index;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
    });
    
    // Aktualizacja zawartości
    const tabContent = document.getElementById('tab-content');
    if (tabContent) {
        tabContent.innerHTML = contentData[index][currentLang];
    }
}

// ========================================
// FUNKCJE JĘZYKA
// ========================================
function toggleLanguage() {
    const langToggle = document.getElementById('langToggle');
    const isEnglish = langToggle.checked;
    currentLang = isEnglish ? 'en' : 'pl';
    
    // Przełączenie klasy na body
    document.body.classList.toggle('lang-en', isEnglish);
    
    // Aktualizacja zawartości zakładki
    showTab(currentTab);
}

// ========================================
// OBSŁUGA ZDARZEŃ
// ========================================
function initializeEventListeners() {
    // Przełącznik języka
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('change', toggleLanguage);
    }
    
    // Przyciski zakładek
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => showTab(index));
    });
    
    // Obsługa klawiatury dla dostępności
    tabButtons.forEach((btn, index) => {
        btn.addEventListener('keydown', (e) => {
            let newIndex = index;
            
            if (e.key === 'ArrowRight') {
                newIndex = (index + 1) % tabButtons.length;
                e.preventDefault();
            } else if (e.key === 'ArrowLeft') {
                newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                e.preventDefault();
            } else if (e.key === 'Home') {
                newIndex = 0;
                e.preventDefault();
            } else if (e.key === 'End') {
                newIndex = tabButtons.length - 1;
                e.preventDefault();
            }
            
            if (newIndex !== index) {
                tabButtons[newIndex].focus();
                showTab(newIndex);
            }
        });
    });
}

// ========================================
// INICJALIZACJA
// ========================================
function initialize() {
    // Wyświetl pierwszą zakładkę
    showTab(0);
    
    // Zainicjuj nasłuchiwanie zdarzeń
    initializeEventListeners();
    
    // Dodaj płynne przewijanie dla wszystkich linków
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Uruchom inicjalizację po załadowaniu DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}