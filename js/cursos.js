Vue.component("modal", {
    props: ["num_preg"],
    methods: {
        preguntaModal: function () {
            this.$emit("toggle-modal");
        },
    },
    template: `
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" style="height: 35em">
                    <div class="modal-header">
                        <div class="mh-num">{{num_preg}}</div>
                        <div class="mh-text">Editar pregunta:</div>
                    </div>
                    <div class="modal-form">
                        <div class="">
                            <p>&#8226; Enunciado:</p>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="">
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa A:</p></div>
                                <div class="preg-opt">
                                    <input type="text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad">
                                        <span class="checkmark"></span>
                                    </label>
                                    
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa A:</p></div>
                                <div class="preg-opt">
                                    <input type="text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad">
                                        <span class="checkmark"></span>
                                    </label>
                                    
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa A:</p></div>
                                <div class="preg-opt">
                                    <input type="text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad">
                                        <span class="checkmark"></span>
                                    </label>
                                    
                                </div>
                            </div>
                            <div class="preg-opt-container">
                                <div class="preg-opt-label"><p>&#8226; Alternativa A:</p></div>
                                <div class="preg-opt">
                                    <input type="text">
                                </div>
                                <div class="opt-rad">
                                    <label class="container">Respuesta Correcta
                                        <input type="radio" name="preg_opt_rad">
                                        <span class="checkmark"></span>
                                    </label>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="btn-container">
                            <button class="btn-gray" @click="preguntaModal()">
                                Cancelar
                            </button>
                            <button class="btn-green" @click="">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
});

var app = new Vue({
    el: "#app",
    data: {
        showModal: true,
        wizardstep: 1,
        num_preg: 0,
    },
    created() {},
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        },
        range: function (start, end) {
            return Array(end - start + 1)
                .fill()
                .map((_, idx) => start + idx);
        },
    },
    computed: {
        class_cs_steps: function () {
            return "cs-steps" + this.wizardstep;
        },
    },
});
