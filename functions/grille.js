export var listGrids  = [
  ["Secret d'histoire", "secret_histoire.txt"],
  ["Ravioli", "ravioli.txt"]
]

// Fonction pour charger les options dans le menu déroulant
export function loadGrid() {
    var selectState = $("#selectGrid");
    // Ajouter les options au menu déroulant
    $.each(listGrids, function (index, value) {
      selectState.append($("<option>", { value: value[1], text: value[0] }));
    });
}

