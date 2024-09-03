const open = document.querySelectorAll('#openModalButton');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const formMusic = document.getElementById('formMusic');
const buttonElement = document.createElement('button');


    formMusic.addEventListener('submit', (event) => {
        event.preventDefault();
        //Contiene los datos del formulario
        let musicFormData = new FormData(formMusic);
        //selecciona la tabla
        let musicTableAdd = document.getElementById("musicTable");
        //inserta una fila
        let newMusicRow = musicTableAdd.insertRow(-1);

        let newMusicCell = newMusicRow.insertCell(0);
        newMusicCell.textContent = musicFormData.get("musicName");

        newMusicCell = newMusicRow.insertCell(1);
        newMusicCell.textContent = musicFormData.get("musicType");

        newMusicCell = newMusicRow.insertCell(2);
        newMusicCell.textContent = musicFormData.get("musicWhere");

        newMusicCell = newMusicRow.insertCell(3);
        newMusicCell.textContent = musicFormData.get("musicEnjoy");

        newMusicCell = newMusicRow.insertCell(4);
        newMusicCell.textContent = musicFormData.get("musicComment");

        let newEditCell = newMusicRow.insertCell(5);
        //BOTON EDITAR EN TABLA
        let editButton = document.createElement("button")
        editButton.innerHTML = '<button type="submit" class="btn btn-outline-warning" id="edit" name="edit">Editar</button>';
        newEditCell.appendChild(editButton);

        //ELIMINAR
        let newDeleteCell = newMusicRow.insertCell(6);
        let deleteButton = document.createElement("button")
        // newDeleteCell.innerHTML = '<button type="submit" class="btn btn-outline-danger" id="delete" name="delete">Eliminar</button>';
        deleteButton.textContent = "Eliminar"
        newDeleteCell.appendChild(deleteButton);
        


        deleteButton.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove();//Aqui se accede al elemento y propiedades
            alert("Se elimino la fila seleccionada")
        })

        //EDITAR
        editButton.addEventListener('click', () => {
            editMusicRow(newMusicRow); 
        });

        function editMusicRow(musicRow) {
            // Obtiene toda la informacion de la fila
            const musicCells = musicRow.querySelectorAll('td');

            //Este itera sobre cada celda de la fila
            musicCells.forEach((cell, i) => {
                const musicInput = document.createElement('input'); //Nuevo elemento tipo texto
                musicInput.type = 'text'; //Se establece como texto
                musicInput.value = cell.textContent; // Asigna el valor actual a la celda
        
                // Limpia el contenido de la celda
                cell.innerHTML = '';
                cell.appendChild(musicInput);//Agrega el elemento a la celda
        
                const saveButton = document.createElement('button'); //Crea un nuevo boton
                saveButton.innerHTML = '<button type="submit" class="btn btn-outline-success" id="edit" name="edit">Confirmar</button>';
                cell.appendChild(saveButton); //agrega el boton a la celda
                
        
                saveButton.addEventListener('click', () => {
                    cell.textContent = musicInput.value; //Actualiza el contenido
                    cell.removeChild(musicInput); //Elimina musicInput
                    cell.removeChild(saveButton); //Elimina el boton de Confirmar
                });
            });
        }
    });

