var funcion = new function() {
    this.lista = document.getElementById('productos');
    this.productos = [];
    this.Count = function(data) {
        var lista = document.getElementById('lista');
        var name = 'productos';
        if (data) {
            if (data > 1) {
                name = 'productos';
            }
            lista.innerHTML = data + ' ' + name;
        } else {
            lista.innerHTML = 'No existen productos ' + name;
        }

    };

    this.Mostrar = function() {
        var data = '';
        if (this.productos.length > 0) {
            for (i = 0; i < this.productos.length; i++) {

                data += '<div class="producto">' + this.productos[i] + '</div>';
                data += '<div class="editar"><button onclick="funcion.editar(' + i + ')" class="buttonList">Modificar</button></div>';
                data += '<div class="eliminar"><button onclick="funcion.Eliminar(' + i + ')" class="buttonList">Elirminar</button></div>';

            }
        }

        this.Count(this.productos.length);
        return this.lista.innerHTML = data;

    };
    this.Agregar = function() {
        lista = document.getElementById('Agregar-name');
        var listaAgregar = lista.value;
        if (listaAgregar) {
            // Agregar
            this.productos.push(listaAgregar.trim());
            lista.value = '';
            this.Mostrar();
        }
    };
    this.editar = function(item) {
        var lista = document.getElementById('campoNombre');

        lista.value = this.productos[item];
        document.getElementById('divForm').style.display = 'block';
        self = this;
        document.getElementById('formCrud').onsubmit = function() {
            var listaEditar = lista.value;
            if (listaEditar) {
                self.productos.splice(item, 1, listaEditar.trim());
                self.Mostrar();
                // Hide fields
                CloseInput();
            }
        }
    };
    this.Eliminar = function(item) {
        //incluye el item sobre el arreglo
        this.productos.splice(item, 1);
        // Ejecuta la funcion de la lista
        this.Mostrar();
    };

}
funcion.Mostrar();

function CloseInput() {
    document.getElementById('divForm').style.display = 'none';
}