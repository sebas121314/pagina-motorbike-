/*!
    * Motorbike - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Motorbike
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


const marcaSelect = document.getElementById('marca');
const productoSelect = document.getElementById('producto');

// Definir las opciones de productos para cada marca
const opcionesProductos = {
  Yamaha: ['Yamaha YZ 250', 'Yamaha MT- 09', 'Yamaha R1 M'],
  Ktm: ['KTM 1390 SUPER DUKE R EVO', 'KTM 690 SMC R', 'KTM RC 8C'],
  Kawasaki: ['ZH2R', 'Ninja 400', 'Z900'],
  Ducati: ['Ducati Multistrada V4 S', 'Ducati Panigale V4', 'Ducati Hypermotard']
};

// Agregar evento de cambio a la selección de marca
marcaSelect.addEventListener('change', (e) => {
  const marcaSeleccionada = e.target.value;
  const opciones = opcionesProductos[marcaSeleccionada];

  // Limpiar las opciones de productos
  productoSelect.innerHTML = '<option value="">Seleccione un producto</option>';

  // Agregar las opciones de productos para la marca seleccionada
  if (opciones) {
    opciones.forEach((opcion) => {
      const option = document.createElement('option');
      option.value = opcion;
      option.text = opcion;
      productoSelect.appendChild(option);
    });
  }
});

