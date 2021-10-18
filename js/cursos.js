Vue.component("modal", {
    props: ["num_preg"],
    data() {
        return {
            pregunta: {
                enunciado: "",
                opcionindex: -1,
                opciones: [
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                ],
            },
            errors: [],
        };
    },
    methods: {
        preguntaModal: function () {
            this.$emit("toggle-modal");
            this.limpiarModal();
        },
        limpiarModal: function () {
            this.errors = [];
            this.pregunta = {
                enunciado: "",
                opcionindex: -1,
                opciones: [
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                    {
                        preg_text: "",
                        checked: false,
                    },
                ],
            };
        },
        guardarPregunta: function () {
            let index = this.pregunta.opcionindex;
            this.errors = [];
            if (this.pregunta.enunciado == "") {
                this.errors.push("El enunciado es obligatorio");
            }
            if (
                this.pregunta.opciones[0].preg_text == "" &&
                this.pregunta.opciones[1].preg_text == ""
            ) {
                this.errors.push(
                    "Cada pregunta debe tener 2 opciones como mínimo"
                );
            }
            if (index == -1) {
                this.errors.push(
                    "Cada pregunta debe tener una respuesta correcta"
                );
            } else {
                this.pregunta.opciones[index].checked = true;
                if (
                    this.pregunta.opciones[index].checked &&
                    this.pregunta.opciones[index].preg_text == ""
                ) {
                    this.errors.push(
                        "La respuesta marcada no tiene texto asignado"
                    );
                }
            }

            if (this.errors.length == 0) {
                this.pregunta.preg_index = this.num_preg;
                this.$emit("guardar-pregunta", this.pregunta);
                this.preguntaModal();
            }
        },
    },
    template: `
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" style="height: fit-content">
                    <div class="modal-header">
                        <div class="mh-num"><span>{{num_preg}}</span></div>
                        <div class="mh-text">Editar pregunta:</div>
                    </div>
                    <div class="modal-form">
                        <div class="">
                            <p>&#8226; Enunciado:</p>
                            <textarea name="" id="" cols="30" rows="10" v-model="pregunta.enunciado"></textarea>
                        </div>
                        <div class="">
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa A:</p></div>
                                <div class="preg-opt">
                                    <input type="text" v-model="pregunta.opciones[0].preg_text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container" :class="{disabled: pregunta.opciones[0].preg_text == ''}">Respuesta Correcta
                                        <input 
                                            type="radio" 
                                            name="preg_opt_rad" 
                                            value="0" 
                                            v-model="pregunta.opcionindex" 
                                            :disabled="pregunta.opciones[0].preg_text == ''">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa B:</p></div>
                                <div class="preg-opt">
                                    <input type="text" v-model="pregunta.opciones[1].preg_text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container" :class="{disabled: pregunta.opciones[1].preg_text == ''}">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad" value="1" v-model="pregunta.opcionindex" :disabled="pregunta.opciones[1].preg_text == ''">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa C:</p></div>
                                <div class="preg-opt">
                                    <input type="text" 
                                        v-model="pregunta.opciones[2].preg_text" 
                                        :class="{disabled: pregunta.opciones[1].preg_text == ''}"
                                        :disabled="pregunta.opciones[1].preg_text == ''">
                                </div>
                                <div class="opt-rad">
                                    <label class="container" :class="{disabled: pregunta.opciones[2].preg_text == ''}">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad" value="2" v-model="pregunta.opcionindex" :disabled="pregunta.opciones[2].preg_text == ''">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa D:</p></div>
                                <div class="preg-opt">
                                    <input type="text" 
                                        v-model="pregunta.opciones[3].preg_text"  
                                        :class="{disabled: pregunta.opciones[2].preg_text == ''}"
                                        :disabled="pregunta.opciones[2].preg_text == ''">
                                </div>
                                <div class="opt-rad">
                                    <label class="container" :class="{disabled: pregunta.opciones[3].preg_text == ''}">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad" value="3" v-model="pregunta.opcionindex" :disabled="pregunta.opciones[3].preg_text == ''">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p v-for="error in errors">{{error}}</p>
                        </div>
                        <div class="btn-container">
                            <button class="btn-gray" @click="preguntaModal()">
                                Cancelar
                            </button>
                            <button class="btn-green" @click="guardarPregunta">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
});

Vue.component("css2-option", {
    props: ["contenido", "index"],
    data() {
        return {
            filename: "Archivos permitidos: jpg, png, pdf, ppt, docs, xls, mp4",
            contentName: "",
            filedata: [],
        };
    },
    methods: {
        css2FileSelected: function (event) {
            const [file] = event.target.files;
            this.filedata = event.target.files;
            let numFiles = event.target.files.length;
            numFiles > 0
                ? (this.filename = file.name)
                : (this.filename =
                      "Archivos permitidos: jpg, png, pdf, ppt, docs, xls, mp4");
            this.updateContent();
        },
        updateContent: function () {
            this.$emit("update-content", {
                index: this.index,
                name: this.contentName,
                filedata: this.filedata,
            });
        },
        removeContenido: function () {
            this.$emit("remove-contenido", this.index);
        },
    },
    template: `<div class="msb-option">
                    <span
                        class="material-icons css2-cancel"
                        @click="removeContenido"
                    >
                        cancel
                    </span>
                    <div
                        class="msb-bg msb-bg-red"
                        @click="$refs.css2_opt_file.click()"
                    >
                        <span class="material-icons-outlined"
                            >attach_file</span
                        >
                    </div>
                    <div class="msb-option-body">
                        <div class="msb-option-header">
                            <div class="msb-option-title">
                                <input
                                    type="text"
                                    placeholder="Añade un nombre"
                                    v-model="contentName"
                                    @keyup="updateContent"
                                />
                            </div>
                        </div>
                        <div class="css2-hr"></div>
                        <div class="msb-option-sub">   
                            {{filename}}
                        </div>
                        <input
                            v-show="false"
                            type="file"
                            ref="css2_opt_file"
                            name="css2_opt_file"
                            @change="css2FileSelected"
                            accept=".jpg, .png, .pdf, .ppt, .docs, .xls, .mp4"
                        />
                    </div>
                </div>`,
});

Vue.component("css4-option", {
    props: ["ejercicio", "index"],
    data() {
        return {
            titulo: "",
            indicaciones: "",
        };
    },
    methods: {
        updateEjercicio: function () {
            this.$emit("update-ejercicio", {
                index: this.index,
                titulo: this.titulo,
                indicaciones: this.indicaciones,
            });
        },
        removeEjercicio: function () {
            this.$emit("remove-ejercicio", this.index);
        },
    },
    template: `<div class="css4-ejercicio">
                    <span class="material-icons" @click="removeEjercicio"> cancel </span>
                    <div class="ejercicio-title">
                        <input
                            type="text"
                            placeholder="Añade un título al ejercicio"
                            v-model="titulo"
                            @input="updateEjercicio"
                        />
                    </div>
                    <div class="ejercicio-hr"></div>
                    <div class="ejercicio-indicacion">
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Agrega indicaciones al ejercicio..."
                            v-model="indicaciones"
                            @input="updateEjercicio"
                        ></textarea>
                    </div>
                </div>`,
});

var app = new Vue({
    el: "#app",
    data: {
        showModal: false,
        hasFile: false,
        step1_file: "",
        wizardstep: 1,
        num_preg: 0,
        modulos: [],
        participantes: [],
        contenidos: [],
        contenidos_contador: 1,
        ejercicios: [],
        ejercicios_contador: 1,
        preguntas: [],
        preguntas_enabled: 1,
        keyP: 0,
        tagP: [],
        curso_obj: {
            step1: {
                curso_name: "",
                categoria: 0,
                participantes: [],
                descripcion: "",
                img: [],
            },
        },
        link_curso: "",
    },
    created() {
        this.getModulos();
        this.getParticipantes();
    },
    methods: {
        getModulos: function () {
            let data = [
                {
                    id: 1,
                    mod_short: "Módulo SD",
                },
                {
                    id: 2,
                    mod_short: "Módulo TM",
                },
                {
                    id: 3,
                    mod_short: "Módulo EWM",
                },
                {
                    id: 4,
                    mod_short: "Módulo CO",
                },
                {
                    id: 5,
                    mod_short: "Módulo QM",
                },
                {
                    id: 6,
                    mod_short: "Módulo PM",
                },
                {
                    id: 7,
                    mod_short: "Módulo PP",
                },
                {
                    id: 8,
                    mod_short: "Módulo FI",
                },
                {
                    id: 9,
                    mod_short: "Módulo MM",
                },
            ];
            this.modulos = data;
        },
        getParticipantes: function () {
            let data = [
                {
                    id: 1,
                    grupo_participante: "Finanzas",
                },
                {
                    id: 2,
                    grupo_participante: "Comunicaciones",
                },
                {
                    id: 3,
                    grupo_participante: "Operarios",
                },
                {
                    id: 4,
                    grupo_participante: "Planta",
                },
                {
                    id: 5,
                    grupo_participante: "Comercial",
                },
                {
                    id: 6,
                    grupo_participante: "Recursos humanos",
                },
            ];
            this.participantes = data;
        },
        toggleModal: function (disableModalBool = false) {
            if (!disableModalBool) {
                this.showModal = !this.showModal;
            }
        },
        range: function (start, end) {
            return Array(end - start + 1)
                .fill()
                .map((_, idx) => start + idx);
        },
        selectedFile: function (event) {
            const [file] = event.target.files;
            let numFiles = event.target.files.length;
            numFiles > 0
                ? ((this.hasFile = true), (this.step1_file = file))
                : ((this.hasFile = false), (this.step1_file = ""));
            // this.filename = event.target.files[0].name;
        },
        clearInputFile: function () {
            this.$refs.file.value = null;
            this.step1_file = "";
            this.hasFile = false;
        },
        addContenido: function () {
            this.contenidos.push({
                id: this.contenidos_contador,
                contenido_name: "",
                filedata: [],
            });
            this.contenidos_contador++;
        },
        removeContenido: function (index) {
            this.$delete(this.contenidos, index);
        },
        updateContent: function (obj) {
            this.contenidos[obj.index].contenido_name = obj.name;
            this.contenidos[obj.index].filedata = obj.filedata;
        },
        addEjercicio: function () {
            this.ejercicios.push({
                id: this.ejercicios_contador,
                titulo: "",
                indicaciones: "",
            });
            this.ejercicios_contador++;
        },
        removeEjercicio: function (index) {
            this.$delete(this.ejercicios, index);
        },
        updateEjercicio: function (obj) {
            this.ejercicios[obj.index].titulo = obj.titulo;
            this.ejercicios[obj.index].indicaciones = obj.indicaciones;
        },
        guardarPregunta: function (obj) {
            this.preguntas_enabled++;
            this.preguntas.push(obj);
        },
        css3_preg_title: function (index) {
            let enunciado = this.preguntas.filter(
                (item) => item.preg_index == index
            );
            if (enunciado.length) {
                return enunciado[0].enunciado;
            } else {
                return "Escribir pregunta";
            }
        },
        participanteOnChange: function (id, text) {
            var obj = { id: id, text: text };
            if (id == "0") {
                return;
            }
            if (!this.tagP.some((data) => data.id === id)) {
                this.tagP.push(obj);
            }
        },
        deleteFromTagP: function (index) {
            this.tagP.splice(index, 1);
        },
        publicarCurso: function () {
            console.log("publicarCurso");
        },
    },
    computed: {
        class_cs_steps: function () {
            if (this.wizardstep >= 1 && this.wizardstep <= 4) {
                return "cs-steps" + this.wizardstep;
            } else {
                return "cs-steps4";
            }
        },
        file: function () {
            return URL.createObjectURL(this.step1_file);
        },
        validateStep1: function () {
            if (
                this.curso_obj.step1.curso_name !== "" &&
                this.tagP.length &&
                this.curso_obj.step1.categoria !== 0
            ) {
                return false;
            } else {
                return true;
            }
        },
    },
});
