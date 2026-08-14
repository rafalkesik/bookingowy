const colors = [
  "#46b8e9",
  "#3ee9d1",
  "#ce43eb",
  "#e89260",
]

const functionalities = [
  {
    subtitle: "funkcjonalność",
    title: "Logowanie",
    body: "Dodać system logowania, aby dane z Hostex były bezpieczne.",
    mustHave: [
      "Dodać header z linkiem do logowania",
      "Dodać system logowania, i zarządzania kontami dla admina.",
      "Dodać przycisk przejścia do Mojego Kalendarza po zalogowaniu",
      "Pozostawić demo kalendarza i roadmapę jako publiczne."
    ]
  },
  {
    subtitle: "Publikacja",
    title: "Wyjście na produkcję",
    body: "Wypuścić projekt na produkcję."
  },
  {
    subtitle: "funkcjonalnosć",
    title: "Sprzątanie",
    body: "Dodać możliwość dodawania eventu sprzątania z poziomu \
           kalendarza.",
    mustHave: [
      "Ikona sprzątania ma się wyświetlić po lewej od numeru dnia.",
      "Po kliknięciu w dzień, pojawia się opcja usunięcia, lub dodania sprzątania.",
    ],
    niceToHave: [
      "Dodać przycisk do kopiowania listy sprzątań do clipboard",
      "Dodać widok kalendarza z listą wszystkich sprzątań",
      "Sprzątanie ma się automatycznie zaplanować na dzień wymeldowania gościa",
    ]
  },
  {
    subtitle: "funkcjonalność",
    title: "odbiór prania",
    body: "Dodać możliwość dodawania eventu odbioru pościeli z \
           poziomu kalendarza.",
    mustHave: [
      "Ikona prania ma się wyświetlić po lewej od numeru dnia, po prawej od sprzątania.",
      "Po kliknięciu w dzień, pojawia się opcja usunięcia, lub dodania prania.",
    ],
    niceToHave: [
      "Przycisk do kopiownia listy sprzątania ma także zawierać informacje o praniu"
    ]
  },
  {
    subtitle: "utrzymanie",
    title: "Rezerwacje w bazie",
    body: "System zacznie zapisywać dane rezerwacyjne w bazie danych.",
    mustHave: [
      "Dodać przycisk do pełnej synchronizacji kalendarza z Hostex",
      "Jeśli przychodzi nowa rezerwacja, dodaje ją do bazy danych",
      "Jeśli rezerwacja ma inne daty, zmienia je w bazie danych",
      "Jeśli rezerwacja została anulowana, usuwa ją z bazy danych",
      "Kalendarz wyświetla eventy z bazy danych"
    ],
    niceToHave: [
      "Stworzyć modele sprzątania i prania",
      "Sprzatanie i pranie są wyświetlana w oparciu o bazę danych"
    ],
  },
  {
    subtitle: "funkcjonalność",
    title: "Automatyzacja sprzątań",
    body: "Dodać funkcję automatycznie dodającą sprzątania w dniu \
           wymeldowania gości."
  },
  {
    subtitle: "funkcjonalność",
    title: "Automatyzacja prania",
    body: "Dodać funkcję automatycznego planowania przywozu i \
           odbioru prania.",
    mustHave: [
      "Dodać do modelu rezerwacji kolumny z ilością zapasu pościeli.",
      "Dodać przycisk do automatycznego rozplanowania dowozu prania.",
    ],
    niceToHave: [
      "Każda zmiana w rezerwacjach automatycznie zmienia dzień prania."
    ]
  },
]

export { colors, functionalities };