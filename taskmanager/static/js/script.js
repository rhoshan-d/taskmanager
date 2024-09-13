document.addEventListener("DOMContentLoaded", function() {
    // Initialize sidenav
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // Initialize datepicker
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: { done: "Select" }
    });

    // Initialize select elements
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
    
    // Collapsible Initializataion
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles);

    // Initialize Modals
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);  // Modal initialization

});
