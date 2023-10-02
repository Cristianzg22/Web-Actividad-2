const tabla = document.querySelector('.user-table tbody');
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
usuariosRegistrados.forEach(usuario => {
    const row = tabla.insertRow();
    row.innerHTML = `
        <td class="user-name">${usuario.nombre}</td>
        <td class="user-lastname">${usuario.apellido}</td>
        <td class="user-email">${usuario.correo}</td>
        <td class="user-password">${usuario.contrasena}</td>
        <td class="user-identification">${usuario.cedula}</td>
    `;
});
