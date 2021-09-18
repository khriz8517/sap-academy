Vue.component("modal", {
    props: ["total_points"],
    methods: {
        toggleModal: function () {
            this.$emit("toggle-modal");
        },
    },
    computed: {
        modal_title: function () {
            return this.total_points > 0
                ? "Felicidades tienes " + this.total_points + " puntos"
                : "Bienvenido a SAP academy";
        },
    },
    template: `
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <h3>{{modal_title}}</h3>
                    <p>Completa cursos para ganar puntos y desbloquear módulos.</p>
                    <div class="modal-footer">
                        <a href="#" class="modal-btn green-grad_btn" @click="toggleModal()">Continuar</a>
                    </div>
                </div>
            </div>
        </div>`,
});

var app = new Vue({
    el: "#app",
    data: {
        searching: false,
        search_value: "",
        search_count: 0,
        showModal: false,
        showTableDetails: false,
        coursesByModuleId: 0,
        total_points: 0,
        welcome: {
            head: "Bienvenido a",
            title: "sap academy",
            foot: "Completa cursos y gana puntos.",
        },
        modules_completed: 0,
        selected_module_id: 0,
        selected_category_text: "",
        modulos: [],
        cursos_pool: [
            {
                id: 1,
                mod_id: 1,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 70,
                estado: 1,
                nota: 50,
                intentos: 1,
            },
            {
                id: 2,
                mod_id: 1,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 50,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 3,
                mod_id: 1,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 30,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 4,
                mod_id: 2,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 10,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 5,
                mod_id: 2,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 90,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 6,
                mod_id: 3,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 50,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 7,
                mod_id: 3,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 30,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 8,
                mod_id: 4,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 10,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 9,
                mod_id: 5,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 90,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 10,
                mod_id: 5,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 50,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 11,
                mod_id: 5,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 0,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 12,
                mod_id: 6,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 100,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
            {
                id: 13,
                mod_id: 6,
                curso: "Nombre del Curso",
                curso_img: "./images/curso.jpg",
                link: "#",
                progress: 100,
                estado: 0,
                nota: 50,
                intentos: 1,
            },
        ],
    },
    created() {
        this.getModulos();
    },
    methods: {
        getModulos: function () {
            let data = [
                {
                    id: 1,
                    mod_short: "Módulo SD",
                    mod_large: "Ventas y distribución",
                    progress: 100,
                    estado: 1,
                },
                {
                    id: 2,
                    mod_short: "Módulo TM",
                    mod_large: "Gestión de transporte",
                    progress: 0,
                    estado: 1,
                },
                {
                    id: 3,
                    mod_short: "Módulo EWM",
                    mod_large: "Gestión de almacenes",
                    progress: 0,
                    estado: 1,
                },
                {
                    id: 4,
                    mod_short: "Módulo CO",
                    mod_large: "Contabilidad de costos",
                    progress: 0,
                    estado: 1,
                },
                {
                    id: 5,
                    mod_short: "Módulo QM",
                    mod_large: "Calidad",
                    progress: 0,
                    estado: 1,
                },
                {
                    id: 6,
                    mod_short: "Módulo PM",
                    mod_large: "Mantenimiento",
                    progress: 0,
                    estado: 1,
                },
                {
                    id: 7,
                    mod_short: "Módulo PP",
                    mod_large: "Gestión de producción",
                    progress: 0,
                    estado: 0,
                },
                {
                    id: 8,
                    mod_short: "Módulo FI",
                    mod_large: "Finanzas",
                    progress: 0,
                    estado: 0,
                },
                {
                    id: 9,
                    mod_short: "Módulo MM",
                    mod_large: "Gestión de materiales",
                    progress: 0,
                    estado: 0,
                },
            ];
            this.modulos = data;
            data.forEach((element) => {
                element.progress == 100 ? (this.modules_completed += 1) : null;
            });
        },
        getCourses: function (idmod, param) {
            let completed = this.cursos_pool.filter(
                (item) => item.mod_id == idmod && item.progress == 100
            ).length;
            let inprogress = this.cursos_pool.filter(
                (item) =>
                    item.mod_id == idmod &&
                    item.progress > 0 &&
                    item.progress < 100
            ).length;
            let nostarted = this.cursos_pool.filter(
                (item) => item.mod_id == idmod && item.progress == 0
            ).length;
            let cursos = this.cursos_pool.filter(
                (item) => item.mod_id == idmod
            );
            let average =
                cursos.reduce((total, next) => total + next.nota, 0) /
                cursos.length;
            switch (param) {
                case 0:
                    return completed;
                case 1:
                    return inprogress;
                case 2:
                    return nostarted;
                case 3:
                    return average ? average : 0;
                default:
                    return "Por definir";
            }
        },
        getCoursesByModuleId: function (id) {
            return this.cursos_pool.filter((item) => item.mod_id === id);
        },
        getEstado: function (estado) {
            switch (estado) {
                case 0:
                    return "No iniciado";
                case 1:
                    return "En proceso";
                case 2:
                    return "Completado";
                default:
                    return "Error";
            }
        },
        toggleModal: function () {
            this.showModal = !this.showModal;
        },
    },
    computed: {
        progressbar: function () {
            return (this.modules_completed * 100) / this.modulos.length;
        },
        stages: function () {
            var array = [{ number: 0, value: 0, estado: 1 }];
            var stage_points = 0;
            for (let i = 0; i < this.modulos.length; i++) {
                const element = this.modulos[i];
                array.push({
                    number: i + 1,
                    value: (stage_points += 50),
                    estado: element.progress == 100 ? 1 : 0,
                });
            }
            return array;
        },
        cursos: function () {
            return this.getCoursesByModuleId(this.selected_module_id);
        },
        detalleModulo: function () {
            return this.getCoursesByModuleId(this.coursesByModuleId);
        },
        moduloName: function () {
            return this.modulos.filter(
                (item) => item.id == this.coursesByModuleId
            )[0].mod_short;
        },
        cursos_search: function () {
            return this.cursos_pool.filter((item) =>
                item.curso.toLowerCase().includes(this.search_value)
            );
        },
    },
});
