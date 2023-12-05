// Fonction pour charger les options dans le menu déroulant
export function loadGrid() {
    var selectState = $("#selectState");
    // Options possibles (vous pouvez les ajuster selon vos besoins)
    var options = ["defaultState", "state1", "state2", "state3"];
    console.log(options);
    // Ajouter les options au menu déroulant
    $.each(options, function (index, value) {
      selectState.append($("<option>", { value: value, text: value }));
    });
}