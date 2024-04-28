<?php

// Dane testowe - głosy oddane na partie
$glosy = [
  "Partia A" => 1000,
  "Partia B" => 800,
  "Partia C" => 500,
  "Partia D" => 400,
  "Partia E" => 300,
];

// Liczba mandatów do rozdysponowania
$liczbaMandatow = 10;

// Obliczenie ilorazów d'Hondta dla każdej partii
$ilorazydHondta = [];
foreach ($glosy as $nazwaPartii => $liczbaGlosow) {
  for ($i = 1; $i <= $liczbaMandatow; $i++) {
    $ilorazydHondta[$nazwaPartii][] = $liczbaGlosow / $i;
  }
}

// Posortowanie ilorazów w kolejności malejącej
foreach ($ilorazydHondta as &$ilorazyPartii) {
  arsort($ilorazyPartii);
}

// Rozdysponowanie mandatów
$przydzieloneMandaty = [];
for ($i = 0; $i < $liczbaMandatow; $i++) {
  // Znalezienie partii z najwyższym ilorazem
  $najwyzszyIloraz = -INF;
  $nazwaPartiiZNajwyzszymIlorazem = null;
  foreach ($ilorazydHondta as $nazwaPartii => $ilorazy) {
    if (reset($ilorazy) > $najwyzszyIloraz) {
      $najwyzszyIloraz = reset($ilorazy);
      $nazwaPartiiZNajwyzszymIlorazem = $nazwaPartii;
    }
  }

  // Przypisanie mandatu partii z najwyższym ilorazem
  $przydzieloneMandaty[$nazwaPartiiZNajwyzszymIlorazem]++;

  // Usunięcie najwyższego ilorazu danej partii
  array_shift($ilorazydHondta[$nazwaPartiiZNajwyzszymIlorazem]);
}

// Wyświetlenie wyników
echo "**Wyniki podziału mandatów:**\n";
echo "-------------------------\n";
foreach ($przydzieloneMandaty as $nazwaPartii => $liczbaMandatow) {
  echo "$nazwaPartii: $liczbaMandatow mandatów\n";
}

?>