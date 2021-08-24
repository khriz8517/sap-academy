var app = new Vue({
    el: '#app',
    data:{
        searching: false,
        search_value: '',
        search_count: 0,
        welcome: {
            head: 'Bienvenido a',
            title: 'sap academy',
            foot: 'Completa cursos y gana puntos.'
        },
        progressbar: 0,
        stages: [
            { id: 1, number: 0, value: 0, estado: 1 },
            { id: 2, number: 1, value: 50, estado: 1 },
            { id: 3, number: 2, value: 100, estado: 1 },
            { id: 4, number: 3, value: 150, estado: 1 },
            { id: 5, number: 4, value: 200, estado: 0 },
            { id: 6, number: 5, value: 300, estado: 0 },
            { id: 7, number: 6, value: 400, estado: 0 },
            { id: 8, number: 7, value: 600, estado: 0 },
            { id: 9, number: 8, value: 800, estado: 0 },
        ],
        selected_category_id: 0,
        selected_category_text: '',
        categorias: [
            { id: 1, cat_short: 'Módulo SD', cat_large: 'Ventas y distribución', estado: 1 },
            { id: 2, cat_short: 'Módulo TM', cat_large: 'Gestión de transporte', estado: 1 },
            { id: 3, cat_short: 'Módulo EWM', cat_large: 'Gestión de almacenes', estado: 1 },
            { id: 4, cat_short: 'Módulo CO', cat_large: 'Contabilidad de costos', estado: 1 },
            { id: 5, cat_short: 'Módulo QM', cat_large: 'Calidad', estado: 1 },
            { id: 6, cat_short: 'Módulo PM', cat_large: 'Mantenimiento', estado: 1 },
            { id: 7, cat_short: 'Módulo PP', cat_large: 'Gestión de producción', estado: 0 },
            { id: 8, cat_short: 'Módulo FI', cat_large: 'Finanzas', estado: 0 },
            { id: 9, cat_short: 'Módulo MM', cat_large: 'Gestión de materiales', estado: 0}
        ],
        cursos_pool: [
            { id: 1, cat_id: 1, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 70 },
            { id: 2, cat_id: 1, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 50 },
            { id: 3, cat_id: 1, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 30 },
            { id: 4, cat_id: 2, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 10 },
            { id: 5, cat_id: 2, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 90 },
            { id: 6, cat_id: 3, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 50 },
            { id: 7, cat_id: 3, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 30 },
            { id: 8, cat_id: 4, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 10 },
            { id: 9, cat_id: 5, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 90 },
            { id: 10, cat_id: 5, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 50 },
            { id: 11, cat_id: 5, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 30 },
            { id: 12, cat_id: 6, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 10 },
            { id: 13, cat_id: 6, curso: 'Nombre del Curso', curso_img: './images/curso.jpg', link: '#', progress: 90 }
        ],
        cursos: []
    },
    created(){
        this.getProgressBarPercentage();
    },
    methods: {
        getProgressBarPercentage: function(){
            this.progressbar = 30;
        },
        searchCourse: function(){
            this.searching = true;
            for (let i = 0; i < this.cursos_pool.length; i++) {
                var item = this.cursos_pool[i];
                this.cursos_pool.filter((item) => item.curso.includes(this.search_value));
            }
        }
    },
    computed: {
        cursos_search: function (){
            return this.cursos_pool.filter((item) => item.curso.toLowerCase().includes(this.search_value));
        },
    },
    watch: {
        selected_category_id: function(newval, oldval){
            this.cursos = [];
            for (let i = 0; i < this.cursos_pool.length; i++) {
                var item = this.cursos_pool[i];
                if(item.cat_id == newval){
                    this.cursos.push(item);
                }
            }
        }
    }
})