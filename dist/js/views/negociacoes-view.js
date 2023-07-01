export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
