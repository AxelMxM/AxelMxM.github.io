let videos = [
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/23.png",
        title: "Programación Tia portal",
        description: "Interfaz Web para Control de PLC en TIA Portal",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.completa.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31completa.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/12.jpg",
        title: "Programación Mchine Expert Basic",
        description: "Programación 4 Semaforo ",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/4.jpg",
        title: "Registro de Datos de Potenciómetro en LabVIEW ",
        description: "Programación en LabVIEW 3",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/21.jpg",
        title: "Automatización en TIA Portal ",
        description: "Banda transportadora equipada con dos sensores",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza10.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/17.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 17 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza17.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/18.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 18 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza18.1.html"
    }
    // Agrega más objetos de video según sea necesario
];

let videosPerPage = 4;
let currentPage = 1;

function displayVideos() {
    const container = document.querySelector(".box-container-2");

    const start = (currentPage - 1) * videosPerPage;
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

    // Si no hay más videos para mostrar, ocultar el botón "Cargar más"
    if (end >= videos.length) {
        document.querySelector("#load-more-2").style.display = "none";
    }
}

// Cargar los primeros videos al cargar la página
displayVideos();

// Cargar más videos cuando se presiona el botón "Cargar más"
document.querySelector("#load-more-2").addEventListener("click", () => {
    currentPage++; // Incrementa la página actual
    displayVideos(); // Muestra los videos de la nueva página
});




let imagenes = [
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/23.png",
        title: "Programación Tia portal",
        description: "Programación 5",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza5.html"
    },
    
    
    
    //Diseño asistido por computadora Inicio
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 1 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/2.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 2 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/3.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 3 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/4.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 4 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/5.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 5 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/6.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 6 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza6.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/7.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 7 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza7.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/8.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 8 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza8.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/8.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 8 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza8.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/9.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 9 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza9.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/9.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 9 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza9.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/10.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 10 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza10.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/10.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 10 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza10.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/11.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 11 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza11.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/11.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 11 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza11.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/12.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 12 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza12.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/12.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 12 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza12.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/13.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 13 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza13.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/13.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 13 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza13.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/14.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 14 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza14.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/15.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 15 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza15.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/16.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 16 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza16.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/17.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 17 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza17.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/18.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 18 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza18.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/18.1.jpg",
        title: "Diseño Asistido",
        description: "Pieza 18 AutoCad",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza18.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/19.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 19 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza19.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/20.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 20 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza20.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/21.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 21 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza21.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/22.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 22 Examen Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza22.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/23.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 23 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza23.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/24.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 24 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza24.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/25.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 25 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza25.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/26.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 26 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza26.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/27.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 27 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza27.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/27.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 27 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza27.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/28.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 28 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza28.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/28.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 28 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza28.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/29.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 29 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza29.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/29.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 29 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza29.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/30.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 30 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza30.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/30.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 30 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza30.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/30.2.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 30 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza30.2.html"
    }
    ,
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.2.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.2.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.2.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.3.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.3.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.3.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.4.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31.4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/31.completa.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 31 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza31completa.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.2.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.2.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.2.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.3.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.4.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.4.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.4.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.5.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.5.1.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.5.1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.6.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.6.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.7.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.7.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32.8.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.8.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/imagenes-Diseño Asistido/32 completa.jpg",
        title: "Diseño Asistido por Computadora",
        description: "Pieza 32 Autodesk Inventor Professional",
        link: "/Todos-los-Trabajos/Trabajos-Diseño-Asistido/Pieza32.completo.html"
    }, 
    // Diseño asistido por computadora final


    //elementos dimensionales Inicio
    {
        imageSrc: "/Todos-los-Trabajos/elementos dimensionales/Imagenes de dibujo/Pieza1.jpg",
        title: "Dibujo elementos dimensionales",
        description: "Pieza 1",
        link: "/Todos-los-Trabajos/elementos dimensionales/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/elementos dimensionales/Imagenes de dibujo/Pieza2.jpg",
        title: "Dibujo elementos dimensionales",
        description: "Pieza 2",
        link: "/Todos-los-Trabajos/elementos dimensionales/Pieza2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/elementos dimensionales/Imagenes de dibujo/Pieza3.jpg",
        title: "Dibujo elementos dimensionales",
        description: "Pieza 3",
        link: "/Todos-los-Trabajos/elementos dimensionales/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/elementos dimensionales/Imagenes de dibujo/Pieza4.jpg",
        title: "Dibujo elementos dimensionales",
        description: "Pieza 4",
        link: "/Todos-los-Trabajos/elementos dimensionales/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/elementos dimensionales/Imagenes de dibujo/Pieza5.jpg",
        title: "Dibujo elementos dimensionales",
        description: "Pieza 5",
        link: "/Todos-los-Trabajos/elementos dimensionales/Pieza5.html"
    }, 
    //elementos dimensionales Inicio

    //control lógico programable Inicio
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/1.jpg",
        title: "Programación Mchine Expert Basic",
        description: "Programación 1",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/4.jpg",
        title: "Programación Mchine Expert Basic",
        description: "Programación 2",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/8.jpg",
        title: "Programación Mchine Expert Basic",
        description: "Programación 3",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza3.html"
    }, 
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/12.jpg",
        title: "Programación Mchine Expert Basic",
        description: "Programación 4",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/control lógico programable/imagenes-controles-logicos/23.png",
        title: "Programación Tia portal",
        description: "Interfaz Web para Control de PLC en TIA Portal",
        link: "/Todos-los-Trabajos/control lógico programable/Pieza5.html"
    },
    //control lógico programable Final
    
    //CNC
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/1.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 1",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/5.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 2",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/9.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 3",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/13.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 4",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/17.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 5",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/21.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 6",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza6.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/25.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 7",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza7.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/29.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 8",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza8.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/33.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 9",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza9.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Imagenes-Simulacion-CNC/37.jpg",
        title: "Simulacion de piezas en torno CNC FANUC HAAS",
        description: "Simulacion de pieza 10",
        link: "/Todos-los-Trabajos/Manofactura-flexible-cnc/Pieza10.html"
    },
    //CNC Final

    //Robotica Inicio   
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/2.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 1",
        link: "/Todos-los-Trabajos/Robotica/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/4.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 2",
        link: "/Todos-los-Trabajos/Robotica/Pieza2.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/9.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 3",
        link: "/Todos-los-Trabajos/Robotica/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/10.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 4",
        link: "/Todos-los-Trabajos/Robotica/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/12.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 5",
        link: "/Todos-los-Trabajos/Robotica/Pieza5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Robotica/imagene-Robotica/14.jpg",
        title: "Simulacion de piezas en Robotstudio",
        description: "Simulacion de pieza 6",
        link: "/Todos-los-Trabajos/Robotica/Pieza6.html"
    },
    //Robotica final 


    //microcontroladores Inicio 
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/2.jpg",
        title: "Control de Motor con LabVIEW y Sensores ",
        description: "Programación en LabVIEW 1",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/1.jpg",
        title: "Control de Motor con LabVIEW y Sensores ",
        description: "Programación en LabVIEW 2",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza1.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/4.jpg",
        title: "Registro de Datos de Potenciómetro en LabVIEW ",
        description: "Programación en LabVIEW 3",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza3.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/5.jpg",
        title: "Desarrollo del Controlador de Luces LED en Arduino ",
        description: "Programación en Arduino 1",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza4.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/10.jpg",
        title: "Desarrollo del Controlador de Luces LED en Arduino ",
        description: "Programación en Arduino 1",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza5.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/12.jpg",
        title: "Certificación internacional en el programa LabVIEW",
        description: "Examen",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza6.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/16.jpg",
        title: "Brazo robótico",
        description: "Programación de brazo robótico",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza7.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/19.jpg",
        title: "Perforar una placa de metal",
        description: "Fresadora",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza8.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/20.jpg",
        title: "Fabricación de uno engrané ",
        description: "Torno",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza9.html"
    },
    {
        imageSrc: "/Todos-los-Trabajos/Microcontroladores/imagenes-Microcontroladores/21.jpg",
        title: "Automatización en TIA Portal ",
        description: "Banda transportadora equipada con dos sensores",
        link: "/Todos-los-Trabajos/Microcontroladores/Pieza10.html"
    },

];
// Mezcla las imágenes en un orden aleatorio
imagenes.sort(() => Math.random() - 0.5);

