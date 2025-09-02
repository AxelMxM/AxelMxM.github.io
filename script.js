// Datos de los videos
let videos = [

];


        let videosPerPage = 4;
        let currentPage = 1;
        let totalPage = Math.ceil(videos.length / videosPerPage);

        function displayVideos(page) {
            const container = document.querySelector(".box-container-1");
            container.innerHTML = "";

            const start = (page - 1) * videosPerPage;
            const end = start + videosPerPage;
            const displayedVideos = videos.slice(start, end);

            displayedVideos.forEach((video) => {
                const box = document.createElement("div");
                box.classList.add("box-1");
                box.style.display = "inline-block"; // Estilo en línea para mostrar en línea
                box.innerHTML = `
                    <div class="content">
                        <a class="video-link" href="${video.link}">
                            <img src="${video.imageSrc}" alt="videosss">
                            <h3>${video.title}</h3>
                            <p>${video.description}</p>
                        </a>
                    </div>
                `;
                container.appendChild(box);
            });
        }



        //Botones de pagina Inicio
        function createPageButton(page) {
            const button = document.createElement("button");
            button.textContent = `${page}`;
            button.addEventListener("click", () => {
                currentPage = page;
                loadPage();
            });
            return button;
        }
        function updatePagination() {
            const paginationInfo = document.querySelector("#pagination-info");
            paginationInfo.innerHTML = ""; // Limpiar el contenido actual
            // Determinar el rango de páginas para mostrar los botones
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPage, startPage + 4);
            startPage = Math.max(1, endPage - 4);

            // Crear botón para cada página en el rango
            for (let page = startPage; page <= endPage; page++) {
                const pageButton = createPageButton(page);
                paginationInfo.appendChild(pageButton);
            }
        }
        // Función para cargar la página actual al inicio
        function loadPage() {
            displayVideos(currentPage);
            updatePagination();
        }
        // Cargar los primeros videos al cargar la página
        loadPage();
        // Actualizar la paginación cada vez que se navega a una nueva página
        document.querySelector("#pagination-info").addEventListener("click", updatePagination);
        //Botones de pagina Final 



        //Cambio de color para los botones de las paginas inicio
        function createPageButton(page) {
            const button = document.createElement("button");
            button.textContent = `${page}`;
            button.addEventListener("click", () => {
                currentPage = page;
                loadPage();
            });
            // Cambiar el color del botón dependiendo de la página en la que estás
            if (page === currentPage) {
                button.classList.add("current-page");
            }
            return button;
        }

        function updatePagination() {
            const paginationInfo = document.querySelector("#pagination-info");
            paginationInfo.innerHTML = ""; // Limpiar el contenido actual

            // Determinar el rango de páginas para mostrar los botones
            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(totalPage, startPage + 4);
            startPage = Math.max(1, endPage - 4);

            // Crear botón para cada página en el rango
            for (let page = startPage; page <= endPage; page++) {
                const pageButton = createPageButton(page);
                paginationInfo.appendChild(pageButton);
            }
        }

        // Función para cargar la página actual al inicio
        function loadPage() {
            displayVideos(currentPage);
            updatePagination();
        }

        // Cargar los primeros videos al cargar la página
        loadPage();

        // Actualizar la paginación cada vez que se navega a una nueva página
        document.querySelector("#pagination-info").addEventListener("click", updatePagination);
        //Cambio de color para los botones de las paginas Final






            // Botón de siguiente página
            const nextButton = document.querySelector("#next-button");
            nextButton.addEventListener("click", () => {
                if (currentPage < totalPage) {
                    currentPage++;
                    loadPage();
                }
            });

            // Botón de página anterior
            const prevButton = document.querySelector("#prev-button");
            prevButton.addEventListener("click", () => {
                if (currentPage > 1) {
                    currentPage--;
                    loadPage();
                }
            });


        // Búsqueda de videos
        const searchInput = document.querySelector("#search-input");
        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm === "") {
                videos = videosBackup; // Restaurar la lista original de videos si el campo de búsqueda está vacío
            } else {
                videos = videosBackup.filter(video =>
                    video.title.toLowerCase().includes(searchTerm) ||
                    video.description.toLowerCase().includes(searchTerm)
                );
            }

            currentPage = 1;
            totalPage = Math.ceil(videos.length / videosPerPage);
            loadPage();
        });

        // Variable para almacenar una copia de respaldo de la lista original de videos
        let videosBackup = videos.slice();

        // Reiniciar la búsqueda cuando el campo de búsqueda está vacío
        setInterval(() => {
            if (searchInput.value.trim() === "") {
                videos = videosBackup;
                loadPage();
            }
        }, 30000); // Reiniciar la búsqueda cada 30 segundos

        // Espera a que el DOM esté completamente cargado
        document.addEventListener("DOMContentLoaded", function() {
            // Obtén todas las imágenes de video
            const thumbnails = document.querySelectorAll('.video-thumbnail');
            // Obtén todos los títulos de video
            const titles = document.querySelectorAll('.video-title');

            // Agrega un evento de clic a cada imagen de video
            thumbnails.forEach(function(thumbnail) {
                thumbnail.addEventListener('click', function() {
                    // Obtén la URL del video desde el atributo 'href' del elemento padre 'a' (si lo tiene)
                    const videoUrl = this.parentElement.getAttribute('href');
                    // Redirige al usuario a la URL del video
                    window.location.href = videoUrl;
                });
            });

            // Agrega un evento de clic a cada título de video
            titles.forEach(function(title) {
                title.addEventListener('click', function() {
                    // Obtén la URL del video desde el atributo 'href' del elemento padre 'a' (si lo tiene)
                    const videoUrl = this.parentElement.getAttribute('href');
                    // Redirige al usuario a la URL del video
                    window.location.href = videoUrl;
                });
            });
        });
        // Buscador Final


            //los botones de cargar mas inicio
            let loadMoreBtn2 = document.querySelector("#load-more-2");
            let currentItem2 = 4;
            loadMoreBtn2.onclick = () => {
                let boxes = [...document.querySelectorAll(
                ".box-container-2 .box-2"
                )];
                for(var i = currentItem2; i < currentItem2 + 4; i++){
                        boxes[i].style.display = "inline-block";
                    }
                    currentItem2 += 4; 
                    if(currentItem2 >= boxes.length)     {
                        loadMoreBtn2.style.display = "none"
                    }       
            }  
            //boton 3
            let loadMoreBtn3 = document.querySelector("#load-more-3");
            let currentItem3 = 4;
            loadMoreBtn3.onclick = () => {
                let boxes = [...document.querySelectorAll(
                ".box-container-3 .box-3"
                )];
                for(var i = currentItem3; i < currentItem3 + 4; i++){
                        boxes[i].style.display = "inline-block";
                    }
                    currentItem3 += 4; 
                    if(currentItem3 >= boxes.length)     {
                        loadMoreBtn3.style.display = "none"
                    }       
            } 
            //los botones de cargar mas Final


            // regresa al inicio al presionar los notones de sig y pas Inicio
            var boton = document.getElementById("prev-button");

            boton.addEventListener("click", function() {
                window.scrollTo(0, 600);
            });
            var botonSiguiente = document.getElementById("next-button");

            botonSiguiente.addEventListener("click", function() {
                window.scrollTo(0, 600);
            });
            // regresa al inicio al presionar los notones de sig y pas  final 

            function redirectToPage(pageUrl) {
                window.location.href = pageUrl;
            }
            