let imagenesPorPagina = 4;
let paginaActual = 1;

function displayImagenes() {
    const container = document.querySelector(".box-container-3");

    const start = (paginaActual - 1) * imagenesPorPagina;
    const end = start + imagenesPorPagina;
    const displayedImagenes = imagenes.slice(start, end);

    displayedImagenes.forEach((imagen) => {
        const box = document.createElement("div");
        box.classList.add("box-1");
        box.style.display = "inline-block"; // Estilo en línea para mostrar en línea
        box.innerHTML = `
            <div class="content">
                <a class="imagen-link" href="${imagen.link}">
                    <img src="${imagen.imageSrc}" alt="imagenes">
                    <h3>${imagen.title}</h3>
                    <p>${imagen.description}</p>
                </a>
            </div>
        `;
        container.appendChild(box);
    });

    // Si no hay más imágenes para mostrar o se han mostrado 16, ocultar el botón "Cargar más"
    if (end >= imagenes.length || paginaActual * imagenesPorPagina >= 12) {
        document.querySelector("#load-more-3").style.display = "none";
    } else {
        document.querySelector("#load-more-3").style.display = "block"; // Asegura que el botón esté visible si hay más imágenes
    }
}

// Cargar las primeras imágenes al cargar la página
displayImagenes();

// Cargar más imágenes cuando se presiona el botón "Cargar más"
document.querySelector("#load-more-3").addEventListener("click", () => {
    paginaActual++; // Incrementa la página actual
    displayImagenes(); // Muestra las imágenes de la nueva página
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("my-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.display = "none"; // Oculta la imagen actual después de 60 segundos
        if (slideIndex >= slides.length) {
            slideIndex = 0; // Reinicia el índice si se ha alcanzado el final de las imágenes
        }
        showSlides(); // Muestra la siguiente imagen
    }, 2500); // Mostrar cada imagen durante 60 segundos (60000 milisegundos)
}
